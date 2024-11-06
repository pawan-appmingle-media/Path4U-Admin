import React from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";
import { TiInputCheckedOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import "./UniversitySE.css";

const UniversitySE = () => {
  let navigator = useNavigate();
  let handleApprovalUE = () => {
    navigator("/student-subjective-exam/university-se/approval-uploaded-exam");
  };
  let handleApprovalSMTE = () => {
    navigator("/student-subjective-exam/university-se/approval-submitted-exam");
  };
  let handleApprovalCE = () => {
    navigator("/student-subjective-exam/university-se/approval-checked-exam");
  };
  return (
    <>
      <div id="se-university-three-cards-main">
        <h4 className="mb-3">University Subjective Exam</h4>
        <div className="university-three-inner">
          <div className="university-sub-exam-card" onClick={handleApprovalUE}>
            <div>
              <LuFileSpreadsheet />
            </div>
            <div>
              <p>Uploaded Exam</p>
            </div>
          </div>
          <div
            className="university-sub-exam-card"
            onClick={handleApprovalSMTE}
          >
            <div>
              <MdLibraryBooks />
            </div>
            <div>
              <p>Submitted Exam</p>
            </div>
          </div>
          <div className="university-sub-exam-card" onClick={handleApprovalCE}>
            <div>
              <TiInputCheckedOutline />
            </div>
            <div>
              <p>Checked Exam</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversitySE;
