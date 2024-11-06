import React from "react";
import { useNavigate } from "react-router-dom";

const BlogAll = () => {
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
    <>
      <div id="add-subject-inner-wrapper">
        <div className="superheader">
          <div className="subjectHeaderdiv">
            <h5>Blog</h5>
            <div className="subjectdiv2">
              <button className="handleNewSubject" onClick={handleAddNewBlog}>
                + Add New Blog
              </button>
              <button className="allSubjects" onClick={handleViewAllBlog}>
                All Blog
              </button>
            </div>
          </div>

          <div className="form-sub-container mt-4" id="form">
            <h4 className="subject-detail">Blog Details</h4>

            <div className="classes-table-container">
              <h5>All Blog</h5>
              <table className="classes-table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Title</th>
                    <th>Language</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sample data rows */}

                  {/* {.map((data, idx) => (
                  <tr key={idx}>
                    

                    <td className="table-action-icons">
                      <i className="fa-solid fa-file-pen"></i>&nbsp;&nbsp;
                      <i className="fa-solid fa-trash-can"></i>
                    </td>
                  </tr>
                ))} */}

                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogAll;
