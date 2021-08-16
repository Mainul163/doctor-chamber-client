import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTh,
  faCalendarCheck,
  faFemale,
} from "@fortawesome/free-solid-svg-icons";

import "./DashBoardMenu.css";
const DashBoardMenu = () => {
  // const style={
  // ,paddingLeft:"10px",paddingBottom:'80px',color:"white"
  //     borderImage:"linearGradient(red,black)"
  // }
  return (
    <div className="divstyle d-flex justify-content-center pt-5">
      <div>
        <div className="d-flex">
          <div>
            <FontAwesomeIcon icon={faTh} />
          </div>
          <div className="ms-2">
            <Link style={{ textDecoration: "none" }}>DashBoard</Link>
          </div>
        </div>

        <div className="d-flex mt-3">
          <div>
            <FontAwesomeIcon icon={faCalendarCheck} />
          </div>
          <div className="ms-2">
            <Link style={{ textDecoration: "none" }} to="/dashboard/appoinment">
              Appoinment
            </Link>
          </div>
        </div>

        <div className="d-flex mt-3">
          <div>
            <FontAwesomeIcon icon={faFemale} />
          </div>
          <div className="ms-2">
            <Link style={{ textDecoration: "none" }} to="/dashboard/patients">
              Patients
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardMenu;
