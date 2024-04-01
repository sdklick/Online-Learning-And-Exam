import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Admin_examregis_result from "./Admin_examregis_result";

const Adminpage = () => {
  const [examdata, setexamdata] = useState({});
  const [mapdata, setmapdata] = useState([]);
  const [qmap, setqmap] = useState([]);
  const [adminsignin, setadminsignin] = useState({});
  const [isadminsignin, setisadminsignin] = useState(false);
  const [navhide, setnavhide] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("admin");
    if (auth) {
      navigate("/adminpage");
    }
  }, []);
  useEffect(() => {
    const auth = localStorage.getItem("admintoken");
    if (auth) {
      setisadminsignin(true);
      setnavhide(true);
    }
  }, []);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("http://localhost:2000/api/examlist");
      setexamdata(response);
      let fidata = response.data;
      setmapdata(fidata);
    };
    fetchdata();
  }, []);

  const qdisplay = (indexval) => {
    setqmap(mapdata[indexval].question);
  };

  const admininputsignin = (val) => {
    const { name, value } = val.target;
    setadminsignin((values) => ({ ...values, [name]: value }));
  };

  const datasubmitadminsignin = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:2000/api/adminsignin",
      adminsignin
    );
    if (response.data.found == true) {
      localStorage.setItem("admin", response.data.found);
      localStorage.setItem("admintoken", response.data.auth);
      setisadminsignin(response.data.found);
      setnavhide(true);
    }

    if (response.data.found == true) {
      toast("✔️ Login Success");
    } else {
      toast("❌ Wrong Credentials");
    }
  };

  const Logout = () => {
    let surelogout = confirm("Are You Sure Logout");
    if (surelogout) {
      localStorage.clear();
      window.location.reload(false);
      setadminsignin(false);
    }
  };

  return (
    <>
      {navhide ? null : <Nav />}

      {/* Login section */}
      {isadminsignin == false ? (
        <div className="card text-center">
          <div className="card-header">Admin Login</div>

          <div className="card-body">
            <form onSubmit={datasubmitadminsignin}>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    name="adminid"
                    onChange={admininputsignin}
                    className="form-control"
                    placeholder="Enter Admin_id"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="adminpassword"
                    onChange={admininputsignin}
                    className="form-control"
                    placeholder="Enter Admin_Password"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-success col-sm-4 mt-3">
                Login
              </button>
            </form>
          </div>
        </div>
      ) : null}

      {examdata.data == false || isadminsignin == false ? (
        <div className="card text-center">
          <img
            src="src\assets\examlist.jpg"
            className="mt-3 rounded mx-auto d-block"
            height="290px"
            alt="Lock"
          />
        </div>
      ) : (
        <div className="card text-center">
          <div className="card-header">
            <span className="fs-4">Welcome To Admin Dashboard</span>
            <button onClick={Logout} className="btn btn-success float-end">
              Logout
            </button>
          </div>
          <div className="card-body" style={{ backgroundColor: "#77ba84" }}>
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {mapdata.map((val, index) => {
                return (
                  <div key={val._id} className="col">
                    <div className="card">
                      <img
                        src={`https://source.unsplash.com/1600x700/?${
                          val.examsubject || "book"
                        }`}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="card text-center">
                          <div className="card-header">
                            <p>
                              <em>Set by {val.setpersonname}</em>
                            </p>
                          </div>
                          <div className="card-body">
                            <p className="card-title">
                              ExamName : {val.examsubject}
                            </p>
                            <p className="card-title">
                              ExamKey → {val.examkey}
                            </p>
                          </div>

                          <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id={`heading${index}`}
                              >
                                <button
                                  className="accordion-button"
                                  type="button"
                                  onClick={() => qdisplay(index)}
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapse${index}`}
                                  aria-expanded="false"
                                  aria-controls="collapseOne"
                                >
                                  Question Details
                                </button>
                              </h2>
                              <div
                                id={`collapse${index}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  {qmap.length != 0
                                    ? qmap.map((qlist, index) => {
                                        return (
                                          <div key={index}>
                                            <ul>
                                              <li>{`${
                                                qlist[`_${index + 1}q`]
                                              }`}</li>

                                              <ul>
                                                <li>{`${
                                                  qlist[
                                                    `op1question${index + 1}`
                                                  ]
                                                }`}</li>
                                                <li>{`${
                                                  qlist[
                                                    `op2question${index + 1}`
                                                  ]
                                                }`}</li>
                                                <li>{`${
                                                  qlist[
                                                    `op3question${index + 1}`
                                                  ]
                                                }`}</li>
                                                <li
                                                  style={{ color: "green" }}
                                                >{`${
                                                  qlist[
                                                    `ansquestion${index + 1}`
                                                  ]
                                                }`}</li>
                                              </ul>
                                            </ul>
                                            <p></p>
                                          </div>
                                        );
                                      })
                                    : null}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button type="button" className="btn btn-danger mt-3">
                          Delete
                        </button>
                      </div>

                      <div className="card-footer">
                        <small className="text-body-secondary">
                          Created At {val.setdate} {val.settime}
                        </small>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Admin_examregis_result />
        </div>
      )}

      <ToastContainer />
    </>
  );
};

export default Adminpage;
