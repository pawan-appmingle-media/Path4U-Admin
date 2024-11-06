import { BiPencil } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { FiServer } from "react-icons/fi";
import { HiOutlineUserAdd } from "react-icons/hi";
import { HiOutlineClipboard } from "react-icons/hi2";
import {
  PiPhoneCallLight,
  PiQuestionLight,
  PiShareFatLight,
} from "react-icons/pi";

import { CiCalendar, CiLocationOn, CiMail } from "react-icons/ci";
import { GoDownload, GoUpload } from "react-icons/go";
import { Link } from "react-router-dom";
import "./HomeWorkAssistanceEnquiry.css";

const HomeWorkAssistanceEnquiry = () => {
  return (
    <>
      <div id="home-work-assistance-enquiry-main">
        <div className="home-work-assitance-student-profile-container">
          <div className="home-work-assitance-student-image-box">
            <img
              src={require("../../../../Images/student-profile-img.png")}
              alt="student-img"
            />
          </div>

          <div className="home-work-assistance-student-details-box">
            <p className="student-name-b">
              <b>
                Pawan Kumar{" "}
                <span className="tution-per-month-fee-amount">
                  <img
                    src={require("../../../../Images/rupee-icon.png")}
                    alt=""
                  />{" "}
                  2000/m
                  <BiPencil style={{ fontSize: "14px", marginLeft: "5px" }} />
                </span>
              </b>
            </p>
            <p className="tution-joining-date">
              <CiCalendar
                className="icon-margin"
                style={{ fontSize: "20px" }}
              />
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
            <p className="upload-home-work-btn">
              <span className="upload-homw-work-btn-span">
                <GoUpload className="icon-margin" />
                Upload Home Work
              </span>
              <span className="upload-home-work-input">
                <input type="file" placeholder="upload student home work" />
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
              <span className="status">
                <GoDownload />
                Download
              </span>
              <span className="view-btn">
                <FaEye style={{ marginRight: "5px", paddingTop: "2px" }} />
                View
              </span>{" "}
              <span className="add-user">
                <HiOutlineUserAdd />
                24{" "}
                <Link to={"/"}>
                  <PiShareFatLight className="share-icon-btn icon-margin" />
                </Link>
                <BsInfoCircle className="info-icon" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeWorkAssistanceEnquiry;
