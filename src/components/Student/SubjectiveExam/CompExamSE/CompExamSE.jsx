import React from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";
import { TiInputCheckedOutline } from "react-icons/ti";

import { useNavigate } from "react-router-dom";
import "./CompExamSE.css";

const CompExamSE = () => {
  let navigator = useNavigate();
  let handleApprovalUE = () => {
    navigator(
      "/student-subjective-exam/compititive-subjective-exam/approval-uploaded-exam"
    );
  };
  let handleApprovalSMTE = () => {
    navigator(
      "/student-subjective-exam/compititive-subjective-exam/approval-submitted-exam"
    );
  };
  let handleApprovalCE = () => {
    navigator(
      "/student-subjective-exam/compititive-subjective-exam/approval-checked-exam"
    );
  };
  return (
    <>
      <div id="se-comp-exam-three-cards-main">
        <h4 className="mb-3">Compititive Subjective Exam</h4>
        <div className="comp-exam-three-inner">
          <div className="comp-exam-sub-exam-card" onClick={handleApprovalUE}>
            <div>
              <LuFileSpreadsheet />
            </div>
            <div>
              <p>Uploaded Exam</p>
            </div>
          </div>
          <div className="comp-exam-sub-exam-card" onClick={handleApprovalSMTE}>
            <div>
              <MdLibraryBooks />
            </div>
            <div>
              <p>Submitted Exam</p>
            </div>
          </div>
          <div className="comp-exam-sub-exam-card" onClick={handleApprovalCE}>
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

export default CompExamSE;
