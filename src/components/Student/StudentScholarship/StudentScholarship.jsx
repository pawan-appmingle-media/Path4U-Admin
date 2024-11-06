import { Link } from "react-router-dom";
import "./StudentScholarship.css";

const StudentScholarship = () => {
  return (
    <>
      <div id="student-scholarship-main-wrapper">
        <h4>Student Scholership</h4>
        <div className="student-scholarship-inner-main">
          <Link to={"./central-government"}>
            <div className="student-scholarship-card">Central Government</div>
          </Link>
          <Link to={"./state-government"}>
            <div className="student-scholarship-card">State Government</div>
          </Link>
          <Link to={"./private-scholarship"}>
            <div className="student-scholarship-card">
              NGO/Private Scholerships
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default StudentScholarship;
