import { useNavigate } from "react-router-dom";
import "./PushNotification.css";

const PushNotification = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="push-notification-main">
        <div className="heading-or-nav-btns">
          <h4>Notification</h4>
          <div>
            <button>Notification</button>
            <button onClick={() => navigate("/all-push-notification")}>
              All Notifications
            </button>
          </div>
        </div>
        <div className="push-notification-inner">
          <form>
            <div className="push-notification-input">
              <label>
                <b>Notification Send - Student/Teacher</b>
              </label>
              <select>
                <option value="">--Select</option>
                <option value="">Student</option>
                <option value="">Teacher</option>
              </select>
            </div>
            <div className="push-notification-input">
              <label>
                <b>Title</b>
              </label>
              <input type="text" placeholder="Enter Title" />
            </div>
            <div className="push-notification-input">
              <label>
                <b>Message</b>
              </label>
              <input type="text" placeholder="Enter Message" />
            </div>
            <div className="push-notification-input">
              <label>
                <b>Link</b>
              </label>
              <input type="text" placeholder="Enter Link" />
            </div>
            <div className="new-chapter-form-buttons">
              <button type="submit" className="new-chapter-submit-btn">
                Save
              </button>
              <button
                type="button"
                className="new-chapter-cancel-btn"
                // onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PushNotification;
