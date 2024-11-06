import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UploadExamFilter from "../UploadExamFilter/UploadExamFilter.jsx";
import "./ApprovalSMTE.css";

const ApprovalSMTE = () => {
  const [subjectId, setSubjectId] = useState("");
  const [schoolSubmittedExam, setSchoolSubmittedExam] = useState([]);
  const [approvalRefresh, setApprovalRefresh] = useState();
  const [rejectRefresh, setRejectRefresh] = useState();

  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/admin/exams/submitted/?subjectId=${subjectId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log(response);
        const data = response.data?.data || [];
        setSchoolSubmittedExam(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [subjectId, approvalRefresh, rejectRefresh]);

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
      <div id="school-submitted-exam-approval-main">
        {/* Filter  */}
        <UploadExamFilter subjectId={subjectId} setSubjectId={setSubjectId} />

        {/* school se card  */}
        <div className="school-se-main-container">
          <h4>School Submitted Exam Approval</h4>
          <div className="school-se-approve-smte-card-box">
            {schoolSubmittedExam &&
              schoolSubmittedExam.map((submittedExam, idx) => (
                <div className="school-se-card" key={idx}>
                  <ul class="school-se-card-ul">
                    <li class="school-se-card-li">
                      <p>
                        <b>Exam Title :</b> {submittedExam.examTitle}
                      </p>
                    </li>
                    <li class="school-se-card-li">
                      <button className="school-se-view">
                        <Link
                          to={`${API_BASE_URL}/uploads/${submittedExam.submittedFile}`}
                          target="_blank"
                        >
                          View
                        </Link>
                      </button>
                      <button
                        className="school-se-approve"
                        onClick={() => handleApprove(submittedExam._id)}
                      >
                        Approve
                      </button>
                      <button
                        className="school-se-reject"
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
