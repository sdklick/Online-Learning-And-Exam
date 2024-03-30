import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Footer from "./Footer";
import axios from "axios";

const Home = () => {
  const [load1, set1] = useState(false);
  const [countRegistration, setCountRegistration] = useState({
    documentCount: 0,
  });
  const [countExam, setCountExam] = useState([]);

  useEffect(() => {
    registration_count();
    exam_count();
  }, []);

  const registration_count = async () => {
    try {
      let count = await axios.get(
        "http://localhost:2000/api/registration_count"
      );
      setCountRegistration(count.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const exam_count = async () => {
    try {
      let count = await axios.get("http://localhost:2000/api/examlist_count");
      setCountExam(count.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Nav />

      <div class="card text-center ">
        <div class="card-header">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="false"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div className="carousel-inner">
              {load1 ? (
                <div className="carousel-item active">
                  <img
                    src="https://source.unsplash.com/1920x1080/?technology"
                    className="d-block w-100"
                    style={{ height: "300px" }}
                    alt="..."
                  />
                  <div
                    className="carousel-caption  d-block position-absolute top-50 start-50 translate-middle border rounded-pill border-info "
                    style={{ backgroundColor: "rgba(0,0,0, 0.7)" }}
                  >
                    {/* <i
                      className="fas fa-laptop-code"
                      style={{ fontSize: "50px", color: "greenyellow" }}
                    ></i> */}

                    <h5 className="mt-2">Check Your Result</h5>
                    <NavLink to="/examresult">
                      <button
                        type="button"
                        className="btn btn-primary border rounded-pill btn-sm mt-3 mb-3"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ fontSize: "30px", color: "greenyellow" }}
                        ></i>
                      </button>
                    </NavLink>
                  </div>
                </div>
              ) : (
                <Skeleton count={1000} />
              )}
              <div className="carousel-item">
                <img
                  onLoad={() => set1(true)}
                  src="https://source.unsplash.com/1920x1080/?programming"
                  className="d-block w-100"
                  style={{ height: "300px" }}
                  alt="..."
                />
                <div
                  className="carousel-caption  d-block d-block position-absolute top-50 start-50 translate-middle border rounded-pill border-info"
                  style={{ backgroundColor: "rgba(0,0,0, 0.7)" }}
                >
                  {/* <i
                    className="fas fa-award"
                    style={{ fontSize: "50px", color: "greenyellow" }}
                  ></i> */}
                  {/* <h3 className="mt-2">Welcome To Online Pro Exam </h3> */}

                  <h5 className="mt-2">Give Your Exam</h5>
                  <NavLink to="/exampage">
                    <button
                      type="button"
                      className="btn btn-primary border rounded-pill btn-sm mt-3 mb-3"
                    >
                      <i
                        className="fas fa-angle-double-right"
                        style={{ fontSize: "30px", color: "greenyellow" }}
                      ></i>
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class="card-body">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card " style={{ backgroundColor: "#f0a079" }}>
                <div class="card-header">
                  <i
                    class="fas fa-list"
                    style={{ fontSize: "40px", color: "black" }}
                  ></i>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Examlist</h5>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr className="table-primary">
                          <th>Examname</th>
                          <th>Examinername</th>
                        </tr>
                      </thead>

                      {countExam.map((value, index) => {
                        return (
                          <tbody key={index}>
                            <tr className="table-success">
                              <td>{value.examsubject}</td>
                              <td>{value.setpersonname}</td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card " style={{ backgroundColor: "#FFFFFF" }}>
                <div class="card-header">
                  <i
                    class="fas fa-user-friends"
                    style={{ fontSize: "40px", color: "black" }}
                  ></i>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Appeared in the examination</h5>
                  <p class="card-text">{countRegistration.documentCount}</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ backgroundColor: "#88c3a6" }}>
                <div class="card-header">
                  {" "}
                  <i
                    class="fas fa-bell"
                    style={{ fontSize: "40px", color: "black" }}
                  ></i>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Notification</h5>
                  <p class="card-text">
                    0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
