import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation
import "./AllCompetitiveSubject.css"; // Updated CSS file import

const AllCompetitiveSubject = () => {
  const [examCategories, setExamCategories] = useState([]);
  const [examCategoryId, setExamCategoryId] = useState("");
  const [competitiveSubjects, setCompetitiveSubjects] = useState([]);
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;
  const navigate = useNavigate();

  const handleAddNewCategory = () => {
    navigate("/ce-add-subject");
  };

  const handleViewAllCategories = () => {
    navigate("/ce-add-subject");
  };

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/competitions`)
      .then((response) => {
        const examCategoriesData = response.data?.data || [];
        setExamCategories(examCategoriesData);
      })
      .catch((error) => console.log(error));
  }, []);

  const getSubjects = () => {
    axios
      .get(`${API_BASE_URL}/subjects?reference=${examCategoryId}`)
      .then((response) => {
        const subjectDatas = response.data?.data || [];
        console.log(subjectDatas);

        setCompetitiveSubjects(subjectDatas);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getSubjects();
  }, [examCategoryId]);

  return (
    <div id="comp-subject-inner-wrapper">
      <div className="comp-subject-header">
        <h5>Exam Categories</h5>
        <div className="comp-subject-header-btns">
          <button
            className="comp-subject-add-btn"
            onClick={handleAddNewCategory}
          >
            + Add New Subject
          </button>
          <button
            className="comp-subject-view-all-btn"
            onClick={handleViewAllCategories}
          >
            All Subject
          </button>
        </div>
      </div>

      <div className="mx-4">
        <label className="new-chapter-label">Select Exam Category</label>
        <select
          className="new-chapter-dropdown"
          value={examCategoryId}
          onChange={(e) => setExamCategoryId(e.target.value)}
          required
        >
          <option value="">-Select Exam Category-</option>
          {examCategories.map((category, idx) => (
            <option key={idx} value={category._id}>
              {category.examCategory}
            </option>
          ))}
        </select>
      </div>

      <div className="comp-subject-table-wrapper">
        <h5>All Categories</h5>
        <table className="comp-subject-table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Subject Name</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {competitiveSubjects.map((competitiveSubject, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{competitiveSubject.subjectName}</td>
                <td>{competitiveSubject.category}</td>
                <td className="comp-subject-action-icons">
                  <i className="fa-solid fa-file-pen"></i>&nbsp;&nbsp;
                  <i className="fa-solid fa-trash-can"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCompetitiveSubject;
