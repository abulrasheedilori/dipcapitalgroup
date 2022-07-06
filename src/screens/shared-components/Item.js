import React from "react";
import { Link } from "react-router-dom";

function Item({ post, index }) {
  return (
    <div className="news-cont">
      <img
        className="news-cont__img"
        src={require("../../assets/images/optimizing-css.png")}
        alt="Twitter icon"
      />
      <div className="news-cont__text-cont">
        <div className="news-cont__text-cont--row1">
          <p className="news-cont__text-cont--row1-p1">Frontend</p>
          <p className="news-cont__text-cont--row1-p2">3 hours</p>
        </div>
        <h2 className="news-cont__text-cont--row2">{post.title.rendered}</h2>
        <p className="news-cont__text-cont--row3">{post.excerpt.rendered}</p>
        <div className="subheader__inner--row4">
          <p>3 mins Read</p>
          <Link to={`/details/${index}`}>
            <img
              className="header__img--read"
              src={require("../../assets/images/read.png")}
              alt="Dribbble icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
