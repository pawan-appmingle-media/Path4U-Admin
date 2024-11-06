import axios from "axios";
import { useEffect, useState } from "react";
import "./UploadExamFilter.css";

const UploadExamFilter = ({ setSubjectId, subjectId }) => {
  const [schoolClassName, setSchoolClassName] = useState([]);
  const [reference, setReference] = useState("");
  const [allSubjects, setAllSubjects] = useState([]);

  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/classes`)
      .then((resp) => {
        const { data } = resp.data;
        console.log(data);
        setSchoolClassName(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/subjects/?reference=${reference}`)
      .then((result) => {
        const { data } = result.data;
        console.log(data);
        setAllSubjects(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reference]);

  const heandleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="school-filter-main-div">
        <form onSubmit={heandleSearch} className="container">
          <div className="school-filter-fields-container">
            {/* Class Dropdown */}
            <div className="school-filter-class-drop">
              <select
                id="classDropdown"
                className="form-select school-fields-bg-color"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
              >
                <option value="">-Select Class-</option>
                {schoolClassName &&
                  schoolClassName.map((classes) => (
                    <option value={classes._id} key={classes._id}>
                      {classes?.className}
                    </option>
                  ))}
              </select>
            </div>

            {/* Subject Dropdown */}
            <div className="school-filter-subject-drop">
              <select
                id="subjectDropdown"
                className="form-select school-fields-bg-color"
                value={subjectId}
                onChange={(e) => setSubjectId(e.target.value)}
              >
                <option value="">-Select Subject-</option>
                {allSubjects &&
                  allSubjects.map((subjects) => (
                    <option value={subjects._id} key={subjects._id}>
                      {subjects?.subjectName}
                    </option>
                  ))}
              </select>
            </div>

            {/* Submit Button */}
            {/* <div className="col-md-2 d-flex justify-content-end">
              <button type="submit" className="school-filter-submit-btn">
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
