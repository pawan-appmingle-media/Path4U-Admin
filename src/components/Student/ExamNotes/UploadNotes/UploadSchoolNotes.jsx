import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./UploadSchoolNotes.css";

const SchoolNotes = () => {
  const [schoolClassName, setSchoolClassName] = useState([]);
  const [schoolClassNameId, setSchoolClassNameId] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [subjectId, setSubjectId] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [file, setFile] = useState(null); // Capture the actual file object
  const [language, setLanguage] = useState("");

  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;
  const navigate = useNavigate();

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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create FormData to handle file and other data
    const formData = new FormData();
    formData.append("noteTitle", noteTitle);
    formData.append("language", language);
    formData.append("schoolSubjectId", subjectId); // Set as subjectId
    formData.append("noteFile", file); // Append file

    // POST request to /notes
    axios
      .post(`${API_BASE_URL}/notes`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file upload
        },
      })
      .then((response) => {
        alert("Note uploaded successfully!");
        navigate("/upload-notes/all-school-notes"); // Navigate after success
      })
      .catch((error) => {
        console.error("Error uploading note:", error);
        alert("There was an error uploading the note.");
      });
  };

  // Navigation handlers
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
    <>
      <div id="exam-school-notes-inner-wrapper">
        <div className="main-header">
          <BiArrowBack
            onClick={handleGoBack}
            className="left-arrow-icon"
            style={{
              cursor: "pointer",
              display: "flex",
              fontSize: "25px",
              color: "#000",
            }}
          />
          <div className="exam-header-div">
            <h5>School Notes</h5>
            <div className="exam-btn-group">
              <button className="addNewNoteBtn" onClick={handleAddNewNote}>
                + Upload Notes
              </button>
              <button className="viewAllNotesBtn" onClick={handleViewAllNotes}>
                All Notes
              </button>
            </div>
          </div>

          <div className="form-container" id="form">
            <h4 className="note-detail">Note Details</h4>
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

              <div className="input-group">
                <label className="label">Note Title</label>
                <input
                  type="text"
                  value={noteTitle}
                  onChange={(e) => setNoteTitle(e.target.value)}
                  placeholder="Enter Note Title"
                  required
                />
              </div>

              <div className="input-group">
                <div style={{ paddingBottom: "10px" }}>
                  <label className="label">Language</label>
                  <input
                    style={{ marginLeft: "10px" }}
                    type="radio"
                    value="hindi"
                    checked={language === "hindi"}
                    onChange={(e) => setLanguage(e.target.value)}
                    required
                  />
                  Hindi
                  <input
                    style={{ marginLeft: "10px" }}
                    type="radio"
                    value="english"
                    checked={language === "english"}
                    onChange={(e) => setLanguage(e.target.value)}
                    required
                  />
                  English
                </div>
              </div>

              <div className="input-group">
                <div style={{ paddingBottom: "10px" }}>
                  <label className="label">Upload File (pdf format)</label>
                </div>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])} // Capture the file object
                  accept=".pdf" // Restrict file type to PDF
                  required
                />
              </div>

              <div className="form1-btns">
                <button className="btn-save">Save</button>
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={handleGoBack}
                >
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

export default SchoolNotes;
