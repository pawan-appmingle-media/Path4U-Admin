import axios from "axios";
import { useEffect, useState } from "react";
import "./UniUploadExamFilter.css";

const UploadExamFilter = ({ universitySubjectId, setUniversitySubjectId }) => {
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
  }, [courseId, semesterId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
  return (
    <>
      <div className="university-filter-main-div">
        <form onSubmit={handleSubmit} className="container">
          <div className="university-filter-fields-container">
            {/* University Dropdown */}
            <div className="university-filter-drop">
              <select
                id="universityDropdown"
                className="form-select university-fields-bg-color"
                value={universityId}
                onChange={(e) => setUniversityId(e.target.value)}
              >
                <option value="">-Select University-</option>
                {universities.map((universitie, idx) => (
                  <option key={idx} value={universitie._id}>
                    {universitie.universityName}
                  </option>
                ))}
              </select>
            </div>

            {/* Courses Dropdown */}
            <div className="university-filter-drop">
              <select
                id="courseDropdown"
                className="form-select university-fields-bg-color"
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
              >
                <option value="">-Select Course-</option>
                {courses.map((course, idx) => (
                  <option key={idx} value={course._id}>
                    {course.courseName}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject Dropdown */}
            <div className="university-filter-semester-drop">
              <select
                id="semesterDropdown"
                className="form-select university-fields-bg-color"
                value={semesterId}
                onChange={(e) => setSemesterId(e.target.value)}
              >
                <option value="">-Select Semester-</option>
                {semesters.map((semester, idx) => (
                  <option key={idx} value={semester._id}>
                    {semester.semesterName}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject Dropdown */}
            <div className="university-filter-subject-drop">
              <select
                id="subjectDropdown"
                className="form-select university-fields-bg-color"
                value={universitySubjectId}
                onChange={(e) => setUniversitySubjectId(e.target.value)}
              >
                <option value="">-Select Subject-</option>
                {universitySubjects.map((universitySubject, idx) => (
                  <option key={idx} value={universitySubject._id}>
                    {universitySubject.subjectName}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="col-md-2 d-flex justify-content-end">
              <button type="submit" className="university-filter-submit-btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadExamFilter;
