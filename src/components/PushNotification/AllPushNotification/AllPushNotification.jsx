import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./AllPushNotification.css";

const AllPushNotification = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="all-notifications-main">
        <div className="all-notifications-heading-btns">
          <h4>All Notifications</h4>
          <div className="header-main-btns">
            <button onClick={() => navigate("/push-notification")}>
              Notification
            </button>
            <button>All Notifications</button>
          </div>
        </div>
        <div className="all-push-notifications-table">
          <table>
            <thead>
              <tr>
                <th>Student/Teacher</th>
                <th>Title</th>
                <th>Message</th>
                <th>Link</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>teacher</td>
                <td>title</td>
                <td>msg</td>
                <td>https://path4u.in/</td>
                <td>
                  <span>
                    <FaEdit
                      onClick={() => navigate("/edit-push-notification")}
                    />
                  </span>
                  <span>
                    <MdDelete />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllPushNotification;
