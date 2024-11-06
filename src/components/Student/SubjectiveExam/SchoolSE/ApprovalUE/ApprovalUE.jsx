import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UploadExamFilter from "../UploadExamFilter/UploadExamFilter.jsx";
import "./ApprovalUE.css";

const ApprovalUE = () => {
  const [subjectId, setSubjectId] = useState("");
  const [schoolUploadedExams, setSchoolUploadedExams] = useState([]);
  const [approvalRefresh, setApprovalRefresh] = useState();
  const [rejectRefresh, setRejectRefresh] = useState();

  // console.log("Approval UE : ---->", subjectId);
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/admin/exams?schoolSubjectId=${subjectId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log(response);
        const data = response.data?.data || [];
        setSchoolUploadedExams(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [subjectId, approvalRefresh, rejectRefresh]);

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
      <div id="school-uploaded-exam-approval-main">
        {/* Filter  */}
        <UploadExamFilter setSubjectId={setSubjectId} subjectId={subjectId} />

        {/* school se card  */}
        <div className="school-se-main-container">
          <h4>School Uploaded Exam Approval</h4>
          <div className="school-se-approve-ue-card-box">
            {schoolUploadedExams &&
              schoolUploadedExams.map((schoolUploadedExam, idx) => (
                <div className="school-se-card" key={idx}>
                  <ul class="school-se-card-ul">
                    <li class="school-se-card-li">
                      <p>
                        <b>Exam Title :</b> {schoolUploadedExam.examTitle}
                      </p>
                    </li>
                    <li class="school-se-card-li">
                      <button className="school-se-view">
                        <Link
                          to={`${API_BASE_URL}/uploads/${schoolUploadedExam.examFile}`}
                          target="_blank"
                        >
                          View
                        </Link>
                      </button>
                      <button
                        className="school-se-approve"
                        onClick={() => handleApprove(schoolUploadedExam._id)}
                      >
                        Approve
                      </button>
                      <button
                        className="school-se-reject"
                        onClick={() => handleReject(schoolUploadedExam._id)}
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
