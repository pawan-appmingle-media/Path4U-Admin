import React from "react";
// import Filter from '../../../WelcomeBackMsg/WelcomeBack.jsx';
import { BiPencil } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { CiCalendar, CiLocationOn, CiMail } from "react-icons/ci";
import { FiServer } from "react-icons/fi";
import { HiOutlineUserAdd } from "react-icons/hi";
import { HiOutlineClipboard } from "react-icons/hi2";
import { MdOutlineNoteAdd } from "react-icons/md";
import {
  PiPhoneCallLight,
  PiQuestionLight,
  PiShareFatLight,
} from "react-icons/pi";
import { TbCalendarPlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./TuitionManagementSystem.css";

const TuitionManagementSystem = () => {
  return (
    <>
      <div id="tuition-management-system-home-tutor-students-main">
        <StudentProfileCard />
      </div>
    </>
  );
};

export default TuitionManagementSystem;

const StudentProfileCard = () => {
  return (
    <>
      <div className="home-tutor-student-profile-container">
        <div className="home-tutor-student-image-box">
          <img
            src={require("../../../../Images/student-profile-img.png")}
            alt="student-img"
          />
        </div>

        <div className="home-tutor-student-details-box">
          <p className="student-name-b">
            <b>
              Amit Kumar{" "}
              <span className="tuition-per-month-fee-amount">
                <img
                  src={require("../../../../Images/rupee-icon.png")}
                  alt=""
                />{" "}
                2000/m
                <BiPencil style={{ fontSize: "14px", marginLeft: "5px" }} />
              </span>
            </b>
          </p>
          <p
            className="tuition-joining-date"
            style={{ position: "absolute", top: "10px", right: "20px" }}
          >
            <CiCalendar className="icon-margin" style={{ fontSize: "20px" }} />
            12 Oct 2024
          </p>
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
          <p className="add-notes-and-alarm">
            <span className="add-reminder-notes">
              <MdOutlineNoteAdd className="icon-margin" /> add reminder notes
            </span>
            <span className="add-alarm">
              <TbCalendarPlus className="icon-margin" />
              add alarm
            </span>
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
          <p className="rejected-accepted-requests-and-forwards">
            <span className="pending">
              pending <span className="pending-counts">{15}</span>
              <BsInfoCircle className="info-icon" />
            </span>
            <span className="rejected">
              rejected<span className="rejected-counts">{12}</span>
              <BsInfoCircle className="info-icon" />
            </span>
            <span className="accepted">
              accepted<span className="accepted-counts">{12}</span>
              <BsInfoCircle className="info-icon" />
            </span>{" "}
            <span className="add-user">
              <HiOutlineUserAdd />
              24{" "}
              <Link to={"./tms-share"}>
                <PiShareFatLight className="share-icon-btn icon-margin" />
              </Link>
              <BsInfoCircle className="info-icon" />
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
