import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { BsHandbag, BsInfoCircle } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr";
import { HiOutlineClipboard, HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";
import { TbMapPin } from "react-icons/tb";

import "./TeacherAllDetails.css";

const StudentAllDetails = () => {
  return (
    <>
      <div id="tuition-management-system-home-tutor-student-alldetails-main">
        {/* <Filter></Filter> */}
        <div className="home-tutor-student-detailed-profile-container">
          <div className="home-tutor-student-detailed-image-box">
            <img
              src={require("../../../../../Images/student-profile-img.png")}
              alt="student-img"
            />
          </div>

          <div className="home-tutor-student-alldetails-box">
            <p className="student-detailed-name-b">
              <b>
                Himanshi Sharma{" "}
                <span className="stud-detail-tuition-per-month-fee-amount">
                  <img
                    src={require("../../../../../Images/rupee-icon.png")}
                    alt=""
                  />{" "}
                  2000/m
                  <BiPencil style={{ fontSize: "14px", marginLeft: "5px" }} />
                </span>
              </b>{" "}
              <span className="rejected">
                rejected&nbsp;12
                <BsInfoCircle className="info-icon" />
              </span>
              <span className="accepted">
                accepted&nbsp;12
                <BsInfoCircle className="info-icon" />
              </span>
            </p>
            <p className="student-phone-and-email">
              <span className="student-contact">
                <FiPhoneCall className="icon-margin" />
                +91 6358021496
              </span>
              <span className="student-email">
                <MdOutlineEmail className="icon-margin" />
                info@appminglemedia.com
              </span>
            </p>
            <p className="student-address">
              <TbMapPin className="icon-margin" /> <b>Address: </b> 3rd floor,
              G-13, Noida Sector 6
            </p>
            <p className="student-class">
              <HiOutlineClipboard className="icon-margin" /> <b>Class: </b>{" "}
              class 10th
            </p>
            <p className="student-all-subjects">
              <AiOutlineQuestionCircle className="icon-margin" />{" "}
              <b>Subject:</b> Physics, Maths, Science, Social Science
            </p>
            <p className="student-language-type">
              <GrLanguage className="icon-margin" /> <b>Language: </b> Hindi,
              English
            </p>
            <p className="student-experence">
              <BsHandbag className="icon-margin" /> <b>Experenec: </b> 3 Year
            </p>
          </div>

          <p className="student-detailed-profile">
            <HiOutlineUsers className="icon-margin" />
            Profile
          </p>
        </div>
      </div>
    </>
  );
};

export default StudentAllDetails;
