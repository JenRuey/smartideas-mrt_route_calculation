import _ from "lodash";
import { Button, Form } from "react-bootstrap";
import { FcIdea } from "react-icons/fc";
import Arrow from "./components/Arrow";
import LabelledSelect from "./components/LabelledSelect";
import StationBox from "./components/StationBox";
import { ShadowBox } from "./components/styled/ShadowBox";
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

function App() {
  const appState = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const calcRoute = (event: React.FormEvent<RouteForm>) => {
    event.preventDefault();
    let { spointslct, epointslct } = event.currentTarget.elements;

    let result = findRoute(spointslct.value, epointslct.value);

    dispatch(updateSearchResult(result));
  };

  const stations = _.sortBy(allStation, (o) => o.description);
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
          <LabelledSelect name={"spointslct"} label={"Start From"}>
            <option value="" disabled selected>
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
          <LabelledSelect name={"epointslct"} label={"End At"}>
            <option value="" disabled selected>
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
                {index !== appState.result.length - 1 && <Arrow direction="right" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
