import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CUploadExamFilter from "../UploadExamFilter/CUploadExamFilter.jsx";
import "./ApprovalUE.css";

const ApprovalUE = () => {
  const [competitiveSubjectId, setCompetitiveSubjectId] = useState();
  const [competitiveUploadedExams, setCompetitiveUploadedExams] = useState([]);
  const [approvalRefresh, setApprovalRefresh] = useState();
  const [rejectRefresh, setRejectRefresh] = useState();
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  useEffect(() => {
    axios
      .get(
        `${API_BASE_URL}/admin/exams?competitionSubjectId=${competitiveSubjectId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        // console.log(response);
        const data = response.data?.data || [];
        setCompetitiveUploadedExams(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [competitiveSubjectId, approvalRefresh, rejectRefresh]);

  const handleApprove = (id) => {
    axios
      .put(
        `${API_BASE_URL}/admin/exams/pending/approve-reject/${id}`,
        {
          examStatus: "approved",
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
        `${API_BASE_URL}/admin/exams/pending/approve-reject/${id}`,
        {
          examStatus: "rejected",
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
      <div id="comp-exam-approval-upload-exam-main">
        <CUploadExamFilter
          competitiveSubjectId={competitiveSubjectId}
          setCompetitiveSubjectId={setCompetitiveSubjectId}
        />
        {/* comp. exam se card  */}
        <div className="comp-exam-se-main-container">
          <h4>Compititive Uploaded Exam Approval</h4>
          <div className="comp-exam-se-approve-ue-card-box">
            {competitiveUploadedExams &&
              competitiveUploadedExams.map((competitiveUploadedExam, idx) => (
                <div className="comp-exam-se-card" key={idx}>
                  <ul class="comp-exam-se-card-ul">
                    <li class="comp-exam-se-card-li">
                      <p>
                        <b>Exam Title :</b> {competitiveUploadedExam.examTitle}
                      </p>
                    </li>
                    <li class="comp-exam-se-card-li">
                      <button className="comp-exam-se-view">
                        <Link
                          to={`${API_BASE_URL}/uploads/${competitiveUploadedExam.examFile}`}
                          target="_blank"
                        >
                          View
                        </Link>
                      </button>
                      <button
                        className="comp-exam-se-approve"
                        onClick={() =>
                          handleApprove(competitiveUploadedExam._id)
                        }
                      >
                        Approve
                      </button>
                      <button
                        className="comp-exam-se-reject"
                        onClick={() =>
                          handleReject(competitiveUploadedExam._id)
                        }
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

export default ApprovalUE;
