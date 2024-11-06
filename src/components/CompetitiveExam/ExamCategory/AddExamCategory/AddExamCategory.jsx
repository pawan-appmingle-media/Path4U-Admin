import axios from "axios"; // Import axios for API requests
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddExamCategory.css";

const AddAddExamCategory = () => {
  const navigate = useNavigate();
  const [examCategory, setExamCategory] = useState("");
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (examCategory.trim() === "") {
      alert("Exam category cannot be empty");
      return;
    }

    const newCategory = {
      examCategory,
    };

    axios
      .post(`${API_BASE_URL}/competitions`, newCategory)
      .then((response) => {
        alert("Exam category added successfully!");
        setExamCategory("");
      })
      .catch((error) => {
        console.error("Error adding exam category:", error);
        alert("There was an error adding the exam category.");
      });
  };

  const handleAddNewExam = () => {
    navigate("/ce-exam-add-category");
  };

  const handleViewAllExams = () => {
    navigate("/ce-exam-all-category");
  };

  const handleCancel = () => {
    setExamCategory("");
    navigate("/ce-exam-all-category");
  };

  return (
    <div className="add-exam-category-wrapper">
      <div className="add-exam-category-header-container">
        <div className="add-exam-category-header-content">
          <h5>Competitive Exam Category</h5>
          <div className="add-exam-category-buttons-container">
            <button
              className="add-exam-category-exam-btn"
              onClick={handleAddNewExam}
            >
              + Add New Exam
            </button>
            <button
              className="category-exam-view-all-btn"
              onClick={handleViewAllExams}
            >
              All Exams
            </button>
          </div>
        </div>

        <div className="add-exam-category-form-container">
          <h4 className="add-exam-category-detail-header">Exam Category</h4>
          <form onSubmit={handleSubmit} className="add-exam-category-form">
            <div className="input-group">
              <label className="label">Exam Category</label>
              <input
                type="text"
                value={examCategory}
                onChange={(e) => setExamCategory(e.target.value)}
                placeholder="Enter Exam Category"
                required
              />
            </div>

            <div className="add-exam-category-exam-form-buttons">
              <button type="submit" className="add-exam-category-btn-submit">
                Save
              </button>
              <button
                type="button"
                className="add-exam-category-btn-cancel"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAddExamCategory;
