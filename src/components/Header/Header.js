import React from "react";
import "../styles/header.css";
import logo from "../styles/marvel_logo.png";

const Header = ({ name, setName }) => {
  console.log(name);
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="Search for characters"
        value={name}
      />
    </div>
  );
};

export default Header;
