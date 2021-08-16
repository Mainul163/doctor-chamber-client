import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Footer from "../../Coommon/Footer/Footer";
import Navbar from "../../Coommon/Navbar/Navbar";
import DashBoardApponiment from "../DashBoardAppoinment/DashBoardApponiment";

import DashBoardMenu from "../DashBoardMenu/DashBoardMenu";

import PatientsInfo from "../PatientsInfo/PatientsInfo";
const DashBoard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <div className="row">
          <div className="col-md-2">
            <DashBoardMenu></DashBoardMenu>
          </div>

          <div className="col-md-10">
            <Route exact path="/dashboard">
              <DashBoardApponiment></DashBoardApponiment>
            </Route>

            <Route path="/dashboard/appoinment">
              <DashBoardApponiment></DashBoardApponiment>
            </Route>

            <Route path="/dashboard/patients">
              <PatientsInfo></PatientsInfo>
            </Route>
          </div>
        </div>
      </Switch>
      <Footer></Footer>
    </div>
  );
};

export default DashBoard;
