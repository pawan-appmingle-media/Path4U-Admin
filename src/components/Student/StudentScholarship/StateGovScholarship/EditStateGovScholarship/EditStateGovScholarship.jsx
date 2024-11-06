import { useNavigate } from "react-router-dom";
import "./EditStateGovScholarship.css";

const EditStateGovScholarship = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="edit-state-gov-scholarship-main-container">
        <div className="edit-state-gov-heading-main-div">
          <h4>Edit State Government Scholarship</h4>
          <div className="header-main-btns">
            <button
              onClick={() => navigate("/student-scholarship/state-government")}
            >
              State Gov Scholarship
            </button>
            <button
              onClick={() =>
                navigate("/student-scholarship/all-state-government")
              }
            >
              All State Gov Scholarship
            </button>
          </div>
        </div>
        <div className="edit-state-gov-scholarship-inner">
          <form>
            <div className="edit-state-gov-input">
              <label>
                <b>Title</b>
              </label>
              <input type="text" placeholder="Enter Title" />
            </div>
            <div className="edit-state-gov-input">
              <label>
                <b>Description</b>
              </label>
              <textarea
                style={{ height: "120px" }}
                placeholder="Type description"
              ></textarea>
            </div>
            <div className="edit-state-gov-input">
              <label>
                <b>YouTube Link</b>
              </label>
              <input type="text" placeholder="Enter YouTube Link" />
            </div>
            <div className="edit-state-gov-input">
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

export default EditStateGovScholarship;
