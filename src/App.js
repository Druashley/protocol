import MainPage from "./pages/MainPage";
import NewMedicinePage from "./pages/NewMedicinePage";
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/newmedicine" exact>
          <NewMedicinePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
