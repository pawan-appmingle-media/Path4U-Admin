import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./City.css";

const City = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  const handleShowAllStates = () => {
    axios(`${API_BASE_URL}/states`)
      .then((resp) => setStates(resp.data))
      .catch((err) => console.log("Error", err));
  };

  useEffect(() => {
    handleShowAllStates();
  }, []);

  const handleAddCity = (e) => {
    e.preventDefault();
    axios
      .post(
        `${API_BASE_URL}/admin/cities`,
        { city, stateId: selectedState },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((resp) => {
        alert("City Added Successfully.");
        console.log(resp);
        setCity("");
        setSelectedState("");
      })
      .catch((err) => console.log("Error", err));
  };

  return (
    <div className="add-city-main-container">
      {/* Add City Heading And Nav Btns */}
      <div className="all-cities-heading-div">
        <h4>Add City</h4>
        <div className="all-cities-nav-btns-div">
          <button
            className="nav-add-cities-form"
            onClick={() => navigate("/create-city")}
          >
            Add City
          </button>
          <button
            className="nav-all-cities-table"
            onClick={() => navigate("/all-cities")}
          >
            All Cities
          </button>
        </div>
      </div>

      {/* Add city form */}
      <form className="add-city-form" onSubmit={handleAddCity}>
        <div className="city-input-group">
          <label>
            <b>State</b>
          </label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="" defaultChecked>
              --Select State--
            </option>
            {states.map((state) => (
              <option key={state._id} value={state._id}>
                {state?.state}
              </option>
            ))}
          </select>
        </div>

        {/* City input */}
        <div className="city-input-group">
          <label>
            <b>City</b>
          </label>
          <input
            type="text"
            placeholder="Enter City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="city-input-group-btns">
          <button type="submit">Add City</button>
          <button
            type="button"
            onClick={() => {
              setCity("");
              setSelectedState("");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default City;
