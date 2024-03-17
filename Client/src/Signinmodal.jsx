import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Setquestion from "./Setquestion";

const Signinmodal = () => {
  const [signindata, setsignindata] = useState({});
  const [login, setlogin] = useState(false);

  

  const handelinputsignin = (val) => {
    const { name, value } = val.target;
    setsignindata((values) => ({ ...values, [name]: value }));
  };

  const datasubmitsignin = async (e) => {
    e.preventDefault();

    const response = await axios.get("http://localhost:2000/api/signin", {
      params: {
        ID: signindata,
      },
    });

    setlogin(response.data.found);

    if (response.data.found == true) {
      toast("Login Success");
    } else {
      let message = "Wrong Credentials";
      toast(message);
    }

  };

  return (
    <>
      <button
        type="button"
        class="btn btn-primary border rounded-start"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Login
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 " id="exampleModalLabel">
                Login Here
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={datasubmitsignin}>
                <div class="mb-3">
                  <input
                    type="text"
                    name="user_name"
                    onChange={handelinputsignin}
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter Username"
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    name="password"
                    onChange={handelinputsignin}
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Enter Password"
                    required
                  />
                </div>
                <div class="mb-3 float-end">
                  <button type="submit" class="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signinmodal;
