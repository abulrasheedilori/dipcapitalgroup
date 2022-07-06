import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewsAsync, showNews } from "../../redux-store/newsReducer";

import SubHeader from "../shared-components/SubHeader";
import Footer from "../shared-components/Footer";
import Item from "../shared-components/Item";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchNewsAsync(dispatch);
  }, [dispatch]);

  const listOfNews = useSelector(showNews);

  return (
    <div aria-label="List Of news">
      <SubHeader />
      <div className="news-main">
        {listOfNews ? (
          listOfNews
            .slice(0, 6)
            .map((post) => <Item key={post.id} post={post} index={post.id} />)
        ) : (
          <h3>Hold on a minute, News is Loading </h3>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
