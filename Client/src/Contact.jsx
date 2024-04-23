import React, { useState } from "react";
import Nav from "./Nav";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { sendContactData } from "./redux/slices/contactSlice.js";

const Contact = () => {
  const [contact, setcontact] = useState({});

  const dispatch = useDispatch();
  const response = useSelector((state) => state.contactSlice);
  const { data, isError, isLoading } = response;

  const contactinput = (val) => {
    const { name, value } = val.target;
    setcontact((values) => ({ ...values, [name]: value }));
  };

  const contactdatasubmit = (e) => {
    e.preventDefault();

    dispatch(sendContactData(contact));
  };

  if (data.post == true) {
    toast("👍 Thank you for contacting us");
  }

  return (
    <>
      <Nav />

      <div className="card text-center mt-5" style={{ border: "none" }}>
        <div className="card-header" style={{ border: "none" }}>
          Contact Us
        </div>
        <div className="card-body" style={{ border: "none" }}>
          <div className="card " style={{ border: "none" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://source.unsplash.com/550x800/?iphone"
                  className="img-fluid rounded"
                  alt="..."
                  style={{ height: "450px" }}
                />
              </div>
              <div className="col-md-8 mt-2">
                <div className="card-body">
                  <form onSubmit={contactdatasubmit}>
                    <div
                      className="row border rounded-pill"
                      style={{ backgroundColor: "orange" }}
                    >
                      <div className="col ">
                        <input
                          type="text"
                          name="fullname"
                          onChange={contactinput}
                          className="form-control"
                          placeholder="Name"
                          aria-label="First name"
                          required
                        />
                      </div>
                      <div className="col">
                        <input
                          type="number"
                          name="mobileno"
                          onChange={contactinput}
                          className="form-control"
                          placeholder="Mobile No"
                          aria-label="Last name"
                          required
                        />
                      </div>
                    </div>

                    <div
                      className="row mt-3"
                      style={{ backgroundColor: "white" }}
                    >
                      <div className="col ">
                        <input
                          type="email"
                          name="email"
                          onChange={contactinput}
                          className="form-control border border-secondary rounded-pill"
                          placeholder="Email                                        ⚛"
                          aria-label="First name"
                          required
                        />
                      </div>
                    </div>
                    <div
                      className="row mt-3 border rounded-pill"
                      style={{ backgroundColor: "green" }}
                    >
                      <div className="col  ">
                        <input
                          type="text"
                          name="subject"
                          onChange={contactinput}
                          className="form-control"
                          placeholder="Subject"
                          aria-label="First name"
                          required
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          name="message"
                          onChange={contactinput}
                          className="form-control "
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
