import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setbtnName] = useState("login");
  return (
    <>
      <div className="flex justify-between items-center bg-gray-200">
        <img className="p-3 m-.2 w-40" src={LOGO_URL} alt="Logo" />
        <div className="flex items-center">
          <ul className="p-4 m-4 flex">
            <li className="px-4 font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 font-bold">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4 font-bold">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4 font-bold">Cart</li>
            <button
              className="px-4 font-bold"
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
