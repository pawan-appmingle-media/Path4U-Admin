import React from "react";

import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { HiOutlineClipboard, HiOutlineUsers } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { PiPhoneCallLight } from "react-icons/pi";

import { Link } from "react-router-dom";
import "./TeachersProfile.css";

const TeachersProfile = () => {
  return (
    <>
      <div id="teacher-profile-container">
        <h4>Teacher's Profile</h4>
        <TeacherProfile />
        <TeacherProfile />
        <TeacherProfile />
      </div>
    </>
  );
};

export default TeachersProfile;

const TeacherProfile = () => {
  return (
    <>
      <div className="teacher-profile-inner-div">
        <div className="teacher-profile-card-container">
          <div className="teacher-profile-share-teacher-image-box">
            <img
              src={require("../../../Images/student-profile-img.png")}
              alt="student-img"
            />
          </div>

          <div className="teacher-profile-teacher-details-box">
            <p className="student-name-b">
              <b>Himanshi Sharma</b>
              <br />
              <span className="teacher-profile-card-star">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </span>
            </p>
            <Link to={"./teacher-profile-details"}>
              <p className="share-teacher-profile">
                <HiOutlineUsers className="icon-margin" />
                Profile
              </p>
            </Link>
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
              <CiLocationOn className="icon-margin" />
              Noida, Uttar Pradesh
            </p>
            <p className="teacher-accept-class-checks-boxes">
              <div>
                <HiOutlineClipboard />
              </div>
              <div>Class 10th</div>
              <div>Class 12th</div>
            </p>
            <p className="teacher-accept-subjects-boxes">
              <div>
                <IoBookOutline />
              </div>
              <div className="subject-checkbox">Maths</div>
              <div className="subject-checkbox">Physics</div>
              <div className="subject-checkbox">Social Science</div>
              <div className="subject-checkbox">Art</div>
              <div className="subject-checkbox">English</div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
