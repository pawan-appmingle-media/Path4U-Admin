import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UniversitySemesterCreate.css";

const UniversitySemesterCreate = () => {
  const [semester, setSemester] = useState("");

  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      semesterName: semester,
    };

    axios
      .post(`${API_BASE_URL}/semesters`, payload)
      .then((response) => {
        console.log("Semester created successfully:", response.data);
        alert("Semester Added Successfully");
        setSemester("");
      })
      .catch((error) => {
        console.error("Error creating semester:", error);
      });
  };

  return (
    <>
      <div id="add-college-course-wrapper">
        <div className="course-header-with-btns">
          <h5>Semester</h5>

          <div className="college-course-nav-btns">
            <Link to={"/college-semester"}>
              <button className="college-add-course-add-btn">
                + Add New Semester
              </button>
            </Link>
            <Link to={"/college-semester-table"}>
              <button className="college-all-course-btn">All Semester</button>
            </Link>
          </div>
        </div>

        <div className="add-college-course-inner-main-wrapper">
          <div className="form-main-container">
            <h4 className="college-course-detail">Semester</h4>
            <form
              onSubmit={handleSubmit}
              className="college-course-detail-form"
            >
              <div className="input-group">
                <label className="label">Enter Semester</label>
                <input
                  style={{
                    marginLeft: "1px",
                    borderBottomLeftRadius: "5px",
                    borderTopLeftRadius: "5px",
                  }}
                  type="text"
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  placeholder="Enter Semester..."
                  required
                />
              </div>

              <div className="college-course-form-btns">
                <button className="btn-search" type="submit">
                  Save
                </button>
                <button className="btn-cancel" type="button">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversitySemesterCreate;
