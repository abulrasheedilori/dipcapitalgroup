import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { showNews } from "../../redux-store/newsReducer";
import { getDetailedContent, getMoreContent } from "../../Utils";
import Item from "../shared-components/Item";

function Details() {
  let { newsId } = useParams();
  const news = useSelector(showNews);
  const newItem = getDetailedContent(newsId, news);
  const moreItems = getMoreContent(newsId, news);

  return (
    <div>
      <div className="subheader__inner--row1">
        <p className="subheader__inner--row1-p1">By Ryan Jackson</p>
        <p className="subheader__inner--row1-p2">2 month ago</p>
      </div>
      <div className="details-cont">
        <h2 className="subheader__inner--row2">{newItem[0].title.rendered}</h2>
        <p className="subheader__inner--row3">{newItem[0].content.rendered}</p>
      </div>
      <h2 className="subheader__inner--row2">More Articles</h2>
      <div className="news-main">
        {moreItems ? (
          moreItems
            .slice(1, 4)
            .map((item) => <Item key={item.id} post={item} index={item.id} />)
        ) : (
          <div>
            <h3>No more items</h3>
            <p>Please, check your internet connection</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Details;
