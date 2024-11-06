import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import "./LogoHeader.css";

const LogoHeader = () => {
  const [responsiveMenu, setResponsiveMenu] = useState(false);
  let handleRespMenuBtn = () => {
    setResponsiveMenu(!responsiveMenu);
    console.log(responsiveMenu);
  };
  return (
    <>
      <div id="logo-header">
        <div className="web-logo">
          <div className="logo-div">
            <img src={require("../../Images/bipayLogo.png")} alt="bipay" />
          </div>
          <div className="menu-icon-box" onClick={handleRespMenuBtn}>
            <IoMenuSharp className="menu-icon-btn" />
          </div>
        </div>
        <div className="header-box">
          <div>
            <i className="fa-solid fa-globe"></i>&nbsp;EN
          </div>
          <div>
            <i className="fa-regular fa-bell"></i>
          </div>
          <div>
            <img
              src={
                "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
              }
              alt="profile"
              width={"32px"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoHeader;
