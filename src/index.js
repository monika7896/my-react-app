import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { Header, Restuarent } from "./App";
import reportWebVitals from "./reportWebVitals";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

const Applayout = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Body />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);

reportWebVitals();
