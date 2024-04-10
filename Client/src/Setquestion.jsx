import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav";
import lockpng from "../src/assets/lock.png";
import { useNavigate } from "react-router-dom";

const Setquestion = () => {
  const [signindata, setsignindata] = useState({});
  const [Question, setquestion] = useState({});
  const [many, setmany] = useState(0);
  const [timeloop, settimeloop] = useState([]);
  const [login, setlogin] = useState(false);
  const [pname, setpname] = useState("");
  const [navhide, setnavhide] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("examinertoken");
    const examinername = localStorage.getItem("examinername");
    if (auth) {
      navigate("/setquestion");
      setlogin(true);
      setnavhide(true);
      setpname(examinername);
    }
  }, []);

  const Questionsendserver = async (qdata) => {
    const response = await fetch("http://localhost:2000/api/question", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(qdata),
    });
    const firesponse = await response.json();
    toast(firesponse.found);
  };

  const givequestion = () => {
    let fieldcount = many * 5 + 2;
    let reservefield = Object.keys(Question);
    let reservevalue = Object.values(Question);
    let finalreservecalue = reservevalue.filter((val) => val != "");
    if (
      reservefield.length == fieldcount &&
      finalreservecalue.length == fieldcount
    ) {
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1;
      let dd = today.getDate();

      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;

      const setdate = `${dd}/${mm}/${yyyy}`;

      let settime = today.toLocaleTimeString();
      let addcreatepersonname = {
        setpersonname: pname,
        settime,
        setdate,
        qcount: many,
      };
      let alldata = Question;
      let finaldata = { ...addcreatepersonname, ...alldata };
      Questionsendserver(finaldata);
    } else {
      toast("Please Fill Out All Field");
    }
  };

  const howmanyset = () => {
    let numcasting = Math.round(Number(many));
    let savearr = [];
    for (let i = 0; i < numcasting; i++) {
      savearr.push(i);
    }
    settimeloop(savearr);
  };

  const questionget = (val) => {
    const { name, value } = val.target;
    setquestion((values) => ({ ...values, [name]: value }));
  };
  const handelinputsignin = (val) => {
    const { name, value } = val.target;
    setsignindata((values) => ({ ...values, [name]: value }));
  };

  const datasubmitsignin = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:2000/api/signin",
      signindata
    );

    if (response.data.found) {
      localStorage.setItem("examinername", response.data.username);
      localStorage.setItem("examinertoken", response.data.auth);
      const examinername = localStorage.getItem("examinername");
      setlogin(true);
      setnavhide(true);
      setpname(examinername);
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
      setlogin(false);
    }
  };

  return (
    <>
      {navhide ? null : <Nav />}
      {/* Login section */}
      <div className="card text-center">
        {login == false ? (
          <div className="card-header">Please Login For Set Your Question</div>
        ) : (
          <div className="card-header">Hello, {pname}</div>
        )}
        {login == false ? (
          <div className="card-body">
            <form onSubmit={datasubmitsignin}>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    name="user_name"
                    onChange={handelinputsignin}
                    className="form-control"
                    placeholder="Enter Username"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="password"
                    onChange={handelinputsignin}
                    className="form-control"
                    placeholder="Enter Password"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-success col-sm-4 mt-3">
                Login
              </button>
            </form>
          </div>
        ) : null}
      </div>
      {/* Question Section */}

      {login == true && timeloop.length == 0 ? (
        <div className="card text-center">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <input
                  type="number"
                  className="form-control"
                  name="howmanyquestion"
                  onChange={(val) => {
                    setmany(val.target.value);
                  }}
                  placeholder="How Many Question You Set"
                  aria-label="First name"
                />
              </div>
              <div className="col">
                <button
                  onClick={howmanyset}
                  className="btn btn-success col-sm-10"
                >
                  Set
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : login == false ? (
        <img
          src={lockpng}
          className="mt-3 rounded mx-auto d-block"
          height="400px"
          alt="Lock"
        />
      ) : null}

      {/* Option Section */}
      {login == true ? (
        <div className="card text-center" style={{ backgroundColor: "wheat" }}>
          <div className="card-body">
            {timeloop.map((val, index) => {
              return (
                <div key={index}>
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Question : {val + 1}
                    </label>
                    <input
                      type="text"
                      name={`_${val + 1}q`}
                      onChange={questionget}
                      className="form-control mt-2"
                      id="formGroupExampleInput"
                      placeholder="Write Your Question Here"
                      required
                    />
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <input
                        type="text"
                        onChange={questionget}
                        name={`op1question${val + 1}`}
                        className="form-control"
                        placeholder="Option 1"
                        aria-label="First name"
                        required
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        onChange={questionget}
                        name={`op2question${val + 1}`}
                        className="form-control"
                        placeholder="Option 2"
                        aria-label="Last name"
                        required
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        onChange={questionget}
                        name={`op3question${val + 1}`}
                        className="form-control"
                        placeholder="Option 3"
                        aria-label="First name"
                        required
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        onChange={questionget}
                        name={`ansquestion${val + 1}`}
                        className="form-control"
                        placeholder="Answer"
                        aria-label="Last name"
                        required
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            {timeloop.length != 0 ? (
              <div className="row mb-3 mt-3">
                <div className="col">
                  <input
                    type="text"
                    name="examsubject"
                    onChange={questionget}
                    className="form-control"
                    placeholder="Exam Subject"
                    aria-label="First name"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="examkey"
                    onChange={questionget}
                    className="form-control"
                    placeholder="Set Your Exam Key"
                    aria-label="First name"
                    required
                  />
                </div>
                <div className="col">
                  <button
                    onClick={givequestion}
                    className="btn btn-primary col-sm-10"
                  >
                    Submit
                  </button>
                  <button
                    className="btn btn-danger mt-5 col-10"
                    onClick={Logout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      <ToastContainer />
    </>
  );
};

export default Setquestion;
