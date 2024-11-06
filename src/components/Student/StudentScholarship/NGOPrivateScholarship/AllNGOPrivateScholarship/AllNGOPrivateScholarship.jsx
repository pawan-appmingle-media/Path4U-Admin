import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./AllNGOPrivateScholarship.css";

const AllNGOPrivateScholarship = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="all-private-scholarship-all-main">
        <div className="all-private-gov-heading-main-div">
          <h4>NGO/Private Scholarship Table</h4>
          <div className="header-main-btns">
            <button
              onClick={() =>
                navigate("/student-scholarship/private-scholarship")
              }
            >
              NGO/Private Scholarship
            </button>
            <button>All NGO/Private Scholarship</button>
          </div>
        </div>
        <div className="all-private-scholarship-table-div">
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
                          "../student-scholarship/edit-private-scholarship"
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

export default AllNGOPrivateScholarship;
