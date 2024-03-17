import React, { useState } from "react";
import Nav from "./Nav";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Contact = () => {
  const [contact, setcontact] = useState({});

  const contactinput = (val) => {
    const { name, value } = val.target;
    setcontact((values) => ({ ...values, [name]: value }));
  };

  const contactdatasubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:2000/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    const firesponse = await response.json();
    console.log(response);
    if (firesponse.post == true) {
      toast("👍 Thank you for contacting us");
    }
  };

  return (
    <>
      <Nav />

      <div class="card text-bg-dark text-center">
        <img
          src="https://source.unsplash.com/1600x700/?macbook"
          class="card-img "
          alt="..."
        />
        <div class="card-img-overlay">
          <div class="card position-fixed top-50 start-50 translate-middle">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="https://source.unsplash.com/550x800/?iphone"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body ">
                  <form onSubmit={contactdatasubmit}>
                    <h4 class="card-title mb-4">Contact Us</h4>
                    <div
                      class="row border rounded-pill"
                      style={{ backgroundColor: "orange" }}
                    >
                      <div class="col ">
                        <input
                          type="text"
                          name="fullname"
                          onChange={contactinput}
                          class="form-control"
                          placeholder="Name"
                          aria-label="First name"
                          required
                        />
                      </div>
                      <div class="col">
                        <input
                          type="number"
                          name="mobileno"
                          onChange={contactinput}
                          class="form-control"
                          placeholder="Mobile No"
                          aria-label="Last name"
                          required
                        />
                      </div>
                    </div>

                    <div class="row mt-3" style={{ backgroundColor: "white" }}>
                      <div class="col ">
                        <input
                          type="email"
                          name="email"
                          onChange={contactinput}
                          class="form-control border border-secondary rounded-pill"
                          placeholder="Email                                        ⚛"
                          aria-label="First name"
                          required
                        />
                      </div>
                    </div>
                    <div
                      class="row mt-3 border rounded-pill"
                      style={{ backgroundColor: "green" }}
                    >
                      <div class="col  ">
                        <input
                          type="text"
                          name="subject"
                          onChange={contactinput}
                          class="form-control"
                          placeholder="Subject"
                          aria-label="First name"
                          required
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          name="message"
                          onChange={contactinput}
                          class="form-control "
                          placeholder="Message"
                          aria-label="Last name"
                          required
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary mt-5">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
