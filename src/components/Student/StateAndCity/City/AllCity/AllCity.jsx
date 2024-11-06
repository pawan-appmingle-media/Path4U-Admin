// import axios from "axios";
// import { useEffect, useState } from "react";
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import "./AllCity.css";

// const AllCity = () => {
//   const [allStates, setAllStates] = useState([]);

//   const navigator = useNavigate();
//   const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

//   let handleEditCity = (id) => {
//     navigator(`/edit-city`);
//   };
//   let getAllState = () => {
//     axios
//       .get(`${API_BASE_URL}/states`)
//       .then((resp) => resp.data)
//       .then((resp) => setAllStates(resp))
//       .catch((err) => {
//         console.log("Error", err);
//       });
//   };
//   useEffect(() => {
//     getAllState();
//   }, []);

//   let getAllCity = () => {
//     axios
//       .get(`${API_BASE_URL}/admin/cities`)
//       .then((resp) => console.log(resp))
//       .catch((err) => {
//         console.log("Error", err);
//       });
//   };
//   useEffect(() => {
//     getAllCity();
//   });

//   return (
//     <>
//       <div id="filter-and-all-city-main">
//         <div id="all-cities">
//           <div className="all-cities-heading-div">
//             <h4>All Cities</h4>
//             <div className="all-cities-nav-btns-div">
//               <button
//                 className="nav-add-cities-form"
//                 onClick={() => navigator("/create-city")}
//               >
//                 Add City
//               </button>
//               <button
//                 className="nav-all-cities-table"
//                 onClick={() => navigator("/all-cities")}
//               >
//                 All Cities
//               </button>
//             </div>
//           </div>
//           {/* all states table  */}
//           <div id="all-cities-filter">
//             {/* <p>Filter city with choose State</p> */}
//             <select>
//               <option value="">--Select State</option>
//               {allStates &&
//                 allStates.map((state) => (
//                   <>
//                     <option value={state._id}>{state?.state}</option>
//                   </>
//                 ))}
//             </select>
//             <button className="cities-filter-submit-btn" type="submit">
//               Submit
//             </button>
//           </div>

//           <table>
//             <thead>
//               <tr>
//                 <th>Cities</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>city</td>
//                 <td>
//                   <div className="cities-action-icons">
//                     <FaEdit
//                       className="edit-cities-icon"
//                       onClick={() => handleEditCity()}
//                     />
//                     <i>
//                       <MdDelete />
//                     </i>
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AllCity;

import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./AllCity.css";

const AllCity = () => {
  const [allStates, setAllStates] = useState([]);
  const [allCities, setAllCities] = useState([]); // State for storing cities
  const [selectedState, setSelectedState] = useState(""); // State for selected state

  const navigate = useNavigate();
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  const handleEditCity = (id) => {
    navigate(`/edit-city/${id}`);
  };

  // Fetch all states
  const getAllState = () => {
    axios
      .get(`${API_BASE_URL}/states`)
      .then((resp) => setAllStates(resp.data))
      .catch((err) => console.log("Error", err));
  };

  useEffect(() => {
    getAllState();
  }, []);

  // Fetch cities based on the selected state
  const getAllCity = (stateId = "") => {
    const url = stateId
      ? `${API_BASE_URL}/cities/${stateId}`
      : `${API_BASE_URL}/cities`;

    axios
      .get(url)
      .then((resp) => setAllCities(resp.data?.data)) // Set the cities data
      .catch((err) => console.log("Error", err));
  };

  useEffect(() => {
    getAllCity(); // Initial fetch for all cities
  }, []);

  console.log(allCities);

  // Handle state selection change
  const handleStateChange = (e) => {
    const stateId = e.target.value;
    setSelectedState(stateId);
    getAllCity(stateId); // Fetch cities for the selected state
  };

  return (
    <>
      <div id="filter-and-all-city-main">
        <div id="all-cities">
          <div className="all-cities-heading-div">
            <h4>All Cities</h4>
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

          {/* Filter by state */}
          <div id="all-cities-filter">
            <select value={selectedState} onChange={handleStateChange}>
              <option value="">--Select State--</option>
              {allStates.map((state) => (
                <option key={state._id} value={state._id}>
                  {state.state}
                </option>
              ))}
            </select>
            {/* <button
              className="cities-filter-submit-btn"
              type="button"
              onClick={() => getAllCity(selectedState)}
            >
              Filter
            </button> */}
          </div>

          {/* Cities table */}
          <table>
            <thead>
              <tr>
                <th>City</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allCities.length > 0 ? (
                allCities.map((city) => (
                  <tr key={city._id}>
                    <td>{city.city}</td>
                    <td>
                      <div className="cities-action-icons">
                        <FaEdit
                          className="edit-cities-icon"
                          onClick={() => handleEditCity(city._id)}
                        />
                        <MdDelete />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2">No cities found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllCity;
