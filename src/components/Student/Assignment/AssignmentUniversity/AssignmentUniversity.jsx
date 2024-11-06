import { useNavigate } from "react-router-dom";
import "./AssignmentUniversity.css";

const AssignmentUniversity = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div id="assignment-university-main-container">
        <div className="ass-university-heading-or-btns">
          <h4>University Assignment</h4>
          <div className="ass-university-nav-btns">
            <button>University Assignment</button>
            <button
              onClick={() => navigate("/student-assignment/all-university")}
            >
              University All Assignments
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
    </div>
  );
};

export default AssignmentUniversity;
