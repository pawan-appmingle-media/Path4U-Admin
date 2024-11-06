import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SchoolNewClass.css";

const SchoolNewClass = () => {
  const [schoolClassName, setSchoolClassName] = useState("");

  const navigate = useNavigate(); // Initialize navigate hook

  //API BASE URL
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  // CLASSES DATA POST
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}/classes`, { className: schoolClassName })
      .then((resp) => {
        alert("Class Added Successfully");
        window.location.reload("/school-add-class");
      })
      .catch((err) => {
        alert("Error", err);
        console.log(err);
      });
  };

  const handleAddNewClass = () => {
    navigate("/school-add-class");
  };

  const handleViewAllClasses = () => {
    navigate("/school-all-class");
  };

  return (
    <>
      <div id="add-department-inner-wrapper">
        <div className="superheader">
          <div className="departmetHeaderdiv">
            <h5>Class</h5>
            <div className="departmentdiv2">
              <button className="handlenewclass" onClick={handleAddNewClass}>
                + Add New Class
              </button>
              <button className="allclasses" onClick={handleViewAllClasses}>
                All Classes
              </button>
            </div>
          </div>

          <div className="form-school-container">
            <h4 className="department-detail">Class Details</h4>
            <form onSubmit={handleSubmit} className="department-detail-form">
              <div className="input-group">
                <div style={{ paddingBottom: "10px" }}>
                  <label className="label"> Class Name</label>
                </div>
                <input
                  className="school-class-add-input-tag"
                  type="text"
                  value={schoolClassName}
                  onChange={(e) => setSchoolClassName(e.target.value)}
                  placeholder="Enter Class Name"
                  required
                />
              </div>
              <div className="form-school-btns">
                <button className="btn-s" type="save">
                  Save
                </button>
                <button className="btn-c" type="cancel">
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

export default SchoolNewClass;
