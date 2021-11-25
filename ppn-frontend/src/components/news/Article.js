import React from "react";
import { Link } from "react-router-dom";
import "./News.css";
const Article = (props) => {
  const { card } = props;
  return (
    <Link to="/news">
      <div className="article">
        <figure className="snip1584 cursor-pointer">
          <img src={card.image} alt="" />
          <figcaption>
            <h3>{card.title}</h3>
            <button>
              Chi tiết <i className="fad fa-chevron-double-right text-sm"></i>
            </button>
          </figcaption>
        </figure>
        <div className="article-title">
          <h3>{card.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Article;
