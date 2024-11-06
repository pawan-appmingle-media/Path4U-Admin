import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation
import WelcomeBack from "../../../WelcomeBackMsg/WelcomeBack.jsx"; // Adjust path based on your structure
import "./AllTopics.css"; // Updated CSS file import

const AllTopics = () => {
  const navigate = useNavigate();

  const handleAddNewTopics = () => {
    navigate("/ce-add-topic"); // Ensure this path is correct
  };

  const handleViewAllTopic = () => {
    navigate("/ce-all-topic"); // Ensure this path is correct
  };

  return (
    <div id="alltopics-inner-wrapper">
      <div className="alltopics-header">
        <h5>Exam Topics</h5>
        <div className="alltopics-header-btns">
          <button className="alltopics-add-btn" onClick={handleAddNewTopics}>
            + Add New Topic
          </button>
          <button
            className="alltopics-view-all-btn"
            onClick={handleViewAllTopic}
          >
            All Topics
          </button>
        </div>
      </div>
      <WelcomeBack />{" "}
      {/* Adjust the import path according to your project structure */}
      <div className="alltopics-table-wrapper">
        <h5>All Topics</h5>
        <table className="alltopics-table">
          <thead>
            <tr>
              <th>Topic Name</th>
              <th>Number of Exams</th>
              <th>Number of Students</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Math Topic</td>
              <td>5</td>
              <td>100</td>
              <td className="alltopics-action-icons">
                <i className="fa-solid fa-file-pen"></i>&nbsp;&nbsp;
                <i className="fa-solid fa-trash-can"></i>
              </td>
            </tr>
            <tr>
              <td>Science Topic</td>
              <td>6</td>
              <td>90</td>
              <td className="alltopics-action-icons">
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

export default AllTopics;
