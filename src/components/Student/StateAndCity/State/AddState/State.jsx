import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./State.css";

const State = () => {
  const [state, setState] = useState("");
  let navigator = useNavigate();
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;
  let handleAddState = (e) => {
    e.preventDefault();
    // Sending POST request with Axios
    axios
      .post(
        `${API_BASE_URL}/admin/states`,
        { state: state },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((resp) => {
        alert("State Added Successfully.");
        window.location.reload("/add-state");
      })
      .catch((err) => console.log("Error", err));
  };
  return (
    <>
      <div className="add-state-main-container">
        <div className="add-state-heading-div">
          <h4>Add State</h4>
          <div className="add-states-nav-btns-div">
            <button
              className="go-add-states-form"
              onClick={() => navigator("/create-state")}
            >
              Add State
            </button>
            <button
              className="go-all-states-table"
              onClick={() => navigator("/all-states")}
            >
              All States
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
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="state-input-group-btns">
            <button onClick={handleAddState}>Add State</button>
            <button>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default State;
