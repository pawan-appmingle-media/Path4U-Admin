import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import "./UploadAllCollegeNotes.css";

const AllCollegeNotes = () => {
  const [universities, setUniversities] = useState([]);
  const [universityId, setUniversityId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [courses, setCourses] = useState([]);
  const [semesterId, setSemesterId] = useState("");
  const [semesters, setSemesters] = useState([]);
  const [universitySubjects, setUniversitySubjects] = useState([]);
  const [universitySubjectId, setUniversitySubjectsId] = useState("");
  const [language, setLanguage] = useState("");
  const [universityNotes, setUniversityNotes] = useState([]);
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  const navigate = useNavigate();

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

    if (universitySubjectId && language) {
      axios
        .get(
          `${API_BASE_URL}/notes?universitySubjectId=${universitySubjectId}&language=${language}`
        )
        .then((result) => {
          const { data } = result.data;
          setUniversityNotes(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
    <div id="allcollegenotes-inner-wrapper">
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
      <div className="allcollegenotes-header-div">
        <h5>All College Notes</h5>

        <div className="allcollegenotes-header-btns">
          <button className="add-college-note-btn" onClick={handleAddNewNote}>
            + Upload Notes
          </button>
          <button
            className="all-college-notes-btn"
            onClick={handleViewAllNotes}
          >
            All Notes
          </button>
        </div>
      </div>

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

      <div className="allcollegenotes-table-container">
        <h5>All College Notes</h5>
        <table className="allcollegenotes-table">
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
            {universityNotes.map((universityNote, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{universityNote.noteTitle}</td>
                <td>
                  <Link
                    to={`${API_BASE_URL}/uploads/${universityNote.noteFile}`}
                    target="_blank"
                  >
                    {universityNote.noteFile}
                  </Link>
                </td>
                <td>{universityNote.language}</td>
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

export default AllCollegeNotes;
