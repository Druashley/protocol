import { useState, useEffect } from "react";
import MainPage from "./pages/MainPage";
import NewMedicinePage from "./pages/NewMedicinePage";
import { Switch, Route, useLocation } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar";

function App() {
  const location = useLocation();

  const [medicineList, setMedicineList] = useState([]);

  const getMedicineData = () => {
    axios.get("/api").then((res) => {
      setMedicineList(res.data);
    });
  };

  useEffect(() => {
    getMedicineData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <MainPage medicineList={medicineList} />
        </Route>
        <Route path="/newmedicine" exact>
          <NewMedicinePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
