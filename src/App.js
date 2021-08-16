import "./App.css";
import Home from "./Component/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Appointment from "./Component/Appointment/Appointment/Appointment";
import DashBoard from "./Component/DashBoard/DashBoard/DashBoard";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/dashboard">
            <DashBoard></DashBoard>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
