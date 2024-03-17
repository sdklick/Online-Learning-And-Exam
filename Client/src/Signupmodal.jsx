import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signupmodal = () => {
  const [signupdata, setsignupdata] = useState({});
  const handelinput = (val) => {
    const { name, value } = val.target;
    setsignupdata((values) => ({ ...values, [name]: value }));
  };

  const datasubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:2000/api/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupdata),
    });
    const firesponse = await response.json();

    toast(firesponse.post);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-success border rounded-end-circle"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
      >
        Signup
      </button>

      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModal1Label"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 " id="exampleModal1Label">
                Signup Here
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={datasubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="person_name"
                    onChange={handelinput}
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email_id"
                    onChange={handelinput}
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="user_name"
                    onChange={handelinput}
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Set Your Username"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="password"
                    onChange={handelinput}
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Set your Password"
                    required
                  />
                </div>
                <div className="mb-3 float-end">
                  <button type="submit" className="btn btn-success">
                    Signup
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signupmodal;
