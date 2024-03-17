import React, { useState } from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Footer from "./Footer";

const Home = () => {
  const [load1, set1] = useState(false);
  
  return (
    <>
      <Nav />

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
        {load1?
          <div className="carousel-item active">
          
            <img
              
              src="https://source.unsplash.com/1600x700/?technology"
              className="d-block w-100"
              alt="..."
            />
            <div
              className="carousel-caption  d-block position-absolute top-50 start-50 translate-middle border rounded-pill border-info "
              style={{ backgroundColor: "rgba(0,0,0, 0.7)" }}
            >
              <i
                className="fas fa-laptop-code"
                style={{ fontSize: "50px", color: "greenyellow" }}
              ></i>
              <h3 className="mt-2">Welcome To Online Pro Exam </h3>
              <h5 className="mt-2">Set Your Exam</h5>
              <NavLink to="/setquestion">
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
          </div>:<Skeleton count={1000}/>}
          <div className="carousel-item">
            <img
             onLoad={() => set1(true)}
              src="https://source.unsplash.com/1600x700/?programming"
              className="d-block w-100"
              alt="..."
            />
            <div
              className="carousel-caption  d-block d-block position-absolute top-50 start-50 translate-middle border rounded-pill border-info"
              style={{ backgroundColor: "rgba(0,0,0, 0.7)" }}
            >
              <i
                className="fas fa-award"
                style={{ fontSize: "50px", color: "greenyellow" }}
              ></i>
              <h3 className="mt-2">Welcome To Online Pro Exam </h3>
              
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
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
       
      </div>
      
      
    </>
  );
};

export default Home;
