import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation
import "./AllSchoolNotes.css"; // Import the CSS file

const AllSchoolNotes = () => {
  const [schoolClassName, setSchoolClassName] = useState([]);
  const [schoolClassNameId, setSchoolClassNameId] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [subjectId, setSubjectId] = useState("");
  const [language, setLanguage] = useState("");
  const [schoolNotes, setSchoolNotes] = useState([]);
  const navigate = useNavigate();
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  // Fetch the class names
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/classes`)
      .then((resp) => {
        const { data } = resp.data;
        setSchoolClassName(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Fetch subjects based on selected class name
  useEffect(() => {
    if (schoolClassNameId) {
      axios
        .get(`${API_BASE_URL}/subjects/?reference=${schoolClassNameId}`)
        .then((result) => {
          const { data } = result.data;
          setSubjects(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [schoolClassNameId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (subjectId && language) {
      axios
        .get(
          `${API_BASE_URL}/notes?schoolSubjectId=${subjectId}&language=${language}`
        )
        .then((result) => {
          const { data } = result.data;
          setSchoolNotes(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleAddNewNote = () => {
    navigate("/upload-notes/upload-school-notes");
  };

  const handleViewAllNotes = () => {
    navigate("/upload-notes/all-school-notes");
  };
  const handleGoBack = () => {
    navigate("/upload-notes/upload-all-notes");
  };

  return (
    <div id="allschoolnotes-inner-wrapper">
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

      <div className="allschoolnotes-header-div">
        <h5>All School Notes</h5>
        <div className="allschoolnotes-header-btns">
          <button className="add-note-btn" onClick={handleAddNewNote}>
            + Upload Notes
          </button>
          <button className="all-notes-btn" onClick={handleViewAllNotes}>
            All Notes
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="note-detail-form">
        <div className="input-group">
          <div style={{ paddingBottom: "10px" }}>
            <label className="label">Class Name</label>
          </div>
          <select
            className="select-dropdown"
            value={schoolClassNameId}
            onChange={(e) => setSchoolClassNameId(e.target.value)}
            required
          >
            <option value="">-Select Class-</option>
            {schoolClassName &&
              schoolClassName.map((classes) => (
                <option value={classes._id} key={classes._id}>
                  {classes?.className}
                </option>
              ))}
          </select>
        </div>

        <div className="new-chapter-form-group">
          <label className="new-chapter-label">Subject Name</label>
          <select
            className="new-chapter-dropdown"
            value={subjectId}
            onChange={(e) => setSubjectId(e.target.value)}
            required
          >
            <option value="">-Select Subject-</option>
            {subjects.map((subject, idx) => (
              <option key={idx} value={subject._id}>
                {subject.subjectName}
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

      <div className="allschoolnotes-table-container">
        <h5>All School Notes</h5>
        <table className="allschoolnotes-table">
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
            {schoolNotes.map((schoolNote, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{schoolNote.noteTitle}</td>
                <td>
                  <Link
                    to={`${API_BASE_URL}/uploads/${schoolNote.noteFile}`}
                    target="_blank"
                  >
                    {schoolNote.noteFile}
                  </Link>
                </td>
                <td>{schoolNote.language}</td>
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

export default AllSchoolNotes;
