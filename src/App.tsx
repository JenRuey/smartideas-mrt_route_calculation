import { useEffect } from "react";
import { findRoute } from "./constants/mrtfunction";
import { fetchAppVersion } from "./state/API/appAPI";
import { useAppDispatch, useAppSelector } from "./state/hook";

function App() {
  const appState = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAppVersion(2));
    console.log(findRoute("1", "14"));
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <p data-testid="app-version">{appState.version}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
