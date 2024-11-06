import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UniversityCourse.css";

const UniversityCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [universities, setUniversities] = useState([]);
  const [universityId, setUniversityId] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (courseName && universityId) {
      const payload = {
        courseName,
        universityId,
      };

      axios
        .post(`${API_BASE_URL}/courses`, payload)
        .then((response) => {
          console.log("Course created successfully:", response.data);
          alert("Course created successfully");
        })
        .catch((error) => {
          console.error("Error creating course:", error);
          alert("Error creating course");
        });
    } else {
      console.log("Please fill in all required fields.");
    }
  };

  return (
    <>
      <div id="add-college-course-wrapper">
        <div className="course-header-with-btns">
          <h5>Course</h5>

          <div className="college-course-nav-btns">
            <Link to={"/college-add-course"}>
              <button className="college-add-course-add-btn">
                + Add New Course
              </button>
            </Link>
            <Link to={"/college-all-courses"}>
              <button className="college-all-course-btn">All Courses</button>
            </Link>
          </div>
        </div>

        <div className="add-college-course-inner-main-wrapper">
          <div className="form-main-container">
            <h4 className="college-course-detail">Course Details</h4>
            <form
              onSubmit={handleSubmit}
              className="college-course-detail-form"
            >
              <div className="input-group">
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

              <div className="input-group">
                <label className="label">Course Name</label>
                <input
                  style={{
                    marginLeft: "1px",
                    borderBottomLeftRadius: "5px",
                    borderTopLeftRadius: "5px",
                  }}
                  type="text"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  placeholder="Enter university course name"
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

export default UniversityCourse;
