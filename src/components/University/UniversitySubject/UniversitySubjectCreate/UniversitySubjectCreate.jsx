import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UniversitySubjectCreate.css";

const UniversitySubjectCreate = () => {
  const [subjectName, setSubjectName] = useState("");
  const [universities, setUniversities] = useState([]);
  const [universityId, setUniversityId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [courses, setCourses] = useState([]);
  const [semesterId, setSemesterId] = useState("");
  const [semesters, setSemesters] = useState([]);
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

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
    axios
      .get(`${API_BASE_URL}/universities`)
      .then((response) => {
        const universitiesData = response.data?.data || [];
        setUniversities(universitiesData);
      })
      .catch((error) => console.log(error));
  }, [API_BASE_URL]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      subjectName,
      semesterId,
      courseId,
    };

    axios
      .post(`${API_BASE_URL}/college-subject`, payload)
      .then((response) => {
        console.log("Subject created successfully:", response.data);
        alert("Subject created successfully");
        setSubjectName("");
        setUniversityId("");
        setCourseId("");
        setSemesterId("");
      })
      .catch((error) => {
        console.error("Error creating subject:", error);
        alert("Error creating subject");
      });
  };

  return (
    <>
      <div id="add-college-course-wrapper">
        <div className="course-header-with-btns">
          <h5>Subject</h5>

          <div className="college-course-nav-btns">
            <Link to={"/college-subject"}>
              <button className="college-add-course-add-btn">
                + Add New Subject
              </button>
            </Link>
            <Link to={"/college-all-subject"}>
              <button className="college-all-course-btn">All Subject</button>
            </Link>
          </div>
        </div>

        <div className="add-college-course-inner-main-wrapper">
          <div className="form-main-container">
            <h4 className="college-course-detail">Subject</h4>
            <form
              onSubmit={handleSubmit}
              className="college-course-detail-form"
            >
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
              <div className="input-group">
                <label className="label">Subject Name</label>
                <input
                  style={{
                    marginLeft: "1px",
                    borderBottomLeftRadius: "5px",
                    borderTopLeftRadius: "5px",
                  }}
                  type="text"
                  value={subjectName}
                  onChange={(e) => setSubjectName(e.target.value)}
                  placeholder="Enter Subject Name..."
                  required
                />
              </div>

              <div className="college-course-form-btns">
                <button className="btn-search" type="submit">
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

export default UniversitySubjectCreate;
