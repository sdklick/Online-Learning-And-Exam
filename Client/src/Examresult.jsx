import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import axios from "axios";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Examresult = () => {
  const [resultdata, checkresultdata] = useState({});
  const [redata, setredata] = useState({});
  const [isfound, setisfound] = useState(false);

  const handelinputresult = (val) => {
    const { name, value } = val.target;
    checkresultdata((values) => ({ ...values, [name]: value }));
  };

  const datasubmitresult = async (e) => {
    e.preventDefault();

    const response = await axios.get("http://localhost:2000/api/resultsearch", {
      params: {
        ID: resultdata,
      },
    });

    setisfound(response.data.found);
    setredata(response.data);

    if (response.data.found == true) {
      toast("✔️ Your Result");
    } else {
      toast("❌ No Data Found");
    }
  };

  return (
    <>
      <Nav />

      {/* Login section */}
      {isfound == false ? (
        <div className="card text-center">
          <div className="card-header">Check Result</div>

          <div className="card-body">
            <form onSubmit={datasubmitresult}>
              <div className="row">
                <div className="col">
                  <input
                    type="email"
                    name="email"
                    onChange={handelinputresult}
                    className="form-control"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="examkey"
                    onChange={handelinputresult}
                    className="form-control"
                    placeholder="Enter examkey"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-success col-sm-4 mt-3">
                Check
              </button>
            </form>

            <img
              src="src\assets\resnot.jpg"
              className="mt-3 rounded mx-auto d-block"
              height="470px"
              alt="Lock"
            />
          </div>
        </div>
      ) : null}

      {isfound == true ? (
        <div className="card text-center  ">
          <div className="card-header">Result</div>
          <div className="card-body">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="src\assets\result.jpg"
                    className="mt-3 rounded mx-auto d-block"
                    height="250px"
                    alt="Lock"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{redata.result.fullname}</h5>
                    <p className="card-text mt-4">
                      <i className="fa fa-envelope"></i> {redata.result.email}
                    </p>
                    <p className="card-text">
                      <i className="fas fa-phone"></i> {redata.result.phoneno}
                    </p>

                    <table className="table">
                      <thead>
                        <tr className="table-primary">
                          <th>Totalquestion</th>
                          <th>RightAnswer</th>
                          <th>Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table-success">
                          <td>{redata.result.marks.totalmark}</td>
                          <td>{redata.result.marks.obtainmark}</td>
                          <td>
                            {Math.round(
                              (redata.result.marks.obtainmark /
                                redata.result.marks.totalmark) *
                                100
                            )}
                            %
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">
            <button
              onClick={() => window.location.reload(false)}
              className="btn btn-success border rounded-pill"
            >
              Logout
            </button>
          </div>
        </div>
      ) : null}
      <ToastContainer />
    </>
  );
};

export default Examresult;
