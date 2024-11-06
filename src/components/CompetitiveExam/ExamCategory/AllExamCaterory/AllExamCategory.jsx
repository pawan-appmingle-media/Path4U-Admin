import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AllExamCategory.css";

const AllExamCategory = () => {
  const [examCategories, setExamCategories] = useState([]);
  const navigate = useNavigate();
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/competitions`)
      .then((response) => {
        const examCategoriesData = response.data?.data || [];
        setExamCategories(examCategoriesData);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleAddNewCategory = () => {
    navigate("/ce-exam-add-category");
  };

  const handleViewAllCategories = () => {
    navigate("/ce-exam-all-category");
  };

  return (
    <div id="all-exam-category-inner-wrapper">
      <div className="all-exam-category-header-div">
        <h5>Exam Categories</h5>
        <div className="all-exam-category-header-btns">
          <button className="add-category-btn" onClick={handleAddNewCategory}>
            + Add New Exam
          </button>
          <button
            className="all-categories-btn"
            onClick={handleViewAllCategories}
          >
            All Exam
          </button>
        </div>
      </div>

      <div className="all-exam-category-table-container">
        <h5>All Exam Categories</h5>
        <table className="all-exam-category-table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Exam Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {examCategories.map((examCategorie, idx) => (
              <tr>
                <td>{idx + 1}</td>
                <td>{examCategorie.examCategory}</td>
                <td className="table-action-icons">
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

export default AllExamCategory;
