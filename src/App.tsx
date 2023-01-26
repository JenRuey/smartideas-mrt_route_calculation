import _ from "lodash";
import { useRef, useState, SetStateAction } from "react";
import { Button, Form } from "react-bootstrap";
import { FcIdea } from "react-icons/fc";
import { IoIosArrowForward } from "react-icons/io";
import Arrow from "./components/Arrow";
import LabelledSelect from "./components/LabelledSelect";
import StationBox from "./components/StationBox";
import { ShadowBox } from "./components/styled/ShadowBox";
import { StationType } from "./constants/mrt.types";
import { findRoute } from "./constants/mrtfunction";
import { allStation } from "./constants/mrtmap";
import { updateSearchResult } from "./state/API/appAPI";
import { useAppDispatch, useAppSelector } from "./state/hook";

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
function StopBox({ stops, deleteStops, modify }: StopBoxType) {
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
      //console.log("moving pos " + dragItem.current + " to pos " + dragOverItem.current);
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

function App() {
  const appState = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const [stops, addStop] = useState<Array<StationType>>([]);

  const calcRoute = (event: React.FormEvent<RouteForm>) => {
    event.preventDefault();
    let { spointslct, epointslct } = event.currentTarget.elements;

    let result: Array<StationType> = [];

    let startPoint: string = spointslct.value;
    //calc stops
    for (var st of _.map(stops, (o) => o.name)) {
      let testresult = findRoute(startPoint, st);
      testresult.pop();
      result = result.concat(testresult);
      startPoint = st;
    }
    result = result.concat(findRoute(startPoint, epointslct.value));

    dispatch(updateSearchResult(result));
  };

  const stations = _.sortBy(allStation, (o) => o.description);

  const onStopSelectChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let stopStation = _.find(allStation, (o) => o.name === event.target.value);
    if (stopStation !== undefined) {
      addStop((prevState) => {
        if (stopStation !== undefined) {
          return [...prevState, stopStation];
        }
        return prevState;
      });
    }
  };

  const deleteStops = (delindex: number) => {
    addStop((prevState) => {
      let newArray = [...prevState];
      newArray.splice(delindex, 1);
      return newArray;
    });
  };

  return (
    <div className="App m-2">
      <div className="flex-center-between flex-wrap mb-2">
        <div className="flex-center">
          <FcIdea size={25} />
          <span className="header">SMART IDEAS</span>
        </div>
        <div>{"MRT Route Calculation " + appState.version.toFixed(1)}</div>
      </div>

      <Form onSubmit={calcRoute}>
        <ShadowBox>
          <LabelledSelect name={"spointslct"} label={"Start From"} defaultValue={""} data-testid={"spointslct"}>
            <option value="" disabled>
              {"Your Origin..."}
            </option>
            {stations.map((item) => {
              return (
                <option key={"opt-origin-" + item.name} value={item.name}>
                  {item.description + " (" + item.name + ")"}
                </option>
              );
            })}
          </LabelledSelect>
          <StopBox stops={stops} modify={addStop} deleteStops={deleteStops} />
          <LabelledSelect name={"epointslct"} label={"End At"} defaultValue={""} data-testid={"epointslct"}>
            <option value="" disabled>
              {"Your Destination..."}
            </option>
            {stations.map((item) => {
              return (
                <option key={"opt-dest-" + item.name} value={item.name}>
                  {item.description + " (" + item.name + ")"}
                </option>
              );
            })}
          </LabelledSelect>

          <div id="add-stop-box">
            <LabelledSelect lblColor={"lightgreen"} name={"stopboxselector"} label={"Add Stop"} defaultValue={""} data-testid={"stopboxselector"} onChange={onStopSelectChanged}>
              <option value="" disabled>
                {"Your stop..."}
              </option>
              {stations.map((item) => {
                return (
                  <option key={"opt-stop-" + item.name} value={item.name}>
                    {item.description + " (" + item.name + ")"}
                  </option>
                );
              })}
            </LabelledSelect>
          </div>

          <div className="d-flex justify-content-end">
            <Button variant="success" type="submit">
              {"Calculate"}
            </Button>
          </div>
        </ShadowBox>
      </Form>
      <div id={"result-box"}>
        <div className="flex-center flex-wrap overflow-hidden">
          {appState.result.map((item, index) => {
            return (
              <div key={"result-station-" + index} className={"flex-center"}>
                <StationBox item={item} />
                {index !== appState.result.length - 1 && <Arrow direction="right" route={appState.result[index + 1].usedRoute || ""} />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
