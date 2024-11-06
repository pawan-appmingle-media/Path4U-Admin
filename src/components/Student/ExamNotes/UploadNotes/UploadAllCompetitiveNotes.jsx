import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation
import "./UploadAllCompetitiveNotes.css"; // Import the CSS file

const UploadAllCompititiveNotes = () => {
  const [language, setLanguage] = useState("");
  const [examCategories, setExamCategories] = useState([]);
  const [examCategoryId, setExamCategoryId] = useState("");
  const [competitiveSubjects, setCompetitiveSubjects] = useState([]);
  const [competitiveSubjectId, setCompetitiveSubjectId] = useState("");
  const [compititiveNotes, setCompititiveNotes] = useState([]);

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
  }, [API_BASE_URL]);

  useEffect(() => {
    if (examCategoryId) {
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
    }
  }, [examCategoryId, API_BASE_URL]);

  const handleAddNewNote = () => {
    navigate("/upload-notes/upload-add-competitive-notes");
  };

  const handleViewAllNotes = () => {
    navigate("/upload-notes/upload-all-competitive-notes");
  };
  const handleGoBack = () => {
    navigate("/upload-notes/upload-all-notes");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (competitiveSubjectId && language) {
      axios
        .get(
          `${API_BASE_URL}/notes?competitionSubjectId=${competitiveSubjectId}&language=${language}`
        )
        .then((result) => {
          const { data } = result.data;
          setCompititiveNotes(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div id="allcompititivenotes-inner-wrapper">
      <BiArrowBack
        onClick={handleGoBack}
        className="left-arrow-icon mt-3"
        style={{
          cursor: "pointer",
          marginLeft: "10px",
          fontSize: "25px",
          color: "#000", // Customize the color as needed
        }}
      />
      <div className="allcompititivenotes-header-div">
        <h5>All Upload Competitive Notes</h5>
        <div className="allcompititivenotes-header-btns">
          <button
            className="add-compititive-note-btn"
            onClick={handleAddNewNote}
          >
            + Upload Notes
          </button>
          <button
            className="all-compititive-notes-btn"
            onClick={handleViewAllNotes}
          >
            All Notes
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="competitive-note-detail-form">
        <div className="new-chapter-form-group">
          <label className="new-chapter-label">Exam Category</label>
          <select
            className="new-chapter-dropdown"
            value={examCategoryId}
            onChange={(e) => setExamCategoryId(e.target.value)}
            required
          >
            <option value="">-Select Category-</option>
            {examCategories.map((examCategory, idx) => (
              <option key={idx} value={examCategory._id}>
                {examCategory.examCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="new-chapter-form-group">
          <label className="new-chapter-label">Subject Name</label>
          <select
            className="new-chapter-dropdown"
            value={competitiveSubjectId}
            onChange={(e) => setCompetitiveSubjectId(e.target.value)}
            required
          >
            <option value="">-Select Subject-</option>
            {competitiveSubjects.map((competitiveSubject, idx) => (
              <option key={idx} value={competitiveSubject._id}>
                {competitiveSubject.subjectName}
              </option>
            ))}
          </select>
        </div>

        <div className="new-chapter-form-group">
          <label className="new-chapter-label">Select Language</label>
          <select
            className="new-chapter-dropdown"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            required
          >
            <option value="">-Select Language-</option>
            <option value="hindi">Hindi</option>
            <option value="english">English</option>
          </select>
        </div>
        <div className="form1-btns">
          <button className="btn-save">Search Notes</button>
        </div>
      </form>

      <div className="allcompititivenotes-table-container">
        <h5>All Competitive Notes</h5>
        <table className="allcompititivenotes-table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Notes Title</th>
              <th>Notes File</th>
              <th>Language</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {compititiveNotes.map((compititiveNote, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{compititiveNote.noteTitle}</td>
                <td>
                  <Link
                    to={`${API_BASE_URL}/uploads/${compititiveNote.noteFile}`}
                    target="_blank"
                  >
                    {compititiveNote.noteFile}
                  </Link>
                </td>
                <td>{compititiveNote.language}</td>
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

export default UploadAllCompititiveNotes;
