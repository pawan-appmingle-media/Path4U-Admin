import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditCity.css";

const EditState = () => {
  const [editState, setEditState] = useState("");
  let navigator = useNavigate();
  let { id } = useParams();
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  //Get Data
  const fetchStateData = () => {
    axios
      .get(`${API_BASE_URL}/states/${id}`)
      .then((resp) => {
        return resp.data;
      })
      .then((resp) => {
        setEditState(resp);
      })
      .catch((err) => console.log("Error", err));
  };
  useEffect(() => {
    fetchStateData();
  }, []);

  // Edit State Data Fun
  let handleEditSave = (e) => {
    e.preventDefault();
    // State data update axio call
    axios
      .put(
        `${API_BASE_URL}/admin/states/${id}`,
        { state: editState },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((resp) => {
        alert("State Updated Successfully.");
        console.log(resp);
      })
      .catch((err) => alert("Error", err));
    navigator("/all-states");
  };
  return (
    <>
      <div className="edit-state-main-container">
        <div className="edit-state-heading-div">
          <h4>Edit State</h4>
          <div className="edit-states-nav-btns-div">
            <button
              className="go-add-states-form"
              onClick={() => navigator("/create-city")}
            >
              Add City
            </button>
            <button
              className="go-all-states-table"
              onClick={() => navigator("/all-cities")}
            >
              All Cities
            </button>
          </div>
        </div>
        {/* add state form  */}
        <form>
          <div className="state-input-group">
            <label>
              <b>State</b>
            </label>
            <input
              type="text"
              placeholder="Enter State Name"
              value={editState.state}
              onChange={(e) => setEditState(e.target.value)}
            />
          </div>
          <div className="state-input-group-btns">
            <button onClick={handleEditSave} type="submit">
              Edit State
            </button>
            <button type="cancel">Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditState;
