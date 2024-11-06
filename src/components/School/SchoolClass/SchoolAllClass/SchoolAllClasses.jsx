import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation
import "./SchoolAllClasses.css"; // Import the CSS file

const AllClasses = () => {
  const [schoolClassName, setSchoolClassName] = useState([]);

  const navigate = useNavigate();

  const handleAddNewClass = () => {
    navigate("/school-add-class");
  };
  const handleViewAllClasses = () => {
    navigate("/school-all-class");
  };

  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;

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
  useEffect(() => {
    // alert("aa gya")
    getClasses();
  }, []);

  // API DELETE FUN
  let handleSchoolClassDlt = async (id) => {
    let dltOrNot = window.confirm("Do you want to delete");
    if (dltOrNot) {
      axios.delete(`${API_BASE_URL}/classes/${id}`).then((resp) => {
        console.log(resp);
        getClasses();
      });
    }
  };

  const handleEdit = (id) => {
    // alert(id);
    navigate(`/school-edit-class/${id}`);
  };

  return (
    <>
      <div id="classes-inner-wrapper">
        <div className="classes-header-div">
          <h5>Classes</h5>
          <div className="classes-header-btns">
            <button className="add-class-btn" onClick={handleAddNewClass}>
              + Add New Class
            </button>
            <button className="all-classes-btn" onClick={handleViewAllClasses}>
              All Classes
            </button>
          </div>
        </div>

        <div className="classes-table-container">
          <h5>All Classes</h5>
          <table className="classes-table">
            <thead>
              <tr>
                <th>Class</th>
                <th>Number of Subject</th>
                <th>Number of Students</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {schoolClassName.map((classes) => (
                <tr key={classes._id}>
                  <td>{classes.className}</td>
                  <td>6</td>
                  <td>7</td>
                  <td className="table-action-icons">
                    <i
                      className="fa-solid fa-file-pen"
                      onClick={() => handleEdit(classes._id)}
                    ></i>
                    <i
                      className="fa-solid fa-trash-can"
                      onClick={() => handleSchoolClassDlt(classes._id)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllClasses;
