import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item me-5">
                <Link
                  class="nav-link active active "
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link class="nav-link active" to="/appointment">
                  Appointment
                </Link>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link active" href="#">
                  Dental Services
                </a>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link active" href="#">
                  Review
                </a>
              </li>
              <li class="nav-item me-5">
                <Link class="nav-link active " to="/dashboard">
                  DashBoard
                </Link>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link active " href="#">
                  Contact US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
