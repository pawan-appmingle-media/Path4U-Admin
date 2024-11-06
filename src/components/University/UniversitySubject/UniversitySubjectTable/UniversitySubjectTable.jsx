import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UniversitySubjectTable.css";

const UniversitySubjectTable = () => {
  const [universities, setUniversities] = useState([]);
  const [universityId, setUniversityId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [courses, setCourses] = useState([]);
  const [semesterId, setSemesterId] = useState("");
  const [semesters, setSemesters] = useState([]);

  const [universitySubjects, setUniversitySubjects] = useState([]);
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

  const getSubject = () => {
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
  };

  useEffect(() => {
    getSubject();
  }, [courseId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getSubject();
  };

  return (
    <>
      <div id="college-all-course-inner-main-wrapper">
        <div className="course-header-with-btns-table-page">
          <h5>All Subject</h5>

          <div className="college-all-course-nav-btns-table">
            <Link to={"/college-subject"}>
              <button className="college-add-course-add-btn-table-page">
                + Add New Subject
              </button>
            </Link>
            <Link to={"/college-all-subject"}>
              <button className="college-all-course-btn-table-page">
                All Subject
              </button>
            </Link>
          </div>
        </div>

        <div className="form-main-container">
          <h4 className="college-course-detail">Subject</h4>
          <form onSubmit={handleSubmit} className="college-course-detail-form">
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
            <div className="college-course-form-btns">
              <button className="btn-search" type="submit">
                Serch Subject
              </button>
            </div>
          </form>
        </div>

        {/* table */}
        <div className="headertable">
          <h5>All College Subject</h5>
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Subject Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {universitySubjects.map((universitySubject, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{universitySubject.subjectName}</td>
                  <td>
                    <i class="fa-solid fa-file-pen"></i>
                    <i class="fa-solid fa-trash-can"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* headertable  */}
      </div>
      {/* college-all-course-inner-main-wrapper  */}
    </>
  );
};

export default UniversitySubjectTable;
