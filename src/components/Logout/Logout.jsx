import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, [navigate]);

  return (
    <div id="logout-wrapper">
      <div className="logout-container">
        <h2>Logging Out...</h2>
        <p>You will be redirected shortly.</p>
      </div>
    </div>
  );
};

export default Logout;
