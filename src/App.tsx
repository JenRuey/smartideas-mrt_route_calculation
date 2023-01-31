import _ from "lodash";
import { SetStateAction, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FcIdea } from "react-icons/fc";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import LabelledAutocompleteText from "./components/LabelledAutocompleteText";
import Loading from "./components/Loading";
import StationBox from "./components/StationBox";
import StationLine from "./components/StationLine";
import { ShadowBox } from "./components/styled/ShadowBox";
import { StationResultType, StationType } from "./constants/mrt.types";
import { findRoute } from "./constants/mrtfunction";
import { allStation } from "./constants/mrtmap";
import { updateSearchResult } from "./state/API/appAPI";
import { useAppDispatch, useAppSelector } from "./state/hook";
import { ordinal_suffix_of } from "./utils/number-utils";

interface RouteFormElements extends HTMLFormControlsCollection {
  spointslct: HTMLSelectElement;
  epointslct: HTMLSelectElement;
}

interface RouteForm extends HTMLFormElement {
  readonly elements: RouteFormElements;
}

type StopBoxType = {
  stops: Array<StationType>;
  deleteStops: (index: number) => void;
  modify: React.Dispatch<SetStateAction<Array<StationType>>>;
};
export function StopBox({ stops, deleteStops, modify }: StopBoxType) {
  const dragItem = useRef<number | undefined>();
  const dragOverItem = useRef<number | undefined>();

  const onDragStopStart = (pos: number) => {
    dragItem.current = pos;
  };

  const onDragStopEnter = (pos: number) => {
    dragOverItem.current = pos;
  };

  const onDragStopEnd = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (dragItem.current !== undefined && dragOverItem.current !== undefined) {
      let copyListItems = [...stops];
      let dragItemContent = copyListItems[dragItem.current];
      copyListItems.splice(dragItem.current, 1);
      copyListItems.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = undefined;
      dragOverItem.current = undefined;
      modify(copyListItems);
    }
  };

  return (
    <div className={"flex-center flex-wrap mx-3 mb-2"}>
      {stops.map((item, index) => {
        return (
          <div key={"stop-box-" + index + "-" + item.name} className={"flex-center"}>
            <IoIosArrowForward />
            <div draggable onDragStart={() => onDragStopStart(index)} onDragEnter={() => onDragStopEnter(index)} onDragEnd={onDragStopEnd}>
              <StationBox item={item} ltr={true} delaction={() => deleteStops(index)} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

type StopLineType = {
  stops: Array<StationType>;
  onChange: (stops: Array<StationType>) => void;
};
function StopLine({ stops, onChange }: StopLineType) {
  const moveUp = (index: number) => {
    let array = [...stops];
    let moveobj = array[index];
    array.splice(index, 1);
    array.splice(index - 1, 0, moveobj);
    onChange(array);
  };
  const moveDown = (index: number) => {
    let array = [...stops];
    let moveobj = array[index];
    array.splice(index, 1);
    array.splice(index + 1, 0, moveobj);
    onChange(array);
  };
  const deletethis = (index: number) => {
    let array = [...stops];
    array.splice(index, 1);
    onChange(array);
  };

  return (
    <div className={"d-flex flex-column"}>
      {stops.map((item, index) => {
        return (
          <div key={"stop-box-" + index + "-" + item.name} className={"d-flex align-items-start flex-column"}>
            <div className="d-flex flex-column mx-3">
              <GoPrimitiveDot color="lightgreen" />
              <GoPrimitiveDot color="lightgreen" />
            </div>

            <div className="d-flex flex-column flex-wrap">
              <div>
                {"Your "}
                <strong>{ordinal_suffix_of(index + 1)}</strong>
                {" Stop of the journey is "}
              </div>
              <div className="flex-center flex-wrap">
                <StationBox item={item} ltr={true} />
                <div className="flex-center">
                  <div>{", move it "}</div>
                  <button className="mx-1" type={"button"} onClick={() => moveUp(index)}>
                    {"up"}
                  </button>
                  <div>{" or "}</div>
                  <button className="mx-1" type={"button"} onClick={() => moveDown(index)}>
                    {"down"}
                  </button>
                  <div>{" else "}</div>
                  <button className="mx-1" type={"button"} onClick={() => deletethis(index)}>
                    {"delete"}
                  </button>
                  <div>{" it."}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="d-flex flex-column mx-3">
        <GoPrimitiveDot color="lightgreen" />
        <GoPrimitiveDot color="lightgreen" />
      </div>
    </div>
  );
}

function App() {
  const appState = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const [stops, addStop] = useState<Array<StationType>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const calcRoute = (event: React.FormEvent<RouteForm>) => {
    event.preventDefault();

    let { spointslct, epointslct } = event.currentTarget.elements;
    setLoading(true);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      let result: Array<StationResultType> = [];
      let stopresult: Array<StationResultType> = [];
      let startPoint: string = spointslct.value;
      //calc stops
      for (let st of _.map(stops, (o) => o.name)) {
        stopresult = findRoute(startPoint, st);
        if (result[result.length - 1]?.usedRoute === stopresult[0]?.usedRoute) stopresult.shift();
        // stopresult.pop();
        result = result.concat(stopresult);

        startPoint = st;
      }

      stopresult = findRoute(startPoint, epointslct.value || startPoint);
      if (result[result.length - 1]?.usedRoute === stopresult[0]?.usedRoute) stopresult.shift();
      // stopresult.pop();
      result = result.concat(stopresult);

      dispatch(updateSearchResult(result));
      setTimeout(() => {
        document.getElementById("result-box")?.scrollIntoView();
        setLoading(false);
        document.body.style.overflow = "auto";
      }, 800);
    }, 200);
  };

  const onStopSelectChanged = (value: string) => {
    let stopStation = _.find(allStation, (o) => o.name === value);
    if (stopStation !== undefined) {
      addStop((prevState) => {
        if (stopStation !== undefined) {
          return [...prevState, stopStation];
        }
        return prevState;
      });
      return true;
    }
  };

  const stations = _.sortBy(allStation, (o) => o.description);
  return (
    <div className="App">
      {loading && <Loading />}
      <div className="flex-center-between flex-wrap p-2" style={{ background: "darkblue", color: "white" }}>
        <div className="flex-center">
          <FcIdea size={25} />
          <span className="header">SMART IDEAS</span>
        </div>
        <div>{"MRT Route Calculation " + appState.version.toFixed(1)}</div>
      </div>

      <div className="p-2">
        <Form onSubmit={calcRoute}>
          <ShadowBox>
            <LabelledAutocompleteText
              name={"spointslct"}
              label={"Start From"}
              data-testid={"spointslct"}
              placeholder={"Your Origin..."}
              options={stations.map((item) => {
                return { label: item.description + " (" + item.name + ")", value: item.name };
              })}
            />
            <StopLine stops={stops} onChange={addStop} />
            <div id="add-stop-box">
              <LabelledAutocompleteText
                lblColor={"lightgreen"}
                name={"stopboxselector"}
                label={"Add Stop"}
                data-testid={"stopboxselector"}
                onChange={onStopSelectChanged}
                placeholder={"Your stop..."}
                options={stations.map((item) => {
                  return { label: item.description + " (" + item.name + ")", value: item.name };
                })}
              />
              <div className="d-flex flex-column mx-3">
                <GoPrimitiveDot color="#d0ff00" />
                <GoPrimitiveDot color="#d0ff00" />
              </div>
            </div>
            <LabelledAutocompleteText
              name={"epointslct"}
              label={"End At"}
              data-testid={"epointslct"}
              placeholder={"Your Destination..."}
              options={stations.map((item) => {
                return { label: item.description + " (" + item.name + ")", value: item.name };
              })}
            />

            <div className="d-flex justify-content-end">
              <Button variant="success" type="submit">
                {"Calculate"}
              </Button>
            </div>
          </ShadowBox>
        </Form>
        <StationLine line={appState.result} stops={stops} />
      </div>
    </div>
  );
}

export default App;
