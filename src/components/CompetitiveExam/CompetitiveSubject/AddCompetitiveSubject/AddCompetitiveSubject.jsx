import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddCompetitiveSubject.css";

const AddCompetitiveSubject = () => {
  const [subjectName, setSubjectName] = useState("");
  const [examCategories, setExamCategories] = useState([]);
  const [examCategoryId, setExamCategoryId] = useState("");
  const [icon, setIcon] = useState(null); // Handling file upload

  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;
  const navigate = useNavigate();

  // Fetch exam categories when component mounts
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/competitions`)
      .then((response) => {
        const examCategoriesData = response.data?.data || [];
        setExamCategories(examCategoriesData);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare form data for the POST request
    const formData = new FormData();
    formData.append("subjectName", subjectName);
    formData.append("reference", examCategoryId); // competitionId as reference
    formData.append("category", "competitive"); // default category
    if (icon) {
      formData.append("icon", icon); // Add file only if selected
    }

    // POST request to /subjects endpoint
    axios
      .post(`${API_BASE_URL}/subjects`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file upload
        },
      })
      .then((response) => {
        alert("Subject added successfully!");
        navigate("/ce-all-subject"); // Redirect after successful submission
      })
      .catch((error) => {
        console.error("Error adding subject:", error);
        alert("There was an error adding the subject.");
      });
  };

  const handleAddNewExam = () => {
    navigate("/ce-add-subject");
  };

  const handleViewAllExams = () => {
    navigate("/ce-all-subject");
  };

  return (
    <>
      <div className="competitive-subject-wrapper">
        <div className="competitive-subject-header-container">
          <div className="competitive-subject-header-content">
            <h5>Competitive Exam Subject</h5>
            <div className="competitive-subject-buttons-container">
              <button
                className="competitive-subject-add-btn"
                onClick={handleAddNewExam}
              >
                + Add New Subject
              </button>
              <button
                className="competitive-subject-view-btn"
                onClick={handleViewAllExams}
              >
                All Subject
              </button>
            </div>
          </div>

          <div className="competitive-subject-form-container">
            <h4 className="competitive-subject-detail-header">
              Competitive Subject
            </h4>
            <form onSubmit={handleSubmit} className="add-exam-category-form">
              <div className="new-chapter-form-group">
                <label className="new-chapter-label">
                  Select Exam Category
                </label>
                <select
                  className="new-chapter-dropdown"
                  value={examCategoryId}
                  onChange={(e) => setExamCategoryId(e.target.value)}
                  required
                >
                  <option value="">-Select Exam Category-</option>
                  {examCategories.map((category, idx) => (
                    <option key={idx} value={category._id}>
                      {category.examCategory}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-group">
                <label className="label">Subject Name</label>
                <input
                  type="text"
                  value={subjectName}
                  onChange={(e) => setSubjectName(e.target.value)}
                  placeholder="Enter Subject Name"
                  required
                />
              </div>

              <div className="input-group">
                <div style={{ paddingBottom: "10px" }}>
                  <label className="label">Upload Icon</label>
                </div>
                <input
                  type="file"
                  id="subject-upload-icon"
                  onChange={(e) => {
                    const file = e.target.files[0]; // Access the first file
                    if (file) {
                      setIcon(file); // Store the file object
                    }
                  }}
                  accept="image/*" // Accept only image files
                  required
                />
              </div>

              <div className="add-exam-category-exam-form-buttons">
                <button type="submit" className="add-exam-category-btn-submit">
                  Save
                </button>
                <button
                  type="button"
                  className="add-exam-category-btn-cancel"
                  onClick={() => navigate("/ce-all-subject")}
                >
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

export default AddCompetitiveSubject;
