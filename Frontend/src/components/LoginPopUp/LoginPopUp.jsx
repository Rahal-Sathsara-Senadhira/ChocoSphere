import React, { useState } from "react";
import "./LoginPopUp.css";
import { DefaultAssets } from "../../assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div className="loging-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            src={DefaultAssets.close}
            alt=""
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="login-poopup-inputs">
          {currentState === "Sign Up" ? (
            <input type="text" placeholder="Your name" required />
          ) : (
            <></>
          )}

          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create Account" : "Log In"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, you agree to the terms of use & privacy policy</p>
        </div>
        {currentState === "Sign Up" ? (
          <p>
            Already have an Account? <span onClick={()=>setCurrentState("Log In")}>Login here</span>
          </p>
        ) : (
          <p>
            New to our site? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPopUp;
