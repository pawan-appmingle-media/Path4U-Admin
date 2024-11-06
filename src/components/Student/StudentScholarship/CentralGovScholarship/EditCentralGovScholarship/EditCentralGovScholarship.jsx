import { useNavigate } from "react-router-dom";
import "./EditCentralGovScholarship.css";

const EditCentralGovScholarship = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="edit-central-gov-scholarship-main-container">
        <div className="edit-central-gov-heading-main-div">
          <h4>Edit Central Government Scholarship</h4>
          <div className="header-main-btns">
            <button
              onClick={() =>
                navigate("/student-scholarship/central-government")
              }
            >
              Central Gov Scholarship
            </button>
            <button
              onClick={() =>
                navigate("/student-scholarship/all-central-government")
              }
            >
              All Central Gov Scholarship
            </button>
          </div>
        </div>
        <div className="edit-central-gov-scholarship-inner">
          <form>
            <div className="edit-central-gov-input">
              <label>
                <b>Title</b>
              </label>
              <input type="text" placeholder="Enter Title" />
            </div>
            <div className="edit-central-gov-input">
              <label>
                <b>Description</b>
              </label>
              <textarea
                style={{ height: "120px" }}
                placeholder="Type description"
              ></textarea>
            </div>
            <div className="edit-central-gov-input">
              <label>
                <b>YouTube Link</b>
              </label>
              <input type="text" placeholder="Enter YouTube Link" />
            </div>
            <div className="edit-central-gov-input">
              <label>
                <b>Other Link</b>
              </label>
              <input type="text" placeholder="Enter Other Link" />
            </div>
          </form>
          <div className="new-chapter-form-buttons">
            <button type="submit" className="new-chapter-submit-btn">
              Save
            </button>
            <button type="button" className="new-chapter-cancel-btn">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCentralGovScholarship;
