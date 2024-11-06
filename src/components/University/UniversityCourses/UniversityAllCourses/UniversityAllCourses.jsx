import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UniversityAllCourses.css";

const UniversityAllCourses = () => {
  let navigator = useNavigate();

  const [universities, setUniversities] = useState([]);
  const [universityId, setUniversityId] = useState("");
  const [courseName, setCourseName] = useState([]);

  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  useEffect(() => {
    // Fetch universities list from API
    axios
      .get(`${API_BASE_URL}/universities`)
      .then((response) => {
        const universitiesData = response.data?.data || [];
        setUniversities(universitiesData);
      })
      .catch((error) => console.log(error));
  }, [API_BASE_URL]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/all-courses/${universityId}`)
      .then((response) => {
        console.log(response);

        const courseData = response.data?.data || [];
        setCourseName(courseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [universityId]);

  const handleAddCourseNav = () => {
    navigator("/college-add-course");
  };

  const handleAllCourseNav = () => {
    navigator("/college-all-courses");
  };

  return (
    <>
      <div id="college-all-course-inner-main-wrapper">
        <div className="course-header-with-btns-table-page">
          <h5>Course</h5>

          <div className="college-all-course-nav-btns-table">
            <Link to={"/college-add-course"}>
              <button
                className="college-add-course-add-btn-table-page"
                onClick={handleAddCourseNav}
              >
                + Add New Course
              </button>
            </Link>
            <Link to={"/college-all-courses"}>
              <button
                className="college-all-course-btn-table-page"
                onClick={handleAllCourseNav}
              >
                All Courses
              </button>
            </Link>
          </div>
        </div>

        <div className="new-chapter-form-group">
          <label className="new-chapter-label">University Name</label>
          <select
            className="new-chapter-dropdown"
            value={universityId}
            onChange={(e) => setUniversityId(e.target.value)}
            required
          >
            <option value="">-Select University-</option>
            {universities.map((university) => (
              <option key={university._id} value={university._id}>
                {university.universityName}
              </option>
            ))}
          </select>
        </div>

        {/* table */}
        <div className="college-all-courses-table">
          <h5>All Courses</h5>
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Courses</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courseName.map((course, idx) => (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{course.courseName}</td>
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

export default UniversityAllCourses;
