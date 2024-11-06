import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UniUploadExamFilter from "../UploadExamFilter/UniUploadExamFilter";
import "./ApprovalSMTE.css";

const ApprovalSMTE = () => {
  const [universitySubjectId, setUniversitySubjectId] = useState();
  const [universitySubmittedExam, setUniversitySubmittedExam] = useState([]);
  const [approvalRefresh, setApprovalRefresh] = useState();
  const [rejectRefresh, setRejectRefresh] = useState();
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  useEffect(() => {
    axios
      .get(
        `${API_BASE_URL}/admin/exams/submitted?subjectId=${universitySubjectId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        // console.log(response);
        const data = response.data?.data || [];
        setUniversitySubmittedExam(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [universitySubjectId, approvalRefresh, rejectRefresh]);

  const handleApprove = (id) => {
    axios
      .put(
        `${API_BASE_URL}/admin/exams/approve-reject/${id}`,
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
        `${API_BASE_URL}/admin/exams/approve-reject/${id}`,
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
      <div id="university-submitted-exam-approval-main">
        <UniUploadExamFilter
          universitySubjectId={universitySubjectId}
          setUniversitySubjectId={setUniversitySubjectId}
        />
        {/* school se card  */}
        <div className="university-se-main-container">
          <h4>University Submitted Exam Approval</h4>
          <div className="university-se-approve-smte-card-box">
            {universitySubmittedExam &&
              universitySubmittedExam.map((submittedExam, idx) => (
                <div className="university-se-card" key={idx}>
                  <ul class="university-se-card-ul">
                    <li class="university-se-card-li">
                      <p>
                        <b>Exam Title :</b> {submittedExam.examTitle}
                      </p>
                    </li>
                    <li class="university-se-card-li">
                      <button className="university-se-view">
                        {" "}
                        <Link
                          to={`${API_BASE_URL}/uploads/${submittedExam.submittedFile}`}
                          target="_blank"
                        >
                          View
                        </Link>
                      </button>
                      <button
                        className="university-se-approve"
                        onClick={() => handleApprove(submittedExam._id)}
                      >
                        Approve
                      </button>
                      <button
                        className="university-se-reject"
                        onClick={() => handleReject(submittedExam._id)}
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

export default ApprovalSMTE;
