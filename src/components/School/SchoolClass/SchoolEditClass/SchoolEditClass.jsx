import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./SchoolEditClass.css";

const SchoolEditClass = () => {
  const [schoolClassEdit, setSchoolClassEdit] = useState("");
  const { id } = useParams();

  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/classes/${id}`)
      .then((response) => {
        const { data } = response.data;
        // console.log(data.className)
        setSchoolClassEdit(data.className);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let handleEditSave = () => {
    axios
      .put(`${API_BASE_URL}/classes/${id}`, { className: schoolClassEdit })
      .then((resp) => {
        // alert("Data Updated Successfully")
        window.location.reload("/school-all-class");
      })
      .catch((err) => {
        alert("Error", err);
      });
    navigate("/school-all-class");
  };

  let navigate = useNavigate();

  const handleAddNewClass = () => {
    navigate("/school-add-class");
  };

  const handleViewAllClasses = () => {
    navigate("/school-all-class");
  };

  const handleEdit = (e) => {
    setSchoolClassEdit(e.target.value);
  };

  return (
    <>
      <div id="add-department-inner-wrapper">
        <div className="superheader">
          <div className="departmetHeaderdiv">
            <h5>Edit Class</h5>
            <div className="departmentdiv2">
              <button className="handlenewclass" onClick={handleAddNewClass}>
                + Add New Class
              </button>
              <button className="allclasses" onClick={handleViewAllClasses}>
                All Classes
              </button>
            </div>
          </div>

          <div className="form-school-container">
            <h4 className="department-detail">Class Details</h4>
            <form onSubmit={handleEditSave} className="department-detail-form">
              <div className="input-group">
                <div style={{ paddingBottom: "10px" }}>
                  <label className="label"> Class Name</label>
                </div>
                <input
                  style={{
                    marginLeft: "1px",
                    borderBottomLeftRadius: "5px",
                    borderTopLeftRadius: "5px",
                  }}
                  type="text"
                  value={schoolClassEdit}
                  onChange={handleEdit}
                  placeholder="Enter Class Name"
                  required
                />
              </div>
              <div className="form-school-btns">
                <button className="btn-s" type="save">
                  Save
                </button>
                <button className="btn-c" type="cancel">
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

export default SchoolEditClass;
