import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./exampage.css";

const Exampage = () => {
  const [registationdata, setregisdata] = useState({});
  const [isregister, setisregister] = useState(false);
  const [quesdata, setquesdata] = useState([]);
  const [liveqdata, setliveqdata] = useState(0);
  const [fioption, setfioption] = useState([]);
  const [nextcheck, setnextcheck] = useState(false);
  const [answerc, setanswerc] = useState();
  const [fires, setfires] = useState(0);
  const [btnonetime, setbtnonetime] = useState(true);

  useEffect(() => {
    isregister ? optioncheck() : null;
  }, [liveqdata]);

  useEffect(() => {
    isregister ? Qmix() : null;
  }, [isregister]);

  useEffect(() => {
    isregister ? Qmix() : null;
  }, [liveqdata]);

  const serveresultdata = async (marksobtain) => {
    const response = await fetch("http://localhost:2000/api/resultdata", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(marksobtain),
    });
  };

  const handelregisinput = (val) => {
    const { name, value } = val.target;
    setregisdata((values) => ({ ...values, [name]: value }));
  };

  const regisdatasubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:2000/api/registration", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registationdata),
    });
    const firesponse = await response.json();

    if (firesponse.found == true) {
      toast("Exam Start");
      setisregister(true);
      setquesdata(firesponse.rdata);
    } else {
      if (firesponse.found == "examsubmit") {
        toast("Exam already Submited");
      } else {
        toast("incorrect exam Key");
      }
    }
  };

  const changequestion = () => {
    let qlength = quesdata.question.length;
    if (liveqdata < qlength - 1) {
      setliveqdata(liveqdata + 1);
    }
  };

  const Qmix = () => {
    let incorrectanswer = [
      quesdata.question[liveqdata][`op1question${liveqdata + 1}`],
      quesdata.question[liveqdata][`op2question${liveqdata + 1}`],
      quesdata.question[liveqdata][`op3question${liveqdata + 1}`],
    ];
    let correctanswer =
      quesdata.question[liveqdata][`ansquestion${liveqdata + 1}`];
    let mixdata = [...incorrectanswer];
    let round = Math.floor(Math.random() * (mixdata.length + 1));
    mixdata.splice(round, 0, correctanswer);
    setfioption(mixdata);
  };

  const optioncheck = () => {
    setnextcheck(false);
  };

  const fimarks = () => {
    answerc == quesdata.question[liveqdata][`ansquestion${liveqdata + 1}`]
      ? setfires(fires + 1)
      : null;
  };

  return (
    <>
      <Nav />

      {/* Login section */}
      {isregister == false ? (
        <div className="card text-center">
          <div className="card-header">Exam Registration Form</div>

          <div className="card-body">
            <form onSubmit={regisdatasubmit}>
              <div className="row">
                <div className="col">
                  <input
                    onChange={handelregisinput}
                    type="text"
                    name="fullname"
                    style={{ backgroundColor: "rgb(214 134 95)" }}
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    onChange={handelregisinput}
                    type="text"
                    name="gender"
                    style={{ backgroundColor: "rgb(214 134 95)" }}
                    className="form-control"
                    placeholder="Gender"
                    required
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col ">
                  <input
                    onChange={handelregisinput}
                    type="email"
                    name="email"
                    style={{ backgroundColor: "rgb(203 204 171 / 50%)" }}
                    className="form-control "
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="col">
                  <input
                    onChange={handelregisinput}
                    type="number"
                    name="age"
                    style={{ backgroundColor: "rgb(203 204 171 / 50%)" }}
                    className="form-control"
                    placeholder="Age"
                    required
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col ">
                  <input
                    onChange={handelregisinput}
                    type="number"
                    name="phoneno"
                    style={{ backgroundColor: "rgb(72 209 142)" }}
                    className="form-control "
                    placeholder="Phone No"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    onChange={handelregisinput}
                    type="text"
                    name="checkexamkey"
                    style={{ backgroundColor: "rgb(72 209 142)" }}
                    className="form-control"
                    placeholder="Exam key"
                    required
                  />
                </div>
              </div>
              <button className="btn" type="submit">
                <img
                  src="src\assets\indi.png"
                  className="mt-3 rounded mx-auto d-block"
                  height="100px"
                  alt="Lock"
                />
              </button>
            </form>
          </div>
        </div>
      ) : null}

      {/* Exam UI */}
      {isregister == true ? (
        <div className="card text-center">
          <div className="card-header">
            Set by {quesdata.setpersonname} First click Submit and Then Finish
            Exam
          </div>
          <div className="card-body">
            {/* Question Section */}

            <div className="m-5">
              <span className="btn btn-primary border rounded-pill btn-sm">
                {liveqdata + 1}/{quesdata.question.length}
              </span>
              <span className="btn btn-muted border rounded-pill btn-sm">
                <i
                  className="fas fa-arrow-alt-circle-right"
                  style={{ fontSize: "25px" }}
                ></i>
              </span>

              <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                {quesdata.question[liveqdata][`_${liveqdata + 1}q`]}
              </span>
            </div>

            {/* Question option section */}

            {fioption.map((val, index) => {
              return (
                <>
                  <h4
                    style={{ fontSize: "20px" }}
                    key={index}
                    className={`op p-2 bg-outline-success border rounded-pill btn-sm ${
                      answerc == val ? "lagado" : "matlagao"
                    }`}
                    onClick={() => {
                      setanswerc(val);
                      setnextcheck(true);
                    }}
                  >
                    {val}
                  </h4>
                  <br />
                </>
              );
            })}

            {quesdata.question.length - 1 == liveqdata ? (
              <>
                {btnonetime == true ? (
                  <button
                    className="btn"
                    onClick={() => {
                      fimarks();
                      setbtnonetime(false);
                    }}
                  >
                    <img
                      src="src\assets\indi.png"
                      className="mt-3 rounded mx-auto d-block"
                      height="100px"
                      alt="Lock"
                    />
                  </button>
                ) : null}

                <button
                  className="btn btn-primary"
                  onClick={() => {
                    serveresultdata({
                      examkey: registationdata.checkexamkey,
                      email: registationdata.email,
                      obtainmarks: fires,
                      totalmarks: liveqdata + 1,
                    });

                    window.location.reload(false);
                  }}
                >
                  Finish Exam
                </button>
              </>
            ) : (
              <button
                className="btn btn-success"
                onClick={() => {
                  changequestion();
                  Qmix();
                  fimarks();
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      ) : null}
      <ToastContainer />
    </>
  );
};

export default Exampage;
