import React, { useEffect, useState } from "react";
import PatientsDetails from "../PatientsDetails/PatientsDetails";

const PatientsInfo = () => {
  const [patientinfo, setPatientinfo] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-caverns-70670.herokuapp.com/allpatients")
      .then((req) => req.json())
      .then((data) => setPatientinfo(data));
  }, []);
  return (
    <div>
      <h3 className="text-style mt-2">PatientsList</h3>

      <table class="table mt-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Appointment</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {patientinfo.map((patientDetails) => (
            <PatientsDetails
              patienttotalinfo={patientDetails}
            ></PatientsDetails>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsInfo;
