import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CUploadExamFilter from "../UploadExamFilter/CUploadExamFilter.jsx";
import "./ApprovalSMTE.css";

const ApprovalSMTE = () => {
  const [competitiveSubjectId, setCompetitiveSubjectId] = useState();
  const [compititiveSubmittedExam, setCompititiveSubmittedExam] = useState([]);
  const [approvalRefresh, setApprovalRefresh] = useState();
  const [rejectRefresh, setRejectRefresh] = useState();
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  useEffect(() => {
    axios
      .get(
        `${API_BASE_URL}/admin/exams/submitted?subjectId=${competitiveSubjectId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        // console.log(response);
        const data = response.data?.data || [];
        setCompititiveSubmittedExam(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [competitiveSubjectId, approvalRefresh, rejectRefresh]);

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
      <div id="comp-exam-approval-submitted-exam-main">
        <CUploadExamFilter
          competitiveSubjectId={competitiveSubjectId}
          setCompetitiveSubjectId={setCompetitiveSubjectId}
        />
        {/* school se card  */}
        <div className="comp-exam-se-main-container">
          <h4>Compititive Submitted Exam Approval</h4>
          <div className="comp-exam-se-approve-smte-card-box">
            {compititiveSubmittedExam &&
              compititiveSubmittedExam.map((submittedExam, idx) => (
                <div className="comp-exam-se-card" key={idx}>
                  <ul class="comp-exam-se-card-ul">
                    <li class="comp-exam-se-card-li">
                      <p>
                        <b>Exam Title :</b> {submittedExam.examTitle}
                      </p>
                    </li>
                    <li class="comp-exam-se-card-li">
                      <button className="comp-exam-se-view">
                        <Link
                          to={`${API_BASE_URL}/uploads/${submittedExam.submittedFile}`}
                          target="_blank"
                        >
                          View
                        </Link>
                      </button>
                      <button
                        className="comp-exam-se-approve"
                        onClick={() => handleApprove(submittedExam._id)}
                      >
                        Approve
                      </button>
                      <button
                        className="comp-exam-se-reject"
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
