import axios from "axios";
import { useEffect, useState } from "react";
import "./CUploadExamFilter.css";

const UploadExamFilter = ({
  competitiveSubjectId,
  setCompetitiveSubjectId,
}) => {
  const [examCategories, setExamCategories] = useState([]);
  const [examCategoryId, setExamCategoryId] = useState("");
  const [competitiveSubjects, setCompetitiveSubjects] = useState([]);
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/competitions`)
      .then((response) => {
        const examCategoriesData = response.data?.data || [];
        setExamCategories(examCategoriesData);
      })
      .catch((error) => console.log(error));
  }, []);

  const getSubjects = () => {
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
  };
  useEffect(() => {
    getSubjects();
  }, [examCategoryId]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
  return (
    <>
      <div className="comp-exam-filter-main-div">
        <form onSubmit={handleSubmit} className="container">
          <div className="ce-filter-fields-container">
            {/* Class Dropdown */}
            <div className="comp-exam-filter-class-drop">
              <select
                id="classDropdown"
                className="form-select comp-exam-se-fields-bg-color"
                value={examCategoryId}
                onChange={(e) => setExamCategoryId(e.target.value)}
              >
                <option value="">Select Exam Category</option>
                {examCategories.map((category, idx) => (
                  <option key={idx} value={category._id}>
                    {category.examCategory}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject Dropdown */}
            <div className="comp-exam-filter-subject-drop">
              <select
                id="subjectDropdown"
                className="form-select comp-exam-se-fields-bg-color"
                value={competitiveSubjectId}
                onChange={(e) => setCompetitiveSubjectId(e.target.value)}
              >
                <option value="">Select Subject</option>
                {competitiveSubjects.map((competitiveSubject, idx) => (
                  <option key={idx} value={competitiveSubject._id}>
                    {competitiveSubject.subjectName}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            {/* <div className="col-md-2 d-flex justify-content-end">
              <button type="submit" className="comp-exam-filter-submit-btn">
                Submit
              </button>
            </div> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadExamFilter;
