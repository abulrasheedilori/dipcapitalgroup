import React from "react";

function SubHeader() {
  return (
    <div className="subheader">
      <img
        className="subheader__img"
        src={require("../../assets/images/optimizing-css.png")}
        alt="Twitter icon"
      />
      <div className="subheader__inner">
        <div className="subheader__inner--row1">
          <p className="subheader__inner--row1-p1">Frontend</p>
          <p className="subheader__inner--row1-p2">1 hour</p>
        </div>
        <h2 className="subheader__inner--row2">
          Optimizing CSS load for faster page loads
        </h2>
        <p className="subheader__inner--row3">
          Not long ago, I decided to improve the loading times of my website. It
          already loads pretty fast but I kew there is space for improvement and
          one of them was css loading. I will walk you through and show you how
          you can improve the performance of your web application.
          <br />
          To see how the web process html tags into a function web pages, we
          first need to understand what html, css and javascript is.
        </p>
        <div className="subheader__inner--row4">
          <p>3 mins Read</p>
          <img
            className="header__img--read"
            src={require("../../assets/images/read.png")}
            alt="Dribbble icon"
          />
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
