import React from "react";
import "./sharedComponentsStyles.css";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={require("../.././assets/images/dasdas-logo.png")}
        alt="Das Das Logo"
        width="50"
        height="50"
      />
      <div className="header__cont--icon">
        <img
          className="header__icon--twitter"
          src={require("../../assets/logo/twitter.png")}
          alt="Twitter icon"
          width="30"
          height="30"
        />
        <img
          className="header__icon--dribbble"
          src={require("../../assets/logo/dribbble.png")}
          alt="Dribbble icon"
          width="30"
          height="30"
        />
        <img
          className="header__icon--"
          src={require("../../assets/logo/figma.png")}
          alt="Figma Icon"
          width="30"
          height="30"
        />
        <img
          className="header__logo"
          src={require("../../assets/logo/github.png")}
          alt="Github Icon"
          width="30"
          height="30"
        />
      </div>
    </header>
  );
}

export default Header;
