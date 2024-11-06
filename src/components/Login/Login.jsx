import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; // Import CSS

const Login = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [loginId, setLoginId] = useState();

  const [otp, setOtp] = useState("");
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // States for forgot password flow
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [usernameForForgotPassword, setUsernameForForgotPassword] =
    useState("");
  const [isResetPasswordVisible, setIsResetPasswordVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEye = () => {
    setPasswordVisible(!passwordVisible);
    const eyeIcon = document.querySelector("#eyeIcon");
    eyeIcon.classList.toggle("fa-eye");
  };

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleForgotPasswordChange = (e) => {
    setUsernameForForgotPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (isForgotPassword) return; // Skip login flow if in forgot password mode

    axios
      .post("https://path4u-backend.onrender.com/api/admin/login", loginData)
      .then((response) => {
        setLoginId(response.data.id);
        setIsOtpVisible(true);
      })
      .catch((error) => {
        console.log("Error logging in:", error.response.data);
      });
  };

  const handleForgotPassword = () => {
    // Trigger the forgot password process by sending the username
    axios
      .post(
        "https://path4u-backend.onrender.com/api/admin/request-password-reset",
        {
          username: usernameForForgotPassword,
        }
      )
      .then((response) => {
        setLoginId(response.data.id);
        setIsOtpVisible(true); // Show OTP input after receiving username
      })
      .catch((error) => {
        console.log("Error requesting password reset:", error.response.data);
      });
  };

  const handleOtpVerification = () => {
    const endpoint = isForgotPassword
      ? `https://path4u-backend.onrender.com/api/admin/verify-reset-otp/${loginId}`
      : `https://path4u-backend.onrender.com/api/admin/verify-otp/${loginId}`;

    axios
      .post(endpoint, { otp })
      .then((response) => {
        setIsOtpVisible(false);
        if (isForgotPassword) {
          setIsResetPasswordVisible(true); // Show reset password fields after OTP verification
        } else {
          setIsLoggedIn(true);
          localStorage.setItem("token", response.data.token);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log("Error verifying OTP:", error.response.data);
      });
  };

  const handlePasswordReset = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    axios
      .post("https://path4u-backend.onrender.com/api/admin/reset-password", {
        id: loginId,
        newPassword,
      })
      .then((response) => {
        alert("Password reset successful! Please login.");
        setIsResetPasswordVisible(false);
        setIsForgotPassword(false);
      })
      .catch((error) => {
        console.log("Error resetting password:", error.response.data);
      });
  };

  useEffect(() => {
    const loginWrapper = document.querySelector("#login-wrapper");
    if (isOtpVisible) {
      loginWrapper.classList.add("blur-background");
    } else {
      loginWrapper.classList.remove("blur-background");
    }
  }, [isOtpVisible]);

  return (
    <>
      <div id="login-wrapper" className={isOtpVisible ? "blur-background" : ""}>
        <div className="login-form">
          <h2>{isForgotPassword ? "Forgot Password" : "Welcome Back"}</h2>
          <form>
            {!isForgotPassword && (
              <>
                <div className="form-group">
                  <p>Username</p>
                  <i className="fa-regular fa-user fa-form-group-icon"></i>
                  <input
                    type="text"
                    name="username"
                    value={loginData.username}
                    placeholder="Enter Username"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <i
                    onClick={handleEye}
                    id="eyeIcon"
                    className="fa-solid fa-eye fa-eye-slash"
                  ></i>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    value={loginData.password}
                    placeholder="Enter Password"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="forgot-password">
                  <p>
                    <Link onClick={() => setIsForgotPassword(true)}>
                      Forgot password?
                    </Link>
                  </p>
                </div>
              </>
            )}

            {isForgotPassword && (
              <div className="form-group">
                <p>Enter Username</p>
                <input
                  type="text"
                  value={usernameForForgotPassword}
                  onChange={handleForgotPasswordChange}
                  placeholder="Enter Username"
                  required
                />
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="login-btn"
                >
                  Submit
                </button>
              </div>
            )}

            <button
              type="submit"
              onClick={handleLogin}
              className="login-btn"
              disabled={isForgotPassword}
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* OTP Modal Popup */}
      {isOtpVisible && (
        <div className="otp-popup">
          <div className="otp-container">
            <h3>Enter OTP</h3>
            <input
              type="text"
              name="otp"
              value={otp}
              onChange={handleOtpChange}
              placeholder="Enter the OTP sent to your phone"
              required
            />
            <button onClick={handleOtpVerification} className="verify-otp-btn">
              Verify OTP
            </button>
          </div>
        </div>
      )}

      {/* Password Reset Form */}
      {isResetPasswordVisible && (
        <div className="otp-popup">
          <div className="otp-container">
            <h3>Reset Password</h3>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter New Password"
              required
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm New Password"
              required
            />
            <button onClick={handlePasswordReset} className="verify-otp-btn">
              Reset Password
            </button>
          </div>
        </div>
      )}

      {/* Display success message after OTP verification */}
      {isLoggedIn && (
        <div className="success-message">
          <p>Login successful! Welcome.</p>
        </div>
      )}
    </>
  );
};

export default Login;
