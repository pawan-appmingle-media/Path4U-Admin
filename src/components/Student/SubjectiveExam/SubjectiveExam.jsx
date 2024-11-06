// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SubjectiveExam.css";

const SubjectiveExam = () => {
  let navigate = useNavigate();
  let handleSchoolCardNav = () => {
    navigate("./school-se");
  };
  let handleUniversityCardNav = () => {
    navigate("./university-se");
  };
  let handleCompExamCardNav = () => {
    navigate("./compititive-exam-se");
  };
  return (
    <div className="subjective-exam-main-wrapper">
      <div className="subjective-exam-heading-container">
        <div className="col">
          <h5>All Exam</h5>
        </div>

        <div className="subjective-exam-btns-container">
          <button className="subjective-exam-add-new-btn">
            + Add New Exam
          </button>
          <button className="subjective-exam-all-exam-btn">All Exam</button>
        </div>
      </div>

      {/* After heading cards main box  */}
      <div className="cards-text-or-btns-main">
        <div className="mb-4">
          <h5>Choose a Category</h5>
        </div>

        <div className="subjective-exam-cards-main-container">
          {/* School Card */}
          <div
            className="subj-exam-card-first-main"
            onClick={handleSchoolCardNav}
          >
            <div className="sub-exam-inner-link-div">
              <img src={require("../../../Images/reports.png")} alt="School" />
              <b className="mx-3">School</b>
            </div>
          </div>

          {/* University Card */}
          <div
            className="subj-exam-card-first-main"
            onClick={handleUniversityCardNav}
          >
            <div className="sub-exam-inner-link-div">
              <img
                src={require("../../../Images/reports.png")}
                alt="College"
                className="me-3"
              />
              <b>University</b>
            </div>
          </div>

          {/* Competitive Exam Card */}
          <div
            className="subj-exam-card-first-main"
            onClick={handleCompExamCardNav}
          >
            <div className="sub-exam-inner-link-div">
              <img
                src={require("../../../Images/reports.png")}
                alt="Competitive Exam"
                className="me-3"
              />
              <b>Competitive Exam</b>
            </div>
          </div>
        </div>

        <div className="subjective-exam-next-or-cancel-container">
          <button className="se-next">Next</button>
          <button className="se-cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SubjectiveExam;
