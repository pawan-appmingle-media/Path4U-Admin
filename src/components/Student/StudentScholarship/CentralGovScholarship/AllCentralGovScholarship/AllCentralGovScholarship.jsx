import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./AllCentralGovScholarship.css";

const AllCentralGovScholarship = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="all-central-gov-scholarship-all-main">
        <div className="all-central-gov-heading-main-div">
          <h4>Central Government Scholarship Table</h4>
          <div className="header-main-btns">
            <button
              onClick={() =>
                navigate("/student-scholarship/central-government")
              }
            >
              Central Gov Scholarship
            </button>
            <button>All Central Gov Scholarship</button>
          </div>
        </div>
        <div className="all-central-gov-scholarship-table-div">
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
                          "../student-scholarship/edit-central-gov-scholarship"
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

export default AllCentralGovScholarship;
