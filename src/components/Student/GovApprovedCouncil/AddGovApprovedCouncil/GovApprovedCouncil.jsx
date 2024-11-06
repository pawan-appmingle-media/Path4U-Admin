import { useNavigate } from "react-router-dom";
import "./GovApprovedCouncil.css";

const GovApprovedCouncil = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="gov-approved-council-main">
        <div className="gov-approved-council-head-nav-btns">
          <h4>Government Approved Council</h4>
          <div className="header-main-btns">
            <button onClick={() => navigate("/government-approved-council")}>
              Gov Approved Council
            </button>
            <button
              onClick={() => navigate("/all-government-approved-council")}
            >
              All Gov Approved Council
            </button>
          </div>
        </div>
        <div className="gov-approved-council-inner">
          <form>
            <div className="gov-app-input">
              <label>
                <b>Title</b>
              </label>
              <input
                type="text"
                placeholder="Enter Title"
                className="gov-appr-concl-field"
              />
            </div>
            <div className="gov-app-input">
              <label>
                <b>Upload Icon</b>
              </label>
              <input type="file" className="gov-appr-concl-field" />
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

export default GovApprovedCouncil;
