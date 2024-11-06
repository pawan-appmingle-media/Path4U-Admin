import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddTopics.css";

const AddTopics = () => {
  const [examName, setExamName] = useState("");
  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Class Name:", examName);
    console.log("Subject:", subject);
    console.log("Chapter:", chapter);
  };

  const handleAddNewTopics = () => {
    navigate("/ce-add-topic");
  };

  const handleViewAllTopic = () => {
    navigate("/ce-all-topic");
  };

  return (
    <>
      <div className="topics-wrapper">
        <div className="topics-header-container">
          <div className="topics-header-content">
            <h5>Topics</h5>
            <div className="topics-buttons-container">
              <button className="topics-add-btn" onClick={handleAddNewTopics}>
                + Add New Topic
              </button>
              <button className="topics-view-btn" onClick={handleViewAllTopic}>
                All Topics
              </button>
            </div>
          </div>

          <div className="topics-form-container">
            <h4 className="topics-detail-header">Add Topics</h4>
            <form onSubmit={handleSubmit} className="topics-form">
              <div className="topics-input-group">
                <div className="topics-input-label">
                  <label className="topics-label">Topics Name</label>
                </div>
                <select
                  className="topics-input-field"
                  value={examName}
                  onChange={(e) => setExamName(e.target.value)}
                  required
                >
                  <option value="">Select Topics Name</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="topics-input-group">
                <div className="topics-input-label">
                  <label className="topics-label">Subject</label>
                </div>
                <select
                  className="topics-input-field"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                >
                  <option value="">Select Subject</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="topics-input-group">
                <div className="topics-input-label">
                  <label className="topics-label">Course</label>
                </div>
                <select
                  className="topics-input-field"
                  value={chapter}
                  onChange={(e) => setChapter(e.target.value)}
                  required
                >
                  <option value="">Select Course</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="topics-form-buttons">
                <button type="submit" className="topics-btn-submit">
                  Save
                </button>
                <button type="button" className="topics-btn-cancel">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTopics;
