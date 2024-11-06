import React from "react";
import { useNavigate } from "react-router-dom";
import "./CareerAdd.css";

const CareerAdd = () => {
  const navigate = useNavigate();

  const handleViewAllCareer = () => {
    navigate("/all-career");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div id="student-career-form-wrapper">
        <div className="student-career-superheader">
          <div className="add-carrer-header-div">
            <h5>Career</h5>
            <div className="add-carrer-div2">
              <button className="add-carrer">+ Add New Career</button>
              <button
                className="handle-new-all-carrer"
                onClick={handleViewAllCareer}
              >
                View All Careers
              </button>
            </div>
          </div>

          <div className="student-career-form-container" id="career-form">
            <h4 className="career-detail-header">Career Details</h4>
            <form
              className="student-career-form"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div className="career-input-group">
                <div style={{ paddingBottom: "10px" }}>
                  <label className="career-label">Title : </label>
                </div>
                <input type="text" placeholder="Enter Title" required />
              </div>

              <div className="career-input-group">
                <div style={{ paddingBottom: "10px" }}>
                  <label className="career-label">Description : </label>
                </div>
                <input type="text" placeholder="Enter Description" required />
              </div>

              <div className="career-input-group">
                <div style={{ paddingBottom: "10px" }}>
                  <label className="career-label">Image : </label>
                </div>
                <input
                  type="file"
                  id="career-upload-icon"
                  multiple={false}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    console.log(file);

                    if (file) {
                      // setCareerUploadIcon(file);
                    }
                  }}
                />
              </div>

              <div className="career-form-buttons">
                <button className="btn-career-save" type="submit">
                  Save
                </button>
                <button className="btn-career-cancel">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerAdd;
