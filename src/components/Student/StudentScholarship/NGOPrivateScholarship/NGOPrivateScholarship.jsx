import { useNavigate } from "react-router-dom";
import "./NGOPrivateScholarship.css";

const NGOPrivateScholarship = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="private-gov-scholarship-main-container">
        <div className="private-gov-heading-main-div">
          <h4>NGO/Private Scholarship</h4>
          <div className="header-main-btns">
            <button>NGO/Private Scholarship</button>
            <button
              onClick={() =>
                navigate("/student-scholarship/all-private-scholarship")
              }
            >
              All NGO/Private Scholarship
            </button>
          </div>
        </div>
        <div className="private-gov-scholarship-inner">
          <form>
            <div className="private-gov-input">
              <label>
                <b>Title</b>
              </label>
              <input type="text" placeholder="Enter Title" />
            </div>
            <div className="private-gov-input">
              <label>
                <b>Description</b>
              </label>
              <textarea
                style={{ height: "120px" }}
                placeholder="Type description"
              ></textarea>
            </div>
            <div className="private-gov-input">
              <label>
                <b>YouTube Link</b>
              </label>
              <input type="text" placeholder="Enter YouTube Link" />
            </div>
            <div className="private-gov-input">
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

export default NGOPrivateScholarship;
