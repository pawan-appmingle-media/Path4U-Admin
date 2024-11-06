import React, { useState } from "react";
import "./CourseManagement.css";

const CourseManagement = () => {
  // const [onlySchoolShow, setOnlySchoolShow] = useState(true);
  // const [onlyCollegeShow, setOnlyCollegeShow] = useState(true);
  // const [onlyCEShow, setOnlyCEShow] = useState(true);

  const [schoolCheck, setSchoolCheck] = useState(false);
  const [collegeCheck, setcollegeCheck] = useState(false);
  const [ceCheck, setceCheck] = useState(false);

  const [showSchoolClass1Subjects, setShowSchoolClass1Subjects] =
    useState(false);
  const [showSchoolClass2Subjects, setShowSchoolClass2Subjects] =
    useState(false);
  const [showSchoolClass3Subjects, setShowSchoolClass3Subjects] =
    useState(false);
  const [showSchoolClass4Subjects, setShowSchoolClass4Subjects] =
    useState(false);

  const [showcollegeClass1Subjects, setShowcollegeClass1Subjects] =
    useState(false);
  const [showcollegeClass2Subjects, setShowcollegeClass2Subjects] =
    useState(false);
  const [showcollegeClass3Subjects, setShowcollegeClass3Subjects] =
    useState(false);
  const [showcollegeClass4Subjects, setShowcollegeClass4Subjects] =
    useState(false);

  const [showceClass1Subjects, setShowceClass1Subjects] = useState(false);
  const [showceClass2Subjects, setShowceClass2Subjects] = useState(false);
  const [showceClass3Subjects, setShowceClass3Subjects] = useState(false);
  const [showceClass4Subjects, setShowceClass4Subjects] = useState(false);

  function handleSchoolCheckFun() {
    setSchoolCheck(!schoolCheck);
    // setOnlyCollegeShow(!onlyCollegeShow)
    // setOnlyCEShow(!onlyCEShow)
  }
  function handlecollegeCheckFun() {
    setcollegeCheck(!collegeCheck);
    // setOnlySchoolShow(!onlySchoolShow)
    // setOnlyCEShow(!onlyCEShow)
  }
  function handleceCheckFun() {
    setceCheck(!ceCheck);
    // setOnlySchoolShow(!onlySchoolShow)
    // setOnlyCollegeShow(!onlyCollegeShow)
  }

  let handleSchoolClass1Subject = () => {
    setShowSchoolClass1Subjects(!showSchoolClass1Subjects);
  };
  let handleSchoolClass2Subject = () => {
    setShowSchoolClass2Subjects(!showSchoolClass2Subjects);
  };
  let handleSchoolClass3Subject = () => {
    setShowSchoolClass3Subjects(!showSchoolClass3Subjects);
  };
  let handleSchoolClass4Subject = () => {
    setShowSchoolClass4Subjects(!showSchoolClass4Subjects);
  };

  /* college Funs */
  let handlecollegeClass1Subject = () => {
    setShowcollegeClass1Subjects(!showcollegeClass1Subjects);
  };
  let handlecollegeClass2Subject = () => {
    setShowcollegeClass2Subjects(!showcollegeClass2Subjects);
  };
  let handlecollegeClass3Subject = () => {
    setShowcollegeClass3Subjects(!showcollegeClass3Subjects);
  };
  let handlecollegeClass4Subject = () => {
    setShowcollegeClass4Subjects(!showcollegeClass4Subjects);
  };

  /* CE Funs */
  let handleceClass1Subject = () => {
    setShowceClass1Subjects(!showceClass1Subjects);
  };
  let handleceClass2Subject = () => {
    setShowceClass2Subjects(!showceClass2Subjects);
  };
  let handleceClass3Subject = () => {
    setShowceClass3Subjects(!showceClass3Subjects);
  };
  let handleceClass4Subject = () => {
    setShowceClass4Subjects(!showceClass4Subjects);
  };

  return (
    <>
      <div id="student-exam-course-management">
        <div id="course-management-checks">
          {/* School Check Start */}
          <h4>Course Management</h4>

          <div id="course-manag-all-checks-box">
            {/* School Check Start */}
            <div
              id="school-management-wrapper"
              className="course-management-check"
            >
              <div className="school-check-conatiner">
                <span>
                  <input
                    type="checkbox"
                    id="school-check"
                    onClick={handleSchoolCheckFun}
                  />
                </span>
                <p>School</p>
              </div>

              {schoolCheck ? (
                <div className="school-classes">
                  <div className="school-class-fields-main-box">
                    <div id="class1" className="school-class-container">
                      <div className="school-class-field">
                        <input
                          type="checkbox"
                          onClick={handleSchoolClass1Subject}
                        />
                        &nbsp;
                        <label htmlFor="">Class 1</label>
                      </div>
                      {showSchoolClass1Subjects ? (
                        <div className="class-subjects">
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Hindi</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>English</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Maths</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Science</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Social Science</label>
                          </div>
                        </div>
                      ) : null}
                    </div>

                    {/* school-class-2-start  */}
                    <div id="class2" className="school-class-container">
                      <div className="school-class-field">
                        <input
                          type="checkbox"
                          onClick={handleSchoolClass2Subject}
                        />
                        &nbsp;
                        <label htmlFor="">Class 2</label>
                      </div>
                      {showSchoolClass2Subjects ? (
                        <div className="class-subjects">
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Hindi</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>English</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Maths</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Science</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Social Science</label>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    {/* school-class-2-end  */}

                    {/* school-class-3-start  */}
                    <div id="class3" className="school-class-container">
                      <div className="school-class-field">
                        <input
                          type="checkbox"
                          onClick={handleSchoolClass3Subject}
                        />
                        &nbsp;
                        <label htmlFor="">Class 3</label>
                      </div>
                      {showSchoolClass3Subjects ? (
                        <div className="class-subjects">
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Hindi</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>English</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Maths</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Science</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Social Science</label>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    {/* school-class-3-end  */}

                    {/* school-class-4-start  */}
                    <div id="class4" className="school-class-container">
                      <div className="school-class-field">
                        <input
                          type="checkbox"
                          onClick={handleSchoolClass4Subject}
                        />
                        &nbsp;
                        <label htmlFor="">Class 4</label>
                      </div>
                      {showSchoolClass4Subjects ? (
                        <div className="class-subjects">
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Hindi</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>English</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Maths</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Science</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Social Science</label>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    {/* school-class-4-end  */}
                  </div>
                  {/* school-class-fields  */}
                </div>
              ) : null}
            </div>
            {/* School Check End */}

            {/* College Check Start */}
            <div
              id="college-management-wrapper"
              className="course-management-check"
            >
              <div className="college-check-conatiner">
                <span>
                  <input
                    type="checkbox"
                    id="college-check"
                    onClick={handlecollegeCheckFun}
                  />
                </span>
                <p>College Exam</p>
              </div>

              {collegeCheck ? (
                <div className="college-classes">
                  <div className="college-class-fields-main-box">
                    <div id="class1" className="college-class-container">
                      <div className="college-class-field">
                        <input
                          type="checkbox"
                          onClick={handlecollegeClass1Subject}
                        />
                        &nbsp;
                        <label htmlFor="">Semester 1</label>
                      </div>
                      {showcollegeClass1Subjects ? (
                        <div className="class-subjects">
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Hindi</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>English</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Maths</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Science</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Social Science</label>
                          </div>
                        </div>
                      ) : null}
                    </div>

                    {/* college-class-2-start  */}
                    <div id="class2" className="college-class-container">
                      <div className="college-class-field">
                        <input
                          type="checkbox"
                          onClick={handlecollegeClass2Subject}
                        />
                        &nbsp;
                        <label htmlFor="">Semester 2</label>
                      </div>
                      {showcollegeClass2Subjects ? (
                        <div className="class-subjects">
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Hindi</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>English</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Maths</label>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    {/* college-class-2-end  */}

                    {/* college-class-3-start  */}
                    <div id="class3" className="college-class-container">
                      <div className="college-class-field">
                        <input
                          type="checkbox"
                          onClick={handlecollegeClass3Subject}
                        />
                        &nbsp;
                        <label htmlFor="">Semester 3</label>
                      </div>
                      {showcollegeClass3Subjects ? (
                        <div className="class-subjects">
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Hindi</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>English</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Maths</label>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    {/* college-class-3-end  */}

                    {/* college-class-4-start  */}
                    <div id="class4" className="college-class-container">
                      <div className="college-class-field">
                        <input
                          type="checkbox"
                          onClick={handlecollegeClass4Subject}
                        />
                        &nbsp;
                        <label htmlFor="">Semester 4</label>
                      </div>
                      {showcollegeClass4Subjects ? (
                        <div className="class-subjects">
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Hindi</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>English</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Maths</label>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    {/* college-class-4-end  */}
                  </div>
                  {/* college-class-fields  */}
                </div>
              ) : null}
            </div>
            {/* College Check end */}

            {/* ce Check Start */}
            <div id="ce-management-wrapper" className="course-management-check">
              <div className="ce-check-conatiner">
                <span>
                  <input
                    type="checkbox"
                    id="ce-check"
                    onClick={handleceCheckFun}
                  />
                </span>
                <p>Competative Exam</p>
              </div>

              {ceCheck ? (
                <div className="ce-classes">
                  <div className="ce-class-fields-main-box">
                    <div id="class1" className="ce-class-container">
                      <div className="ce-class-field">
                        <input
                          type="checkbox"
                          onClick={handleceClass1Subject}
                        />
                        &nbsp;
                        <label htmlFor="">Semester 1</label>
                      </div>
                      {showceClass1Subjects ? (
                        <div className="class-subjects">
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Hindi</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>English</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Maths</label>
                          </div>
                        </div>
                      ) : null}
                    </div>

                    {/* CE-class-2-start  */}
                    <div id="class2" className="ce-class-container">
                      <div className="ce-class-field">
                        <input
                          type="checkbox"
                          onClick={handleceClass2Subject}
                        />
                        &nbsp;
                        <label htmlFor="">Semester 2</label>
                      </div>
                      {showceClass2Subjects ? (
                        <div className="class-subjects">
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Hindi</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>English</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Maths</label>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    {/* ce-class-2-end  */}

                    {/* competative-exam-class-4-start  */}
                    <div id="class3" className="ce-class-container">
                      <div className="ce-class-field">
                        <input
                          type="checkbox"
                          onClick={handleceClass3Subject}
                        />
                        &nbsp;
                        <label htmlFor="">Semester 3</label>
                      </div>
                      {showceClass3Subjects ? (
                        <div className="class-subjects">
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Hindi</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>English</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Maths</label>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    {/* CE-class-3-end  */}

                    {/* CE-class-4-start  */}
                    <div id="class4" className="ce-class-container">
                      <div className="ce-class-field">
                        <input
                          type="checkbox"
                          onClick={handleceClass4Subject}
                        />
                        &nbsp;
                        <label htmlFor="">Semester 4</label>
                      </div>
                      {showceClass4Subjects ? (
                        <div className="class-subjects">
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Hindi</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>English</label>
                          </div>
                          <div className="class-subject">
                            <input type="checkbox" />
                            &nbsp;
                            <label>Maths</label>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    {/* CE-class-4-end  */}
                  </div>
                  {/* CE-class-fields  */}
                </div>
              ) : null}
            </div>
            {/* CE Check end */}

            <div className="course-mang-checks-btns-box">
              <button type="submit" className="cm-cb-submit">
                Submit
              </button>
              <button type="cancel" className="cm-cb-cancel">
                Cancel
              </button>
            </div>
          </div>
          {/* course-manag-all-checks-box-end  */}
        </div>
      </div>
    </>
  );
};

export default CourseManagement;
