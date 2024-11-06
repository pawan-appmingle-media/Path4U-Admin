import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./UploadAddCollegeNotes.css";

const CollegeNotes = () => {
  const [universities, setUniversities] = useState([]);
  const [universityId, setUniversityId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [courses, setCourses] = useState([]);
  const [semesterId, setSemesterId] = useState("");
  const [semesters, setSemesters] = useState([]);
  const [universitySubjects, setUniversitySubjects] = useState([]);
  const [universitySubjectId, setUniversitySubjectsId] = useState("");

  const [noteTitle, setNoteTitle] = useState("");
  const [file, setFile] = useState(null); // Capture the actual file object
  const [language, setLanguage] = useState("");

  const navigate = useNavigate();
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/universities`)
      .then((response) => {
        const universitiesData = response.data?.data || [];
        setUniversities(universitiesData);
      })
      .catch((error) => console.log(error));
  }, [API_BASE_URL]);

  useEffect(() => {
    if (universityId) {
      axios
        .get(`${API_BASE_URL}/all-courses/${universityId}`)
        .then((response) => {
          const coursesData = response.data?.data || [];
          setCourses(coursesData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [universityId]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/semesters`)
      .then((response) => {
        const semesterData = response.data?.data || [];
        setSemesters(semesterData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (courseId) {
      axios
        .get(
          `${API_BASE_URL}/college-subjects?courseId=${courseId}&semesterId=${semesterId}`
        )
        .then((response) => {
          const UniversitySubjects = response.data?.data || [];
          setUniversitySubjects(UniversitySubjects);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [courseId, semesterId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to include file and other form fields
    const formData = new FormData();
    formData.append("noteFile", file); // Append the file object
    formData.append("language", language);
    formData.append("noteTitle", noteTitle);
    formData.append("universitySubjectId", universitySubjectId);

    // Make a POST request to /notes
    axios
      .post(`${API_BASE_URL}/notes`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      })
      .then((response) => {
        console.log("Note uploaded successfully:", response.data);
        // Handle success (e.g., navigate to another page or show a success message)
      })
      .catch((error) => {
        console.error("Error uploading note:", error);
        // Handle error (e.g., show error message to the user)
      });
  };

  const handleAddNewNote = () => {
    navigate("/upload-notes/upload-add-university-notes");
  };

  const handleViewAllNotes = () => {
    navigate("/upload-notes/upload-all-university-notes");
  };
  const handleGoBack = () => {
    navigate("/upload-notes/upload-all-notes");
  };

  return (
    <>
      <div id="exam-college-notes-inner-wrapper">
        <div className="main-header">
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
          <div className="exam-header-div">
            <h5>College Notes</h5>
            <div className="exam-btn-group">
              <button className="addNewNoteBtn" onClick={handleAddNewNote}>
                + Upload Notes
              </button>
              <button className="viewAllNotesBtn" onClick={handleViewAllNotes}>
                All Notes
              </button>
            </div>
          </div>

          <div className="allform-container" id="form">
            <h4 className="note-detail">Note Details</h4>
            <form onSubmit={handleSubmit} className="note-detail-form">
              <div className="new-chapter-form-group">
                <label className="new-chapter-label">Select University</label>
                <select
                  className="new-chapter-dropdown"
                  value={universityId}
                  onChange={(e) => setUniversityId(e.target.value)}
                  required
                >
                  <option value="">-Select University-</option>
                  {universities.map((universitie, idx) => (
                    <option key={idx} value={universitie._id}>
                      {universitie.universityName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="new-chapter-form-group">
                <label className="new-chapter-label">Course Name</label>
                <select
                  className="new-chapter-dropdown"
                  value={courseId}
                  onChange={(e) => setCourseId(e.target.value)}
                  required
                >
                  <option value="">-Select Course-</option>
                  {courses.map((course, idx) => (
                    <option key={idx} value={course._id}>
                      {course.courseName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="new-chapter-form-group">
                <label className="new-chapter-label">Semester</label>
                <select
                  className="new-chapter-dropdown"
                  value={semesterId}
                  onChange={(e) => setSemesterId(e.target.value)}
                  required
                >
                  <option value="">-Select Semester-</option>
                  {semesters.map((semester, idx) => (
                    <option key={idx} value={semester._id}>
                      {semester.semesterName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="new-chapter-form-group">
                <label className="new-chapter-label">Subject</label>
                <select
                  className="new-chapter-dropdown"
                  value={universitySubjectId}
                  onChange={(e) => setUniversitySubjectsId(e.target.value)}
                  required
                >
                  <option value="">-Select Subject-</option>
                  {universitySubjects.map((universitySubject, idx) => (
                    <option key={idx} value={universitySubject._id}>
                      {universitySubject.subjectName}
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

              <div className="form2-btns">
                <button className="btn-save" type="submit">
                  Save
                </button>
                <button className="btn-cancel" type="button">
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

export default CollegeNotes;
