import React from "react";
import { BiPencil } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { HiOutlineClipboard, HiOutlineUsers } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { PiPhoneCallLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import "./TMSshare.css";

const TMSshare = () => {
  return (
    <>
      <div id="tms-share-main-container">
        <HomeTutorTeacherProfile />
        <HomeTutorTeacherProfile />
        <HomeTutorTeacherProfile />
        <HomeTutorTeacherProfile />
        <HomeTutorTeacherProfile />
        <HomeTutorTeacherProfile />
      </div>
    </>
  );
};

export default TMSshare;

const HomeTutorTeacherProfile = () => {
  return (
    <>
      <div className="home-tutor-teacher-profile-container">
        <div className="home-tutor-share-teacher-image-box">
          <img
            src={require("../../../../../Images/student-profile-img.png")}
            alt="student-img"
          />
        </div>

        <div className="home-tutor-teacher-details-box">
          <p className="student-name-b">
            <b>
              Himanshu Sharma{" "}
              <span className="tuition-per-month-fee-amount">
                <img
                  src={require("../../../../../Images/rupee-icon.png")}
                  alt="rupees-icon"
                />{" "}
                2000/m
                <BiPencil style={{ fontSize: "14px", marginLeft: "5px" }} />
              </span>
            </b>
            <br />
            <span className="teacher-profile-share-star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </span>
          </p>
          <Link to={"./teacher-all-details"}>
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
            <CiLocationOn className="icon-margin" /> 3rd floor, G-13, Noida
            Sector 6
          </p>
          <p className="teacher-accept-class-checks-boxes">
            <div>
              <HiOutlineClipboard style={{ marginRight: "5px" }} />
              Class 10th <input type="checkbox" />
            </div>
            <div>
              Class 10th <input type="checkbox" />
            </div>
            <div>
              Class 10th <input type="checkbox" />
            </div>
            <div>
              Class 10th <input type="checkbox" />
            </div>
          </p>
          <p className="teacher-accept-subjects-boxes">
            <div className="subject-checkbox">
              <IoBookOutline />
              Maths
            </div>
            <div className="subject-checkbox">
              Physics <input type="checkbox" />
            </div>
            <div className="subject-checkbox">
              Social Science <input type="checkbox" />
            </div>
            <div className="subject-checkbox">
              Art <input type="checkbox" />
            </div>
            <div className="subject-checkbox">
              English <input type="checkbox" />
            </div>
          </p>
          <p className="share-rejected-accepted-requests-and-forwards">
            <span className="rejected">
              rejected&nbsp;12
              <BsInfoCircle className="info-icon" />
            </span>
            <span className="accepted">
              accepted&nbsp;12
              <BsInfoCircle className="info-icon" />
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
