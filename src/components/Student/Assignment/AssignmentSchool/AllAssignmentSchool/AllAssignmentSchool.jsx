import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./AllAssignmentSchool.css";

const AllAssignmentSchool = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="school-all-assignments-table">
        <div className="school-all-ass-heading-or-btns">
          <h4>School Assignments</h4>
          <div className="school-all-ass-nav-btns">
            <button onClick={() => navigate("/student-assignment/school")}>
              School Assignment
            </button>
            <button>School All Assignments</button>
          </div>
        </div>
        <div className="school-all-assignment-inner">
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Subject</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Class 10th</td>
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
