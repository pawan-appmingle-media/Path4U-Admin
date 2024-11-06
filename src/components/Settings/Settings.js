import { Link } from "react-router-dom";
import "./Settings.css";

const Settings = () => {
  return (
    <>
      <div id="settings-main-wrapper">
        <div className="powered-by-app-mingle-media-inner">
          <h6>Path 4 U Admin Software</h6>
          <p>
            Powered by
            <Link
              to={"https://appminglemedia.com/"}
              style={{ textDecoration: "none" }}
            >
              &nbsp;AppMingle Media
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Settings;
