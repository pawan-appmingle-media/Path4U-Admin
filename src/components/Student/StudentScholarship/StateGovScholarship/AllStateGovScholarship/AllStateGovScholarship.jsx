import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./AllStateGovScholarship.css";

const AllStateGovScholarship = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="all-state-gov-scholarship-main">
        <div className="all-state-gov-heading-main-div">
          <h4>State Government Scholarship Table</h4>
          <div className="header-main-btns">
            <button
              onClick={() => navigate("/student-scholarship/state-government")}
            >
              State Gov Scholarship
            </button>
            <button>All State Gov Scholarship</button>
          </div>
        </div>
        <div className="all-state-gov-scholarship-table-div">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>YouTube Link</th>
                <th>Other Link</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>my title</td>
                <td>xyz desc</td>
                <td>https://youtube.com/</td>
                <td>http://localhost:3000/student-scholarship</td>
                <td>
                  <span>
                    <FaEdit
                      onClick={() =>
                        navigate(
                          "../student-scholarship/edit-state-gov-scholarship"
                        )
                      }
                    />
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

export default AllStateGovScholarship;
