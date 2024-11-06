import { useNavigate } from "react-router-dom";
import "./AssignmentSchool.css";

const AssignmentSchool = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="assignment-school-main-container">
        <div className="ass-school-heading-or-btns">
          <h4>School Assignment</h4>
          <div className="ass-school-nav-btns">
            <button>School Assignment</button>
            <button onClick={() => navigate("/student-assignment/all-school")}>
              School All Assignments
            </button>
          </div>
        </div>
        <div className="assignment-school-inner-container">
          <div className="ass-school-input-group">
            <label>
              <b>Class</b>
            </label>
            <select>
              <option value="">--Select Class</option>
              <option value="class10th">Class 10th</option>
              <option value="class12th">Class 12th</option>
            </select>
          </div>
          <div className="ass-school-input-group">
            <label>
              <b>Subject</b>
            </label>
            <select>
              <option value="">--Select Subject</option>
              <option>English</option>
              <option>Sanskrit</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Biology</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignmentSchool;
