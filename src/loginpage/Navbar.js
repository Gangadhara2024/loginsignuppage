import { useContext } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../App";

export const Navbar = () => {
  const { theme, iconcolor } = useContext(appContext);
  return (
    <>
      <div className="navbar">
        <div className="insta">
          <img src="logo-insta.webp" alt="logo" width="35px" height="35px" />
        </div>
        <div className="color-icon material-icons" onClick={iconcolor}>
          dark_mode
        </div>
        <div className="signupbtn">
          <span className="link1">
            <Link to="/signup" className="linkline1">
              Signup
            </Link>
          </span>
          <span className="link2">
            <Link to="/login" className="linkline2">
              Login
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
