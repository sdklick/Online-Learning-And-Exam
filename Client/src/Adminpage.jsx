import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Adminpage = () => {
  const [examdata, setexamdata] = useState({});
  const [mapdata, setmapdata] = useState([]);
  const [qmap, setqmap] = useState([]);
  const [adminsignin, setadminsignin] = useState({});
  const [isadminsignin, setisadminsignin] = useState(false);
  const [navhide, setnavhide] = useState(false);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("http://localhost:2000/api/examlist");
      setexamdata(response);
      let fidata = response.data;
      setmapdata(fidata);
    };
    fetchdata();
  }, []);

  useEffect(() => {
    const auth = localStorage.getItem("admintoken");
    if (auth) {
      setisadminsignin(true);
      setnavhide(true);
    }
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
    localStorage.setItem("admin", response.data.found);
    localStorage.setItem("admintoken", response.data.auth);
    setisadminsignin(response.data.found);
    setnavhide(true);

    

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
        <div class="card text-center">
          <div class="card-header">Admin Login</div>

          <div class="card-body">
            <form onSubmit={datasubmitadminsignin}>
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    name="adminid"
                    onChange={admininputsignin}
                    class="form-control"
                    placeholder="Enter Admin_id"
                    required
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    name="adminpassword"
                    onChange={admininputsignin}
                    class="form-control"
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
        <img
          src="src\assets\examlist.jpg"
          class="mt-3 rounded mx-auto d-block"
          height="400px"
          alt="Lock"
        />
      ) : (
        <div class="card text-center">
          <div class="card-header">
            <span className="fs-4">Welcome To Admin Page</span>
            <buttom onClick={Logout} className="btn btn-success float-end">
              Logout
            </buttom>
          </div>
          <div class="card-body" style={{ backgroundColor: "#77ba84" }}>
            <div class="row row-cols-1 row-cols-md-4 g-4">
              {mapdata.map((val, index) => {
                return (
                  <>
                    <div key={val._id} class="col">
                      <div class="card">
                        <img
                          src={`https://source.unsplash.com/1600x700/?${
                            val.examsubject || "book"
                          }`}
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <div class="card text-center">
                            <div class="card-header">
                              <p>
                                <em>Set by {val.setpersonname}</em>
                              </p>
                            </div>
                            <div class="card-body">
                              <p class="card-title">
                                ExamName : {val.examsubject}
                              </p>
                              <p class="card-title">ExamKey → {val.examkey}</p>
                            </div>

                            <div class="accordion" id="accordionExample">
                              <div class="accordion-item">
                                <h2
                                  class="accordion-header"
                                  id={`heading${index}`}
                                >
                                  <button
                                    class="accordion-button"
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
                                  class="accordion-collapse collapse"
                                  aria-labelledby={`heading${index}`}
                                  data-bs-parent="#accordionExample"
                                >
                                  <div class="accordion-body">
                                    {qmap.length != 0
                                      ? qmap.map((qlist, index) => {
                                          return (
                                            <>
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
                                            </>
                                          );
                                        })
                                      : null}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button type="button" class="btn btn-danger mt-3">
                            Delete
                          </button>
                        </div>

                        <div class="card-footer">
                          <small class="text-body-secondary">
                            Created At {val.setdate} {val.settime}
                          </small>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Adminpage;
