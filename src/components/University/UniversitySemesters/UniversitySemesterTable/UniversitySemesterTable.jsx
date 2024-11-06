import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UniversitySemesterTable.css";

const UniversitySemesterTable = () => {
  let navigator = useNavigate();

  const [getSemesters, setGetSemesters] = useState([]);
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/semesters`)
      .then((response) => {
        const semesters = response.data?.data || [];
        setGetSemesters(semesters);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddSemester = () => {
    navigator("/college-semester");
  };

  const handleAllSemester = () => {
    navigator("/college-semester-table");
  };

  return (
    <>
      <div id="college-all-course-inner-main-wrapper">
        <div className="course-header-with-btns-table-page">
          <h5>Semester</h5>

          <div className="college-all-course-nav-btns-table">
            <Link to={"/college-semester"}>
              <button
                className="college-add-course-add-btn-table-page"
                onClick={handleAddSemester}
              >
                + Add New Semester
              </button>
            </Link>
            <Link to={"/college-semester-table"}>
              <button
                className="college-all-course-btn-table-page"
                onClick={handleAllSemester}
              >
                All Semester
              </button>
            </Link>
          </div>
        </div>

        {/* table */}
        <div className="headertable">
          <h5>All Semster</h5>
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>semester</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {getSemesters.map((data, idx) => (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{data.semesterName}</td>
                  <td>
                    <i class="fa-solid fa-file-pen"></i>
                    <i class="fa-solid fa-trash-can"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* headertable  */}
      </div>
      {/* college-all-course-inner-main-wrapper  */}
    </>
  );
};

export default UniversitySemesterTable;
