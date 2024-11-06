import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { useNavigate } from "react-router-dom";

import "./AllAssignmentUniversity.css";

const AllAssignmentSchool = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="university-all-assignments-table">
        <div className="university-all-ass-heading-or-btns">
          <h4>University Assignments</h4>
          <div className="university-all-ass-nav-btns">
            <button onClick={() => navigate("/student-assignment/university")}>
              University Assignment
            </button>
            <button>University All Assignments</button>
          </div>
        </div>
        <div className="university-all-assignment-inner">
          <table>
            <thead>
              <tr>
                <th>Courses</th>
                <th>Semesters</th>
                <th>Subjects</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Class 10th</td>
                <td>Sem 1</td>
                <td>Physics</td>
                <td>
                  <span>
                    <FaEdit />
                  </span>
                  <span>
                    <MdDelete />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllAssignmentSchool;
