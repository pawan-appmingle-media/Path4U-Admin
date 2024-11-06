import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UploadExamFilter from "../UploadExamFilter/UploadExamFilter.jsx";
import "./ApprovalCE.css";

const ApprovalCE = () => {
  const [subjectId, setSubjectId] = useState("");
  const [schoolCheckedExam, setSchoolCheckedExam] = useState([]);
  const [approvalRefresh, setApprovalRefresh] = useState();
  const [rejectRefresh, setRejectRefresh] = useState();

  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/admin/exams/checked?subjectId=${subjectId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const data = response.data?.data || [];
        setSchoolCheckedExam(data);

        // Show alert if no data is found
        if (data.length === 0) {
          alert("No exams found for the selected subject.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [subjectId, approvalRefresh, rejectRefresh]);

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
        alert("Exam approved successfully.");
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
        alert("Exam rejected successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div id="school-checked-exam-approval-main">
        {/* Filter  */}
        <UploadExamFilter subjectId={subjectId} setSubjectId={setSubjectId} />
        {/* school se card  */}
        <div className="school-se-main-container">
          <h4>School Checked Exam Approval</h4>
          <div className="school-se-approve-ce-card-box">
            {schoolCheckedExam &&
              schoolCheckedExam.map((checkedExam, idx) => (
                <div className="school-se-card" key={idx}>
                  <ul className="school-se-card-ul">
                    <li className="school-se-card-li">
                      <p>
                        <b>Exam Remark :</b> {checkedExam.remark}
                      </p>
                    </li>
                    <li className="school-se-card-li">
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
