import React, { Component } from "react";
import Article from "../Article/article.jsx";
import "./articles.css";

class Articles extends Component {
  state = {};

  render() {
    var articles = [];
    for (let i = 0; i < 9; i++) {
      articles.push(
        <Article
          key={"article-" + i}
          image={this.props.images[i]}
          title={this.props.titles[i]}
          author={this.props.authors[i]}
          description={this.props.descriptions[i]}
          source={this.props.sources[i]}
          url={this.props.urls[i]}
        />
      );
    }

    return <div className="article-container">{articles}</div>;
  }
}

export default Articles;
