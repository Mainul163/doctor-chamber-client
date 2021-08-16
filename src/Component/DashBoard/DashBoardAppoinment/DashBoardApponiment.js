import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import AppoinmentPatient from "../AppoinmentPatient/AppoinmentPatient";
const DashBoardApponiment = () => {
  const [dateinfo, setDateinfo] = useState(new Date());
  const [details, setDetails] = useState([]);
  const handleCalender = (date) => {
    setDateinfo(date);

    fetch("https://peaceful-caverns-70670.herokuapp.com/appoinmentByDate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date }),
    })
      .then((res) => res.json())
      .then((data) => setDetails(data));
  };

  return (
    <div className="row">
      <div>
        <h4 className="text-style mt-2">Appoinments</h4>
      </div>

      <div className="col-md-4  mt-5 ms-5">
        <Calendar onChange={handleCalender} value={new Date()} />
      </div>

      <div className="col-md-5 mt-5">
        <div className="d-flex d-flex justify-content-center">
          <div className="">
            <p className="text-style color">Appoinments</p>
          </div>
          <div className="ms-5">
            <div>
              <p> {moment(dateinfo).format("MMMM Do YYYY")} </p>
            </div>
          </div>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Appointment</th>
              <th scope="col">Schedule</th>
            </tr>
          </thead>
          <tbody>
            {details.map((dataDetails) => (
              <AppoinmentPatient
                detailsAppoinment={dataDetails}
              ></AppoinmentPatient>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoardApponiment;
