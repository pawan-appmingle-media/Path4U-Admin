import React from "react";
import "./ChooseCareer.css";
import { useNavigate } from "react-router-dom";

const ChooseCareer = () => {
  const navigate = useNavigate();
  return (
    <section className="choose-career">
      <h1>Choose Career</h1>
      <div className="choose-career-main">
        <div className="career-div" onClick={() => navigate("/add-career")}>
          <h2>Career</h2>
        </div>
        <div className="blog-div" onClick={() => navigate("/add-blog")}>
          <h2>Blog</h2>
        </div>
      </div>
    </section>
  );
};

export default ChooseCareer;
