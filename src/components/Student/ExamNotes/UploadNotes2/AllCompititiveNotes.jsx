import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation
import WelcomeBack from "../../../WelcomeBackMsg/WelcomeBack.jsx"; // Ensure correct import paths
import "./AllCompititiveNotes.css"; // Import the CSS file

const AllCompititiveNotes = () => {
  const navigate = useNavigate();

  const handleAddNewNote = () => {
    navigate("/compititive-notes");
  };

  const handleViewAllNotes = () => {
    navigate("/compititive-all-notes");
  };

  return (
    <div id="allcompititivenotes-inner-wrapper">
      <div className="allcompititivenotes-header-div">
        <h5>All Competitive Notes</h5>
        <div className="allcompititivenotes-header-btns">
          <button
            className="add-compititive-note-btn"
            onClick={handleAddNewNote}
          >
            + Add New Note
          </button>
          <button
            className="all-compititive-notes-btn"
            onClick={handleViewAllNotes}
          >
            All Notes
          </button>
        </div>
      </div>

      <WelcomeBack />

      <div className="allcompititivenotes-table-container">
        <h5>All Competitive Notes</h5>
        <table className="allcompititivenotes-table">
          <thead>
            <tr>
              <th>Class</th>
              <th>Number of Subjects</th>
              <th>Number of Students</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data rows */}
            <tr>
              <td>Mathematics</td>
              <td>6</td>
              <td>7</td>
              <td className="table-action-icons">
                <i className="fa-solid fa-file-pen"></i>&nbsp;&nbsp;
                <i className="fa-solid fa-trash-can"></i>
              </td>
            </tr>
            <tr>
              <td>Science</td>
              <td>6</td>
              <td>7</td>
              <td className="table-action-icons">
                <i className="fa-solid fa-file-pen"></i>&nbsp;&nbsp;
                <i className="fa-solid fa-trash-can"></i>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCompititiveNotes;
