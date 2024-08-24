import { useContext, useState } from "react";
import { PiSelectionBackground } from "react-icons/pi";
import { Link } from "react-router-dom";
import { appContext } from "../App";

export const Navbar = () => {
  const { iconcolor } = useContext(appContext);
  return (
    <>
      <div className="navbar">
        <div className="insta">
          <img src="logo-insta.webp" alt="logo" width="35px" height="35px" />
        </div>
        <div className="color-icon">
          <PiSelectionBackground onClick={iconcolor} />
        </div>
        <div className="signupbtn">
          <span className="link1">
            <Link to="/signup">
              <span>Signup</span>
            </Link>
          </span>
          <span className="link2">
            <Link to="/login">
              <span>Login</span>
            </Link>
          </span>
        </div>
      </div>
      <div className="signupbar">
        <div className="background-container">
          <img src="123.jpeg" alt="background" />
        </div>
      </div>
    </>
  );
};
