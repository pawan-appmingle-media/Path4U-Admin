import React from "react";
import { useNavigate } from "react-router-dom";
import "./CareerAll.css";

const CareerAll = () => {
  const navigate = useNavigate();
  const handleAddNewCareer = () => {
    navigate("/add-career");
  };
  const handleViewAllCareer = () => {
    navigate("/all-career");
  };
  const handleSubmit = () => {};

  return (
    <div id="all-carrer-main-wrapper">
      <div id="all-carrer-inner-wrapper">
        <div className="all-carrer-header-div">
          <h5>Career</h5>
          <div className="all-carrer-div2">
            <button
              className="handle-new-all-carrer"
              onClick={handleAddNewCareer}
            >
              + Add New Career
            </button>
            <button className="all-carrer" onClick={handleViewAllCareer}>
              View All Careers
            </button>
          </div>
        </div>

        <div className="classes-table-container">
          <h5>All Careers</h5>
          <table className="classes-table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample data rows */}
              {/* {allCareers.map((career, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{career.title}</td>
                  <td>{career.description}</td>
                  <td><img src={career.image} alt="Career" /></td>
                  <td className="table-action-icons">
                    <i className="fa-solid fa-file-pen"></i>&nbsp;&nbsp;
                    <i className="fa-solid fa-trash-can"></i>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CareerAll;
