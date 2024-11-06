import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaRegClock, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { HiOutlineClipboard } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { PiPhoneCallLight } from "react-icons/pi";
import "./TeacherProfileDetails.css";

const TeacherProfileDetails = () => {
  return (
    <div id="teacher-profile-details-container">
      <h4>Teacher Profile</h4>
      <div className="teacher-profile-details-inner-div">
        <div className="teacher-profile-details-card-container">
          {/* Profile Image & Basic Info */}
          <div className="teacher-profile-and-name">
            <div className="teacher-details">
              <p className="teacher-name">
                <b>Himanshi Sharma</b>
                <br />
                <span className="rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </span>
              </p>

              {/* Teacher Remark */}
              <div className="teacher-remark">
                <MdOutlineGeneratingTokens className="icon" />
                <input
                  type="text"
                  placeholder="approval/rejection Remark."
                  className="remark-input"
                />
              </div>

              {/* Approval & Rejection Section */}
              <div className="action-buttons">
                <button className="accepted">Approve</button>
                <button className="rejected">Reject</button>
              </div>
            </div>
            <div className="teacher-profile-image-box">
              <img
                src={require("../../../../Images/student-profile-img.png")}
                alt="teacher-img"
              />
            </div>
          </div>

          <hr />

          {/* Detailed Information Sections */}
          <div className="teacher-details-sections">
            {/* Basic Details */}
            <div className="details-section">
              <h5>Basic Details</h5>
              <p className="contact-info">
                <span>
                  <PiPhoneCallLight className="icon" /> +91 6358021496
                </span>
                <span>
                  <CiMail className="icon" /> info@appminglemedia.com
                </span>
                <span>
                  <CiLocationOn className="icon" />
                  <span>noida, </span>
                  <span>uttar pradesh</span>
                </span>
              </p>
            </div>

            {/* Professional Info */}
            <div className="details-section">
              <h5>Professional Info</h5>
              <div className="classes-taught">
                <span>
                  <HiOutlineClipboard className="icon" />
                  Class 10th, Class 11th, Class 12th
                </span>
              </div>
              <p className="subjects">
                <span>
                  <IoBookOutline className="icon" />
                  Maths, Physics, Social Science, Art, English
                </span>
              </p>
            </div>

            {/* Additional Info */}
            <div className="details-section">
              <h5>Additional Info</h5>
              <p className="additional-info">
                <span>
                  <LuCalendarDays className="icon" /> Days Name:{" "}
                  <b>Mon, Tue, Wed, Thur, Fri, Sat</b>
                </span>
                <span>
                  <FaRegClock className="icon" /> Teaching Hours: <b>1h</b>
                </span>
              </p>
            </div>

            <div className="details-section">
              <h5>Aadhar Card Image</h5>
              <img
                src="https://imgs.search.brave.com/c3jLDg97Mosm5NtAo3wV5ngsECuEUspeiybO7knxYNU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Yy9jZi9BYWRoYWFy/X0xvZ28uc3ZnLzUx/MnB4LUFhZGhhYXJf/TG9nby5zdmcucG5n"
                alt="aadhar-front-side-image"
                className="teacher-aadhar-img"
              />
              <img
                src="https://imgs.search.brave.com/UhfmSenOBpSDM_7JTrh5tcupDF-mHB9f6TMnDKTAuqY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWlkYWkuZ292Lmlu/L2ltYWdlcy9sYW5n/UGFnZS91aWRhaV9l/bmdsaXNoX2xvZ29A/MngucG5n"
                alt="aadhar-back-side-image"
                className="teacher-aadhar-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfileDetails;
