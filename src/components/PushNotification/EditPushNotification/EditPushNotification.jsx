import { useNavigate } from "react-router-dom";
import "./EditPushNotification.css";

const EditPushNotification = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="edit-all-notification-main-container">
        <div className="edit-all-notification-heading-main-div">
          <h4>Edit Notification</h4>
          <div className="notif-header-main-btns">
            <button onClick={() => navigate("/push-notification")}>
              Notification
            </button>
            <button onClick={() => navigate("/all-push-notification")}>
              All Notifications
            </button>
          </div>
        </div>
        <div className="edit-all-notification-inner-main">
          <form>
            <div className="edit-all-notification-input">
              <label>
                <b>Notification Send - Student/Teacher</b>
              </label>
              <select>
                <option value="">--Select</option>
                <option value="">Student</option>
                <option value="">Teacher</option>
              </select>
            </div>
            <div className="edit-all-notification-input">
              <label>
                <b>Title</b>
              </label>
              <input type="text" placeholder="Enter Title" />
            </div>
            <div className="edit-all-notification-input">
              <label>
                <b>Message</b>
              </label>
              <input type="text" placeholder="Enter Message" />
            </div>
            <div className="edit-all-notification-input">
              <label>
                <b>Link</b>
              </label>
              <input type="text" placeholder="Enter Link" />
            </div>
            <div className="new-chapter-form-buttons">
              <button type="submit" className="new-chapter-submit-btn">
                Save
              </button>
              <button type="button" className="new-chapter-cancel-btn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditPushNotification;
