import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Nightday from "./Nightday";
import Signupmodal from "./Signupmodal";

const Nav = () => {
  const [logsuccess, setlogsuccess] = useState(false);
  const signingetval = (value) => {
    setlogsuccess(value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            <i className="fas fa-chalkboard-teacher text-success"></i>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/setquestion" className="nav-link">
                  Setexam
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/exampage" className="nav-link">
                  Startexam
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/examresult" className="nav-link">
                  Examresult
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/adminpage" className="nav-link">
            <img src="src\assets\admin.png" height="45" alt="A" />
          </NavLink>

          <Nightday />

          <div className="float-end">
            {logsuccess == true ? (
              <div
                className="btn-group "
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  type="button"
                  className="btn btn-primary border rounded-start"
                >
                  Logged in Sumanta Das
                </button>
              </div>
            ) : (
              <div
                className="btn-group "
                role="group"
                aria-label="Basic mixed styles example"
              >
                <Signupmodal />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
