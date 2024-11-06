import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SchoolChapter.css"; // Updated CSS file name

const SchoolChapter = () => {
  const [classes, setClasses] = useState([]);
  const [classId, setClassId] = useState();
  const [subjects, setSubjects] = useState([]);
  const [subjectId, setSubjectId] = useState();
  const [chapter, setChapter] = useState();
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const chapterData = {
      subjectId,
      chapterName: chapter,
    };

    try {
      const response = await axios.post(
        `${API_BASE_URL}/chapters`,
        chapterData
      );
      console.log("Chapter added successfully:", response.data);

      // Navigate or show a success message if needed
      navigate("/school-all-chapter"); // Redirect to view all chapters after successful submission
    } catch (error) {
      console.error("Error adding chapter:", error);
    }
  };

  const handleAddNewChapter = () => {
    navigate("/school-add-chapter");
  };

  const handleViewAllChapters = () => {
    navigate("/school-all-chapter");
  };

  const handleCancel = () => {};

  // CLASSES DATA GET FUN AXIOS --
  const getClasses = () => {
    axios
      .get(`${API_BASE_URL}/classes`)
      .then((resp) => {
        const { data } = resp.data;
        setClasses(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getClasses();
  }, []);
  // console.log("----------->", classes);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/subjects/?reference=${classId}`)
      .then((result) => {
        const { data } = result.data;
        console.log(data);

        setSubjects(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [classId]);
  console.log(subjects, "----->");

  return (
    <>
      <div id="new-chapter-content-wrapper">
        <div className="new-chapter-header">
          <h5>Add Chapters</h5>
          <div className="new-chapter-buttons">
            <button
              className="new-chapter-add-btn"
              onClick={handleAddNewChapter}
            >
              + Add New Chapter
            </button>
            <button
              className="new-chapter-view-all-btn"
              onClick={handleViewAllChapters}
            >
              All Chapters
            </button>
          </div>
        </div>

        <div className="new-chapter-form-container" id="form">
          <h4 className="new-chapter-details-header">Chapter Details</h4>
          <form onSubmit={handleSubmit} className="new-chapter-form">
            <div className="new-chapter-form-group">
              <label className="new-chapter-label">
                <b>Class Name</b>
              </label>
              <select
                className="new-chapter-dropdown"
                value={classId}
                onChange={(e) => setClassId(e.target.value)}
                required
              >
                <option value="">-Select Class-</option>
                {classes &&
                  classes.map((classes) => (
                    <option value={classes._id}>{classes?.className}</option>
                  ))}
              </select>
            </div>

            <div className="new-chapter-form-group">
              <label className="new-chapter-label">
                <b>Subject Name</b>
              </label>
              <select
                className="new-chapter-dropdown"
                value={subjectId}
                onChange={(e) => setSubjectId(e.target.value)}
                required
              >
                <option value="">-Select Subject-</option>
                {subjects.map((subject, idx) => (
                  <option key={idx} value={subject._id}>
                    {subject.subjectName}
                  </option>
                ))}
                {/* Add your chapter options here */}
              </select>
            </div>

            <div className="new-chapter-form-group">
              <label className="new-chapter-label">
                <b>Chapter</b>
              </label>
              <input
                type="text"
                value={chapter}
                onChange={(e) => setChapter(e.target.value)}
                required
                className="new-chapter-description-input"
              />
            </div>

            <div className="new-chapter-form-buttons">
              <button type="submit" className="new-chapter-submit-btn">
                Save
              </button>
              <button
                type="button"
                className="new-chapter-cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SchoolChapter;
