import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./AllStates.css";

const AllStates = () => {
  const [allStates, setAllStates] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigator = useNavigate();
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  let handleShowAllStates = () => {
    axios(`${API_BASE_URL}/states`)
      .then((resp) => {
        return resp.data;
      })
      .then((resp) => {
        // console.log(resp);
        setAllStates(resp);
      })
      .catch((err) => {
        console.log("All State", err);
      });
  };

  let handleEditState = (id) => {
    navigator(`/edit-state/${id}`);
  };

  let handleDeleteState = (id) => {
    let confmDlt = window.confirm("Do You want to Delete");
    if (confmDlt) {
      axios
        .delete(`${API_BASE_URL}/admin/states/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((resp) => {
          alert("Data Deleted Successfully.");
          window.location.reload("/all-state");
        });
      handleShowAllStates();
    }
  };

  useEffect(() => {
    handleShowAllStates();
  }, []);

  return (
    <>
      <div id="all-states">
        <div className="all-state-heading-div">
          <h4>All States</h4>
          <div className="all-states-nav-btns-div">
            <button
              className="nav-add-states-form"
              onClick={() => navigator("/create-state")}
            >
              Add State
            </button>
            <button
              className="nav-all-states-table"
              onClick={() => navigator("/all-states")}
            >
              All States
            </button>
          </div>
        </div>
        {/* all states table  */}
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allStates.map((data) => (
              <>
                <tr key={data._id}>
                  <td>{data.state}</td>
                  <td>
                    <div className="state-action-icons">
                      <FaEdit
                        className="edit-state-icon"
                        onClick={() => handleEditState(data._id)}
                      />
                      <i>
                        <MdDelete onClick={() => handleDeleteState(data._id)} />
                      </i>
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllStates;
