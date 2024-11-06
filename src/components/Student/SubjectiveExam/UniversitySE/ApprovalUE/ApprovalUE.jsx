import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UniUploadExamFilter from "../UploadExamFilter/UniUploadExamFilter.jsx";
import "./ApprovalUE.css";

const ApprovalUE = () => {
  const [universitySubjectId, setUniversitySubjectId] = useState();
  const [universityUploadedExams, setuniversityUploadedExams] = useState([]);
  const [approvalRefresh, setApprovalRefresh] = useState();
  const [rejectRefresh, setRejectRefresh] = useState();

  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  useEffect(() => {
    axios
      .get(
        `${API_BASE_URL}/admin/exams?universitySubjectId=${universitySubjectId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        // console.log(response);
        const data = response.data?.data || [];
        setuniversityUploadedExams(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [universitySubjectId, approvalRefresh, rejectRefresh]);

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
      <div id="university-uploaded-exam-approval-main">
        <UniUploadExamFilter
          universitySubjectId={universitySubjectId}
          setUniversitySubjectId={setUniversitySubjectId}
        />
        {/* school se card  */}
        <div className="university-se-main-container">
          <h4>University Uploaded Exam Approval</h4>
          <div className="university-se-approve-ue-card-box">
            {universityUploadedExams &&
              universityUploadedExams.map((universityUploadedExam, idx) => (
                <div className="university-se-card" key={idx}>
                  <ul class="university-se-card-ul">
                    <li class="university-se-card-li">
                      <p>
                        <b>Exam Title :</b> {universityUploadedExam.examTitle}
                      </p>
                    </li>
                    <li class="university-se-card-li">
                      <button className="university-se-view">
                        <Link
                          to={`${API_BASE_URL}/uploads/${universityUploadedExam.examFile}`}
                          target="_blank"
                        >
                          View
                        </Link>
                      </button>
                      <button
                        className="university-se-approve"
                        onClick={() =>
                          handleApprove(universityUploadedExam._id)
                        }
                      >
                        Approve
                      </button>
                      <button
                        className="university-se-reject"
                        onClick={() => handleReject(universityUploadedExam._id)}
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
