import { useState, useEffect } from "react";
import MainPage from "./pages/MainPage";
import NewMedicinePage from "./pages/NewMedicinePage";
import { Switch, Route, useLocation } from "react-router-dom";
import axios from "axios";

function App() {
  const location = useLocation();

  const [medicineList, setMedicineList] = useState([]);

  const getMedicineData = () => {
    axios.get("/api").then((res) => {
      const medicineData = res.data;
      setMedicineList(medicineData);
      console.log("Data has been received!!");
    });
  };

  useEffect(() => {
    getMedicineData();
  }, []);

  return (
    <div className="App">
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
