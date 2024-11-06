import { useNavigate } from "react-router-dom";
import "./Assignment.css";

const Assignment = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="student-assignment-main-wrapper">
        <h4>Assignment</h4>
        <div className="assignment-inner-div">
          <div
            className="school-stud-assignment"
            onClick={() => navigate("/student-assignment/school")}
          >
            School (NIOS)
          </div>
          <div
            className="university-stud-assignment"
            onClick={() => navigate("/student-assignment/university")}
          >
            University
          </div>
        </div>
      </div>
    </>
  );
};

export default Assignment;
