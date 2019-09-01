import React from "react";
import Navbar from "./navbar";

import logo from "../assets/logo.svg";

const heroStyle = {
  opacity: "0.95",
  background: "#499bea",
  marginTop: "35px"
};

const Header = () => {
  return (
    <section>
      <Navbar />
      <div className="jumbotron jumbotron-fluid" style={heroStyle}>
        <div className="container">
          <img src={logo} alt="logo" height="60" />
          <div style={{ fontSize: "2rem" }} className="text-white">
            Search My Data
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
