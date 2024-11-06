import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation
import "./UploadAllNotes.css"; // Updated CSS file import

const UploadAllNotes = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path); // Navigate to the given path
  };

  return (
    <div id="allnotes-inner-wrapper">
      <div className="allnotes-header">
        <h5>All Notes</h5>
        <div className="allnotes-header-btns">
          <button
            className="addnotes-add-btn"
            onClick={() => handleCardClick("/add-notes")}
          >
            + Add New Notes
          </button>
          <button
            className="allnotes-view-all-btn"
            onClick={() => handleCardClick("/all-notes")}
          >
            All Notes
          </button>
        </div>
      </div>
      {/* <WelcomeBack />  */}
      {/* Adjust the import path according to your project structure */}
      <div className="allnotes-table-wrapper">
        <h5 className="mx-4">Choose a Category</h5>
        <div className="allnotes-cards-wrapper">
          {/* School Card */}
          <div
            className="allnotes-card"
            onClick={() => handleCardClick("/upload-notes/upload-school-notes")}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <img src={require("../../../../Images/reports.png")} alt="" />
              <b>School</b>
            </div>
          </div>

          {/* College Card */}
          <div
            className="allnotes-card"
            onClick={() =>
              handleCardClick("/upload-notes/upload-add-university-notes")
            }
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <img src={require("../../../../Images/reports.png")} alt="" />
              <b>College</b>
            </div>
          </div>

          {/* Competitive Exam Card */}
          <div
            className="allnotes-card"
            onClick={() =>
              handleCardClick("/upload-notes/upload-add-competitive-notes")
            }
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <img src={require("../../../../Images/reports.png")} alt="" />
              <b>Competitive Exam</b>
            </div>
          </div>
        </div>
        <div className="form-btns items-right">
          <button className="btn-save">Next</button>
          <button className="btn-cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UploadAllNotes;
