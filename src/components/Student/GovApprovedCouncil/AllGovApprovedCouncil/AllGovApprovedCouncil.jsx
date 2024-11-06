import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./AllGovApprovedCouncil.css";

const AllGovApprovedCouncil = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="all-gov-app-card-all-main">
        <div className="all-gov-app-card-heading-main">
          <h4>Gov Approved Council Table</h4>
          <div className="header-main-btns">
            <button onClick={() => navigate("/government-approved-council")}>
              Gov Approved Council
            </button>
            <button>All Gov Approved Council</button>
          </div>
        </div>
        <div className="all-gov-app-card-table-div">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Uploaded Icon</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>card title</td>
                <td>****</td>
                <td>
                  <span>
                    <FaEdit
                      onClick={() =>
                        navigate("/edit-government-approved-council")
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

export default AllGovApprovedCouncil;
