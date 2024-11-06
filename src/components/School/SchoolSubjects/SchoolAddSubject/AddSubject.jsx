import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddSubject.css";

const AddSubject = () => {
  const [schoolClassName, setSchoolClassName] = useState("");
  const [schoolSubjectName, setSchoolSubjectName] = useState("");
  const [reference, setReference] = useState("");
  const [subjectUploadIcon, setSubjectUploadIcon] = useState(null);
  // const [subjectDescription, setSubjectDescription] = useState("");

  const navigate = useNavigate();

  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  const resetForm = () => {
    setSchoolClassName("");
    setSchoolSubjectName("");
    setReference("");
    setSubjectUploadIcon(null);
    document.getElementById("subject-upload-icon").value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("subjectName", schoolSubjectName);
    formData.append("icon", subjectUploadIcon); // Ensure this is the File object
    formData.append("reference", reference);
    formData.append("category", "school");
    axios
      .post(`${API_BASE_URL}/subjects`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((resp) => {
        console.log(resp.data);

        alert("Subject Add Successfully");
        resetForm();
        getClasses();
      })
      .catch((err) => {
        alert("Subject Error", err);
        console.log("Error", err);
      });
    console.log(reference, "---->");
  };

  const handleAddNewSubject = () => {
    navigate("/school-add-subject");
  };

  const handleViewAllSubjects = () => {
    navigate("/school-all-subject");
  };

  // const API_BASE_URL = process.env.REACT_APP_API_BASEURL;
  // CLASSES DATA GET FUN AXIOS --
  const getClasses = () => {
    axios
      .get(`${API_BASE_URL}/classes`)
      .then((resp) => {
        const { data } = resp.data;

        setSchoolClassName(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("---->", schoolClassName);

  useEffect(() => {
    getClasses();
  }, []);

  return (
    <>
      <div id="add-subject-inner-wrapper">
        <div className="superheader">
          <div className="subjectHeaderdiv">
            <h5>Subject</h5>
            <div className="subjectdiv2">
              <button
                className="handleNewSubject"
                onClick={handleAddNewSubject}
              >
                + Add New Subject
              </button>
              <button className="allSubjects" onClick={handleViewAllSubjects}>
                All Subjects
              </button>
            </div>
          </div>

          <div className="form-sub-container mt-4" id="form">
            <h4 className="subject-detail">Subject Details</h4>
            <form
              className="subject-detail-form"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div className="input-group">
                <div style={{ paddingBottom: "10px" }}>
                  <label className="label">Class Name</label>
                </div>
                <select
                  className="select-dropdown"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  required
                >
                  <option value="">-Select Class</option>
                  {schoolClassName &&
                    schoolClassName.map((classes) => (
                      <option value={classes._id} key={classes._id}>
                        {classes?.className}
                      </option>
                    ))}
                </select>
              </div>

              <div className="input-group">
                <div style={{ paddingBottom: "10px" }}>
                  <label className="label">Subject</label>
                </div>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  onChange={(e) => setSchoolSubjectName(e.target.value)}
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
                  multiple={false}
                  onChange={(e) => {
                    const file = e.target.files[0]; // Access the first file
                    console.log(file);

                    if (file) {
                      setSubjectUploadIcon(file); // Store the file object, not the value
                    }
                  }}
                />
              </div>

              <div className="school-subj-form-btns">
                <button
                  className="btn-search"
                  type="submit"
                  // onClick={handleSubmit}
                >
                  Save
                </button>
                <button className="btn-cancel">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSubject;
