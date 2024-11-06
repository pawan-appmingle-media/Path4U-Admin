import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CompititiveNotes.css";

const CompititiveNotes = () => {
  const [className, setClassName] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [chapterName, setChapterName] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState(""); // State for language selection

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Class Name:", className);
    console.log("Subject Name:", subjectName);
    console.log("Chapter Name:", chapterName);
    console.log("Description:", description);
    console.log("Language:", language); // Log selected language
  };

  const handleAddNewNote = () => {
    navigate("/compititive-notes");
  };

  const handleViewAllNotes = () => {
    navigate("/compititive-all-notes");
  };

  return (
    <>
      <div id="exam-competitive-notes-inner-wrapper">
        <div className="competitive-main-header">
          <div className="competitive-header-div">
            <h5>Competitive Notes</h5>
            <div className="competitive-btn-group">
              <button
                className="addNewCompetitiveNoteBtn"
                onClick={handleAddNewNote}
              >
                + Add New Note
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
            <h4 className="competitive-note-detail">Note Details</h4>
            <form
              onSubmit={handleSubmit}
              className="competitive-note-detail-form"
            >
              <div className="competitive-input-group">
                <div style={{ paddingBottom: "10px" }}>
                  <label className="competitive-label">Class Name</label>
                </div>
                <select
                  style={{
                    marginLeft: "1px",
                    borderBottomLeftRadius: "5px",
                    borderTopLeftRadius: "5px",
                  }}
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                  required
                >
                  <option value="">Select Class</option>
                </select>
              </div>

              <div className="competitive-input-group">
                <div style={{ paddingBottom: "10px" }}>
                  <label className="competitive-label">Subject Name</label>
                </div>
                <select
                  style={{
                    marginLeft: "1px",
                    borderBottomLeftRadius: "5px",
                    borderTopLeftRadius: "5px",
                  }}
                  value={subjectName}
                  onChange={(e) => setSubjectName(e.target.value)}
                  required
                >
                  <option value="">Select Subject</option>
                </select>
              </div>

              <div className="competitive-input-group">
                <div style={{ paddingBottom: "10px" }}>
                  <label className="competitive-label">Chapter</label>
                </div>
                <select
                  style={{
                    marginLeft: "1px",
                    borderBottomLeftRadius: "5px",
                    borderTopLeftRadius: "5px",
                  }}
                  value={chapterName}
                  onChange={(e) => setChapterName(e.target.value)}
                  required
                >
                  <option value="">Select Chapter</option>
                </select>
              </div>

              {/* Radio buttons for language selection */}
              <div className="competitive-input-group">
                <div style={{ paddingBottom: "10px" }}>
                  <label className="competitive-label">Language</label>
                  <input
                    style={{
                      marginLeft: "10px",
                    }}
                    type="radio"
                    value="Hindi"
                    checked={language === "Hindi"}
                    onChange={(e) => setLanguage(e.target.value)}
                    required
                  />
                  Hindi
                  <input
                    style={{
                      marginLeft: "10px",
                    }}
                    type="radio"
                    value="English"
                    checked={language === "English"}
                    onChange={(e) => setLanguage(e.target.value)}
                    required
                  />
                  English
                </div>
              </div>

              <div className="competitive-input-group">
                <div style={{ paddingBottom: "10px" }}>
                  <label className="competitive-label">
                    Upload File (pdf format)
                  </label>
                </div>
                <input
                  style={{
                    marginLeft: "1px",
                    borderRadius: "5px",
                    border: "1px solid #c2c2c2",
                    width: "600px",
                  }}
                  type="file"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="competitive-form-btns">
                <button className="competitive-btn-save">Save</button>
                <button className="competitive-btn-cancel">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompititiveNotes;
