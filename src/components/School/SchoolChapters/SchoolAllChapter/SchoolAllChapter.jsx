import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SchoolAllChapter.css";

const SchoolAllChapter = () => {
  // const [classId,setClassId]=useState()
  const navigate = useNavigate();

  const handleAddNewChapter = () => {
    navigate("/school-add-chapter");
  };

  const handleViewAllChapters = () => {
    navigate("/school-all-chapter");
  };

  return (
    <div id="chapter-inner-wrapper">
      <div className="chapter-header-div">
        <h5>All Chapter</h5>
        <div className="chapter-header-btns">
          <button className="add-chapter-btn" onClick={handleAddNewChapter}>
            + Add New Chapter
          </button>
          <button className="all-chapters-btn" onClick={handleViewAllChapters}>
            All Chapters
          </button>
        </div>
      </div>

      <div>
        <div className="school-new-chapter-form-group">
          <label className="new-chapter-label">Class Name</label>
          <select
            className="new-chapter-dropdown"
            // value={classId}
            // onChange={(e) => setClassId(e.target.value)}
            required
          >
            <option value="">-Select Class-</option>
            {/* {classes &&
              classes.map((classes) => (
                <option value={classes._id}>{classes?.className}</option>
              ))} */}
          </select>
        </div>
      </div>

      <div className="chapter-table-container">
        <h5>All Chapters</h5>
        <table className="chapter-table">
          <thead>
            <tr>
              <th> Class</th>
              <th>Subjects Name</th>
              <th>Chapter Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data rows */}
            <tr>
              <td>Chapter 1</td>
              <td>4</td>
              <td>25</td>
              <td className="table-action-icons">
                <i className="fa-solid fa-file-pen"></i>
                <i className="fa-solid fa-trash-can"></i>
              </td>
            </tr>
            <tr>
              <td>Chapter 2</td>
              <td>5</td>
              <td>30</td>
              <td className="table-action-icons">
                <i className="fa-solid fa-file-pen"></i>
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

export default SchoolAllChapter;
