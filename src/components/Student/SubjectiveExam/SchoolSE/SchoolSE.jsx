import React from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";
import { TiInputCheckedOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import "./SchoolSE.css";

const SchoolSE = () => {
  let navigator = useNavigate();
  let handleApprovalUE = () => {
    navigator("/student-subjective-exam/school-se/approval-uploaded-exam");
  };
  let handleApprovalSMTE = () => {
    navigator("/student-subjective-exam/school-se/approval-submitted-exam");
  };
  let handleApprovalCE = () => {
    navigator("/student-subjective-exam/school-se/approval-checked-exam");
  };
  return (
    <>
      <div id="se-school-three-cards-main">
        <h4 className="mb-3">School Subjective Exam</h4>
        <div className="school-three-inner">
          <div className="school-sub-exam-card" onClick={handleApprovalUE}>
            <div>
              <LuFileSpreadsheet />
            </div>
            <div>
              <p>Uploaded Exam</p>
            </div>
          </div>

          <div className="school-sub-exam-card" onClick={handleApprovalSMTE}>
            <div>
              <MdLibraryBooks />
            </div>
            <div>
              <p>Submitted Exam</p>
            </div>
          </div>

          <div className="school-sub-exam-card" onClick={handleApprovalCE}>
            <div>
              <TiInputCheckedOutline />
            </div>
            <div>
              <p>Checked Exam</p>
            </div>
          </div>
        </div>
        {/* school-three-inner  */}
      </div>
    </>
  );
};

export default SchoolSE;
