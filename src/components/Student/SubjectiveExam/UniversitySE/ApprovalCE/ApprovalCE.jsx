import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UniUploadExamFilter from "../UploadExamFilter/UniUploadExamFilter";
import "./ApprovalCE.css";

const ApprovalCE = () => {
  const [universitySubjectId, setUniversitySubjectId] = useState();
  const [universityCheckedExam, setuniversityCheckedExam] = useState([]);
  const [approvalRefresh, setApprovalRefresh] = useState();
  const [rejectRefresh, setRejectRefresh] = useState();
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  useEffect(() => {
    axios
      .get(
        `${API_BASE_URL}/admin/exams/checked?subjectId=${universitySubjectId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        // console.log(response);
        const data = response.data?.data || [];
        setuniversityCheckedExam(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [universitySubjectId, approvalRefresh, rejectRefresh]);

  const handleApprove = (id) => {
    axios
      .put(
        `${API_BASE_URL}/admin/exams/checked/${id}`,
        {
          approval: "approved",
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setApprovalRefresh(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleReject = (id) => {
    axios
      .put(
        `${API_BASE_URL}/admin/exams/checked/${id}`,
        {
          approval: "rejected",
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setRejectRefresh(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div id="university-checked-exam-approval-main">
        <UniUploadExamFilter
          universitySubjectId={universitySubjectId}
          setUniversitySubjectId={setUniversitySubjectId}
        />
        {/* school se card  */}
        <div className="university-se-main-container">
          <h4>University Checked Exam Approval</h4>
          <div className="university-se-approve-ce-card-box">
            {universityCheckedExam &&
              universityCheckedExam.map((checkedExam, idx) => (
                <div className="school-se-card" key={idx}>
                  <ul class="school-se-card-ul">
                    <li class="school-se-card-li">
                      <p>
                        <b>Exam Remark :</b> {checkedExam.remark}
                      </p>
                    </li>
                    <li class="school-se-card-li">
                      <button className="school-se-view">
                        <Link
                          to={`${API_BASE_URL}/uploads/${checkedExam.submittedFile}`}
                          target="_blank"
                        >
                          View
                        </Link>
                      </button>
                      <button
                        className="school-se-approve"
                        onClick={() => handleApprove(checkedExam._id)}
                      >
                        Approve
                      </button>
                      <button
                        className="school-se-reject"
                        onClick={() => handleReject(checkedExam._id)}
                      >
                        Reject
                      </button>
                    </li>
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ApprovalCE;
