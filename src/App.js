import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";

export const Header = () => {
  return (
    <>
      <div className="header">
        <img
          className="logo"
          src="https://cdn.dribbble.com/userupload/8808323/file/original-e6f29bc34a354b53b6d793412fa64c3e.gif"
        ></img>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export const Restuarent = () => {
  return (
    <>
      <div className="res-card"></div>
      <h3> Hongs' f Kitchen</h3>
    </>
  );
};

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="search"> Search</div>
        <div className="res-container"></div>
        <Restuarent />
      </div>
    </>
  );
};

export default Body;
// export default Header;
