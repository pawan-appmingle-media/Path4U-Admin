import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi"; // Importing the back arrow icon from react-icons
import { useNavigate } from "react-router-dom";
import "./UploadAddCompetitiveNotes.css";

const UploadAddCompetitiveNotes = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [file, setFile] = useState(null); // Capture the actual file object
  const [language, setLanguage] = useState("");

  const [examCategories, setExamCategories] = useState([]);
  const [examCategoryId, setExamCategoryId] = useState("");
  const [competitiveSubjects, setCompetitiveSubjects] = useState([]);
  const [competitiveSubjectId, setCompetitiveSubjectId] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create FormData object to handle file upload and form fields
    const formData = new FormData();
    formData.append("noteFile", file); // Append the file
    formData.append("language", language);
    formData.append("noteTitle", noteTitle);
    formData.append("competitionSubjectId", competitiveSubjectId);

    // Make POST request to the server with form data
    axios
      .post(`${API_BASE_URL}/notes`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      })
      .then((response) => {
        alert("Note uploaded successfully");
        console.log("Note uploaded successfully:", response.data);
        // Handle success (e.g., navigate to another page or show success message)
      })
      .catch((error) => {
        console.error("Error uploading note:", error);
        alert("Error uploading note");
        // Handle error (e.g., show error message to the user)
      });
  };

  const handleAddNewNote = () => {
    navigate("/upload-notes/upload-add-competitive-notes");
  };

  const handleViewAllNotes = () => {
    navigate("/upload-notes/upload-all-competitive-notes");
  };

  const handleGoBack = () => {
    navigate("/upload-notes/upload-all-notes");
  };

  return (
    <>
      <div id="exam-competitive-notes-inner-wrapper">
        <div className="competitive-main-header">
          <BiArrowBack
            onClick={handleGoBack}
            className="left-arrow-icon"
            style={{
              cursor: "pointer",
              marginLeft: "10px",
              fontSize: "25px",
              color: "#000", // Customize the color as needed
            }}
          />
          <div className="competitive-header-div">
            <h5>Upload Competitive Notes</h5>

            <div className="competitive-btn-group">
              <button
                className="addNewCompetitiveNoteBtn"
                onClick={handleAddNewNote}
              >
                + Upload Notes
              </button>
              <button
                className="viewAllCompetitiveNotesBtn"
                onClick={handleViewAllNotes}
              >
                All Notes
              </button>
            </div>
          </div>

          <div className="competitive-form-container" id="form">
            <h4 className="competitive-note-detail">Upload Files</h4>
            <form
              onSubmit={handleSubmit}
              className="competitive-note-detail-form"
            >
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

              <div className="competitive-form-btns">
                <button className="competitive-btn-save" type="submit">
                  Save
                </button>
                <button className="competitive-btn-cancel" type="button">
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

export default UploadAddCompetitiveNotes;
