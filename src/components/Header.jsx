import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
const Header = () => {
  const [btnName, setbtnName] = useState("login");
  return (
    <>
      <div className="header">
        <img className="logo" src={LOGO_URL}></img>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button
              className="login-btn"
              onClick={() => {
                btnName === "login"
                  ? setbtnName("logout")
                  : setbtnName("login");
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
