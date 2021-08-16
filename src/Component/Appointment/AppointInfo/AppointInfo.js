import React, { useState } from "react";
import Modal from "react-modal";
import moment from "moment";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const AppointInfo = ({ modalIsOpen, data, closeModal, date }) => {
  const [datainfo, setDatainfo] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    const info = { ...datainfo };
    info[e.target.name] = e.target.value;
    setDatainfo(info);
  };
  const handleSubmit = (e) => {
    const infodata = { ...datainfo };
    infodata.appointment = data.subject;
    infodata.date = date;
    infodata.datecreated = new Date();

    fetch("https://peaceful-caverns-70670.herokuapp.com/addAppointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(infodata),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          closeModal();
          alert("Appoinment Created Successfully");
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h5 className="color text-center">{data.subject}</h5>

        <p className="text-center">
          <small>On: {moment(date).format("MMMM Do YYYY")} </small>
        </p>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="name"
              class="form-control"
              name="name"
              onChange={handleChange}
              required
              id="exampleFormControlInput1"
              placeholder="Your Name"
            />
          </div>

          <div class="btn-group mb-5">
            <select onChange={handleChange} name="gender" id="cars">
              <option value="Male">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              onChange={handleChange}
              class="form-control"
              name="email"
              id="exampleFormControlInput1"
              required
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Phone Number
            </label>
            <input
              class="form-control"
              onChange={handleChange}
              id="exampleFormControlTextarea1"
              name="phone"
              required
              placeholder="Phone number"
              rows="3"
            ></input>
          </div>
          <div>
            <input type="submit" class="btn btn-clr " value="Submit" />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointInfo;
