import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { AboutsubApi,AboutTechApi } from "./dataapi";

const About = () => {
  return (
    <>
      <Nav />
      <div className="card text-center">
        <div className="card-header">WELCOME TO ABOUT EXAM PRO</div>
        <div className="card-body">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://source.unsplash.com/4000x6000/?exam"
                  style={{ height: "497px" }}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <NavLink to="/" className="navbar-brand">
                    <i
                      className="fas fa-chalkboard-teacher text-success"
                      style={{ fontSize: "40px" }}
                    ></i>
                  </NavLink>

                  <p
                    className="card-text mt-4 fw-bold"
                    style={{ fontSize: "16px" }}
                  >
                    Online Examination System is a cost-effective, scalable way
                    to convert traditional paper-based exams to online paperless
                    mode. Candidates can appear for the exam using any desktop
                    or mobile device with a browser. Exam results can be
                    generated instantly.
                  </p>
                  <div className="mb-3">
                    <p
                      className="card-text fw-bold btn btn-outline-success fw-bold border rounded-pill btn-sm"
                      style={{ fontSize: "16px" }}
                    >
                      Exam Subjects
                      <br />
                      <i
                        className="	fas fa-arrow-alt-circle-down "
                        style={{ fontSize: "20px" }}
                      ></i>
                    </p>
                  </div>

                  {AboutsubApi.map((val,index) => {
                    return (
                      <>
                        <span key={index+1} className="btn btn-outline-success fw-bold border rounded-pill btn-sm">
                          <i
                            className="fa fa-tag"
                            style={{ fontSize: "20px", color: "orange" }}
                          ></i>
                          <p style={{ fontSize: "12px" }}>{val.subname}</p>
                        </span>
                      </>
                    );
                  })}

                  <div className="mt-4 mb-4">
                    <p
                      className="card-text fw-bold btn btn-outline-success fw-bold border rounded-pill btn-sm"
                      style={{ fontSize: "16px" }}
                    >
                      Technology Use
                      <br />
                      <i
                        className="	fas fa-arrow-alt-circle-down "
                        style={{ fontSize: "20px" }}
                      ></i>
                    </p>
                  </div>
                  {AboutTechApi.map((val) => {
                    return (
                      <>
                        <span key={val.id} className="btn btn-outline-success fw-bold border rounded-pill btn-sm">
                          <i
                            className={val.ticon}
                            style={{ fontSize: "20px", color: "orange" }}
                          ></i>
                          <p style={{ fontSize: "12px" }}>{val.tname}</p>
                        </span>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-body-secondary">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default About;
