import React from "react";
// import Filter from '../../../WelcomeBackMsg/WelcomeBack.jsx';
import { BiPencil } from "react-icons/bi";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FiServer } from "react-icons/fi";
import { HiOutlineClipboard } from "react-icons/hi2";
import { PiPhoneCallLight, PiQuestionLight } from "react-icons/pi";

import "./StrudentsProfileDetails.css";

const StudentsProfileDetails = () => {
  return (
    <>
      <div id="student-profile-main">
        <h4>Student Profile</h4>
        <div className="student-profile-inner-div">
          <div className="student-profile-card-container">
            <div className="student-profile-student-image-box">
              <img
                src={require("../../../../Images/student-profile-img.png")}
                alt="student-img"
              />
            </div>

            <div className="student-profile-student-details-box">
              <p className="student-name-b">
                <b>
                  Amit Kumar
                  <span className="tuition-per-month-fee-amount">
                    <img
                      src={require("../../../../Images/rupee-icon.png")}
                      alt=""
                    />
                    2000/m
                    <BiPencil style={{ fontSize: "14px", marginLeft: "5px" }} />
                  </span>
                </b>
              </p>
              {/* <div className="stud-profile-main-div">
                <Link>
                  <p className="student-profile-details">
                    <HiOutlineUsers className="icon-margin" />
                    <b>Profile</b>
                  </p>
                </Link>
              </div> */}
              <p className="student-phone-and-email">
                <span className="student-contact">
                  <PiPhoneCallLight className="icon-margin" />
                  +91 6358021496
                </span>
                <span className="student-email">
                  <CiMail className="icon-margin" />
                  info@appminglemedia.com
                </span>
              </p>
              <p className="student-address">
                <CiLocationOn className="icon-margin" /> 3rd floor, G-13, Noida
                Sector 6
              </p>
              <p className="student-class-and-subject">
                <span className="student-class">
                  <HiOutlineClipboard className="icon-margin" />
                  class 10th
                </span>
                <span className="student-subjects">
                  <FiServer className="icon-margin" />
                  Maths, Physics
                </span>
              </p>
              <p className="student-teacher-gender">
                <PiQuestionLight className="icon-margin" />
                Female Teacher
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentsProfileDetails;
