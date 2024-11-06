import { IoSearch } from "react-icons/io5";
import "./WelcomeBack.css";

const WelcomeBack = () => {
  return (
    <>
      <div id="powered-by-app-mingle-media-main">
        <div className="stud-searchbar-box">
          <input
            type="search"
            placeholder="class/course, subject, chapter, category..."
          />
          <IoSearch className="search-icon" />
        </div>
        <div className="student-details-filter-box">
          <div className="department-filter-container">
            <select>
              <option value="" defaultChecked>
                -Select
              </option>
            </select>
          </div>
          <div className="session-filter-container">
            <select name="" id="">
              <option value="" defaultChecked>
                -Select
              </option>
            </select>
          </div>
          <div className="course-filter-container">
            <select name="" id="">
              <option value="" defaultChecked>
                -Select
              </option>
              <option value="">BCA</option>
            </select>
          </div>
          <div className="batch-filter-container">
            <select name="" id="">
              <option value="" defaultChecked>
                -Select
              </option>
            </select>
          </div>
          <button>Submit</button>
        </div>
      </div>
    </>
  );
};

export default WelcomeBack;
