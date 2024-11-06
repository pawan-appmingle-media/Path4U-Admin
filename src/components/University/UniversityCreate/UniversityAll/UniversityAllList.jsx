import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UniversityAllList.css";

const UniversityAllList = () => {
  const [universities, setUniversities] = useState([]);
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/universities`)
      .then((response) => {
        const universitiesData = response.data?.data || [];
        setUniversities(universitiesData);
      })
      .catch((error) => console.log(error));
  }, [API_BASE_URL]);

  const handleUpdateUniversity = (id) => {
    navigate(`/university-edit/${id}`);
  };

  return (
    <>
      <div id="college-all-course-inner-main-wrapper">
        <div className="course-header-with-btns-table-page">
          <h5>Semester</h5>

          <div className="college-all-course-nav-btns-table">
            <Link to={"/university-add"}>
              <button className="college-add-course-add-btn">
                Add University
              </button>
            </Link>
            <Link to={"/university-all"}>
              <button className="college-all-course-btn">All University</button>
            </Link>
          </div>
        </div>

        {/* Table */}
        <div className="headertable">
          <h5>All Semesters</h5>
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>University Name</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {universities.map((university, idx) => (
                <tr key={university._id}>
                  <td>{idx + 1}</td>
                  <td>{university.universityName}</td>
                  <td>{university.address}</td>
                  <td>
                    <i
                      className="fa-solid fa-file-pen"
                      onClick={() => handleUpdateUniversity(university._id)}
                    ></i>
                    <i className="fa-solid fa-trash-can"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* headertable  */}
      </div>
      {/* college-all-course-inner-main-wrapper  */}
    </>
  );
};

export default UniversityAllList;
