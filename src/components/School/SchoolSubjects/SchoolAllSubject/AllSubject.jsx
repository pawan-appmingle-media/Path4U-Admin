import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation
import "./AllSubject.css"; // Import the CSS file
const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

const AllSubject = () => {
  const [schoolClassName, setSchoolClassName] = useState("");
  const [reference, setReference] = useState("");
  const [allSubjects, setAllSubjects] = useState([]);
  const navigate = useNavigate();

  const handleAddNewClass = () => {
    navigate("/school-add-subject");
  };

  const handleViewAllClasses = () => {
    navigate("/school-all-subject");
  };

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/classes`)
      .then((resp) => {
        const { data } = resp.data;
        console.log(data);
        setSchoolClassName(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const heandleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`${API_BASE_URL}/subjects/?reference=${reference}`)
      .then((result) => {
        const { data } = result.data;
        console.log(data);

        setAllSubjects(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div id="classes-inner-wrapper">
      <div className="classes-header-div">
        <h5>All Subjects</h5>
        <div className="classes-header-btns">
          <button className="add-class-btn" onClick={handleAddNewClass}>
            + Add New Subject
          </button>
          <button className="all-classes-btn" onClick={handleViewAllClasses}>
            All Subject
          </button>
        </div>
      </div>

      {/* <WelcomeBack /> */}

      <div className="school-all-subject-filter-main">
        <div className="input-group">
          <form onSubmit={heandleSearch}>
            <div style={{ paddingBottom: "10px" }}>
              <label className="label">Select Class</label>
            </div>
            <select
              className="select-dropdown"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              required
            >
              <option value="">-Select Class</option>
              {schoolClassName &&
                schoolClassName.map((classes) => (
                  <option value={classes._id} key={classes._id}>
                    {classes?.className}
                  </option>
                ))}
            </select>
            <button className="btn-search" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="classes-table-container">
        <h5>All Subject</h5>
        <table className="classes-table">
          <thead>
            <tr>
              <th>Subject</th>
              {/* <th>Number of Students</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data rows */}

            {allSubjects.map((data, idx) => (
              <tr key={idx}>
                {/* <td>{schoolClassName}</td> */}
                <td>{data.subjectName}</td>
                {/* <td>7</td> */}
                <td className="table-action-icons">
                  <i className="fa-solid fa-file-pen"></i>&nbsp;&nbsp;
                  <i className="fa-solid fa-trash-can"></i>
                </td>
              </tr>
            ))}

            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSubject;
