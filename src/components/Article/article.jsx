import React, { Component } from "react";
import "./article.css";
import Loading from "../../imgs/loading.gif";

class Article extends Component {
  state = {};
  render() {
    return (
      <div className="article">
        {this.props.image !== undefined && (
          <img src={this.props.image} className="article-image" alt="..."></img>
        )}
        {this.props.image === undefined && (
          <img
            style={{ width: "100px" }}
            src={Loading}
            className="article-loading"
            alt="..."
          ></img>
        )}
        {this.props.image !== undefined && (
          <>
            <div className="article-body">
              <div className="article-title">{this.props.title}</div>
              <div className="article-author">{this.props.author}</div>
              <div className="article-description">
                {this.props.description}
              </div>
            </div>
          </>
        )}
        {this.props.image !== undefined && (
          <a href={this.props.url} className="article-btn">
            {this.props.source}
          </a>
        )}
      </div>
    );
  }
}

export default Article;
