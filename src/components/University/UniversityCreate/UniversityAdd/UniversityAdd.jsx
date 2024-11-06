import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UniversityAdd.css";

const UniversityAdd = () => {
  const [universityName, setUniversityName] = useState("");
  const [universityAddress, setUniversityAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the payload
    const payload = {
      universityName: universityName,
      address: universityAddress,
    };

    try {
      // Send POST request
      const response = await axios.post(
        `${API_BASE_URL}/universities`,
        payload
      );

      // Clear form and display success message
      setUniversityName("");
      setUniversityAddress("");
      // setSuccessMessage("University added successfully!");
      alert("University added successfully!");
    } catch (error) {
      // setErrorMessage("Failed to add university. Please try again.");
      alert("Failed to add university. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      <div id="add-college-course-wrapper">
        <div className="course-header-with-btns">
          <h5>Course</h5>

          <div className="college-course-nav-btns">
            <Link to={"/university-add"}>
              <button className="college-add-course-add-btn">
                Add University
              </button>
            </Link>
            <Link to={"/university-all"}>
              <button className="college-all-course-btn">All University</button>
            </Link>
          </div>
        </div>

        <div className="add-college-course-inner-main-wrapper">
          <div className="form-main-container">
            <h4 className="college-course-detail">Course Details</h4>
            <form
              onSubmit={handleSubmit}
              className="college-course-detail-form"
            >
              <div className="input-group">
                <label className="label">University Name</label>
                <input
                  style={{
                    marginLeft: "1px",
                    borderBottomLeftRadius: "5px",
                    borderTopLeftRadius: "5px",
                  }}
                  type="text"
                  value={universityName}
                  onChange={(e) => setUniversityName(e.target.value)}
                  placeholder="Enter University Name..."
                  required
                />
              </div>
              <div className="input-group">
                <label className="label">Address</label>
                <input
                  style={{
                    marginLeft: "1px",
                    borderBottomLeftRadius: "5px",
                    borderTopLeftRadius: "5px",
                  }}
                  type="text"
                  value={universityAddress}
                  onChange={(e) => setUniversityAddress(e.target.value)}
                  placeholder="Enter University Address..."
                  required
                />
              </div>

              <div className="college-course-form-btns">
                <button type="submit" className="btn-search">
                  Save
                </button>
                <button type="button" className="btn-cancel">
                  Cancel
                </button>
              </div>

              {errorMessage && <p className="error-message">{errorMessage}</p>}
              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversityAdd;
