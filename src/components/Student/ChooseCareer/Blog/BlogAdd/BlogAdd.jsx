import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TipTap from "../../RichTextEditor/Tiptap";
import "./BlogAdd.css";

const BlogAdd = () => {
  const [selectedCareer, setSelectedCareer] = useState();
  const [careers, setCareers] = useState([]);
  const navigate = useNavigate();

  const handleAddNewBlog = () => {
    navigate("/add-blog");
  };
  const handleViewAllBlog = () => {
    navigate("/all-blog");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="blogFormContainer">
      <div className="blogFormHeader">
        <h5>Blog</h5>
        <div className="blogFormButtonGroup">
          <button className="blogFormAddButton" onClick={handleAddNewBlog}>
            + Add New Blog
          </button>
          <button className="blogFormViewAllButton" onClick={handleViewAllBlog}>
            View All Blogs
          </button>
        </div>
      </div>

      <div className="blogFormContent">
        <h4 className="blogFormTitle">Blog Details</h4>
        <form onSubmit={handleSubmit} className="blogForm">
          <div className="blogFormField">
            <label className="blogFormLabel">Select Career</label>
            <select
              className="blogFormSelect"
              value={selectedCareer}
              onChange={(e) => setSelectedCareer(e.target.value)}
              required
            >
              <option value="">- Select Career -</option>
              {careers.map((career) => (
                <option value={career._id} key={career._id}>
                  {career?.className}
                </option>
              ))}
            </select>
          </div>

          <div className="blogFormField">
            <label className="blogFormLabel">Blog Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              className="blogFormInput"
              required
            />
          </div>

          <div className="blogFormField">
            <label className="blogFormLabel">Select Language</label>
            <select className="blogFormSelect" required>
              <option value="">- Select Language -</option>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>

          <div className="blogFormEditor">
            <TipTap />
          </div>

          <div className="blogFormActions">
            <button type="submit" className="blogFormSaveButton">
              Save
            </button>
            <button type="button" className="blogFormCancelButton">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogAdd;
