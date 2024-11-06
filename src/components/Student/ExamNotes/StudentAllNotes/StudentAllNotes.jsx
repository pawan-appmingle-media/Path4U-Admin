import { useState } from "react";
import FilterCollege from "./Filter/FilterCollege.jsx";
import FilterCompExam from "./Filter/FilterCompExam.jsx";
import FilterSchool from "./Filter/FilterSchool.jsx";
import "./StudentAllNotes.css";

const StudentAllNotes = () => {
  const [selectedTable, setSelectedTable] = useState(null);

  // Handle button clicks
  const handleButtonClick = (tableNumber) => {
    setSelectedTable(tableNumber); // Set the clicked button as the active one
  };

  return (
    <>
      <div id="exam-notes-student-all-notes-with-tables">
        <div id="college-all-course-inner-main-wrapper">
          <div className="course-header-with-btns-table-page">
            <h5>All Notes</h5>
          </div>

          <div id="powered-by-app-mingle-media-mains">
            <div className="main-button">
              <button
                onClick={() => handleButtonClick(1)}
                style={{
                  backgroundColor: selectedTable === 1 ? "#212143" : "grey",
                  color: "white",
                }}
              >
                School
              </button>
              <button
                onClick={() => handleButtonClick(2)}
                style={{
                  backgroundColor: selectedTable === 2 ? "#212143" : "grey",
                  color: "white",
                }}
              >
                College
              </button>
              <button
                onClick={() => handleButtonClick(3)}
                style={{
                  backgroundColor: selectedTable === 3 ? "#212143" : "grey",
                  color: "#fff",
                }}
              >
                Competitive Exam
              </button>
            </div>
          </div>

          <div>
            {selectedTable === 1 && (
              <div>
                <FilterSchool />
              </div>
            )}

            {selectedTable === 2 && (
              <div>
                <FilterCollege />
              </div>
            )}

            {selectedTable === 3 && (
              <div>
                <FilterCompExam />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentAllNotes;
