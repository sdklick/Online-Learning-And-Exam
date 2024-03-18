import React, { useEffect, useState } from "react";
import axios from "axios";

const Admin_examregis_result = () => {
  const [alldata, setdata] = useState([]);
  const [isdata, setisdata] = useState(false);

  let getdata = async () => {
    let result = await axios.get("http://localhost:2000/api/adminregis_result");
    setdata(result);
    setisdata(true);

    console.log(result);
  };

  return (
    <>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              onClick={getdata}
            >
              Exam Registration And Result
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div class="table-responsive">
                <table className="table">
                  <thead>
                    <tr className="table-primary">
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Age</th>
                      <th>Phnoneno</th>
                      <th>Email</th>
                      <th>Subject</th>
                      <th>Total</th>
                      <th>Obtain</th>
                    </tr>
                  </thead>
                  {isdata ? (
                    <tbody>
                      {alldata.data.map(
                        ({ fullname, gender, age, phoneno, email, marks }) => {
                          return (
                            <>
                              <tr className="table-success">
                                <td>{fullname}</td>
                                <td>{gender}</td>
                                <td>{age}</td>
                                <td>{phoneno}</td>
                                <td>{email}</td>
                                <td>Na</td>

                                {marks && (
                                  <>
                                    <td>{marks.totalmark}</td>
                                    <td>{marks.obtainmark}</td>
                                  </>
                                )}
                              </tr>
                            </>
                          );
                        }
                      )}
                    </tbody>
                  ) : null}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin_examregis_result;