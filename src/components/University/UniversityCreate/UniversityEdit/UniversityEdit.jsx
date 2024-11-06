import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UniversityEdit = () => {
  const [university, setUniversity] = useState({
    universityName: "",
    address: "",
  });
  const API_BASE_URL = process.env.REACT_APP_API_BASEURL;
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/universities/${id}`)
      .then((response) => {
        const universityData = response.data || {};
        setUniversity(universityData);
      })
      .catch((error) => console.log(error));
  }, [API_BASE_URL, id]);

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    axios
      .put(`${API_BASE_URL}/universities/${id}`, university)
      .then((resp) => {
        alert("Data Updated Successfully");
        navigate("/university-all");
      })
      .catch((err) => {
        alert("Error updating university: ", err.message);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUniversity((prevUniversity) => ({
      ...prevUniversity,
      [name]: value,
    }));
  };

  return (
    <div id="add-college-course-wrapper">
      <div className="course-header-with-btns">
        <h5>Edit University</h5>

        <div className="college-course-nav-btns">
          <Link to="/university-add">
            <button className="college-add-course-add-btn">
              Add University
            </button>
          </Link>
          <Link to="/university-all">
            <button className="college-all-course-btn">All Universities</button>
          </Link>
        </div>
      </div>

      <div className="add-college-course-inner-main-wrapper">
        <div className="form-main-container">
          <h4 className="college-course-detail">University Details</h4>
          <form
            onSubmit={handleEditSubmit}
            className="college-course-detail-form"
          >
            <div className="input-group">
              <label className="label">University Name</label>
              <input
                type="text"
                name="universityName"
                value={university.universityName}
                onChange={handleChange}
                placeholder="Enter University Name..."
                required
              />
            </div>
            <div className="input-group">
              <label className="label">Address</label>
              <input
                type="text"
                name="address"
                value={university.address}
                onChange={handleChange}
                placeholder="Enter University Address..."
                required
              />
            </div>

            <div className="college-course-form-btns">
              <button type="submit" className="btn-search">
                Save
              </button>
              <button
                type="button"
                className="btn-cancel"
                onClick={() => navigate("/university-all")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UniversityEdit;
