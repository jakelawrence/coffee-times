import React, { Component } from "react";
import Head from "./components/Head/head.jsx";
import Articles from "./components/Articles/articles.jsx";
import Foot from "./components/Foot/foot.jsx";
import NoImage from "./imgs/no_image.png";
import "./App.css";

class App extends Component {
  state = {
    pageNum: 1,

    images: [],
    titles: [],
    authors: [],
    descriptions: [],
    sources: [],
    urls: [],
  };

  componentDidMount() {
    this.getArticles(this.state.pageNum);
  }

  changePage(newPage) {
    console.log("update");
    this.setState({ pageNum: newPage });
    this.getArticles(newPage);
    window.scrollTo(0, 0);
  }

  getArticles(pageNum) {
    const NewsAPI = require("newsapi");
    const newsapi = new NewsAPI("fca558e258b84f8b9b58d0988a853eab");
    newsapi.v2
      .everything({
        sortBy: "popularity",
        pageSize: 9,
        page: pageNum,
        qInTitle: "coffee",
        excludeDomains:
          "google.com,reuters.com,themarketfeed.com,yankodesign.com,adsoftheworld.com,stereogum.com,designboom.com,bloomberg.com,techinasia.com,the-gadgeteer.com",
        language: "en",
        apiKey: "fca558e258b84f8b9b58d0988a853eab",
      })
      .then((response) => {
        var images = [];
        var titles = [];
        var authors = [];
        var descriptions = [];
        var sources = [];
        var urls = [];
        for (let i = 0; i < 9; i++) {
          if (response.articles[i].urlToImage) {
            images[i] = response.articles[i].urlToImage;
          } else {
            images[i] = NoImage;
          }
          titles[i] = response.articles[i].title;
          authors[i] = response.articles[i].author;
          descriptions[i] = response.articles[i].description;
          sources[i] = response.articles[i].source.name;
          urls[i] = response.articles[i].url;
        }
        this.setState({ images, titles, authors, descriptions, sources, urls });
      });
  }

  render() {
    return (
      <div className="App">
        <Head />
        <Articles
          pageNum={this.state.pageNum}
          images={this.state.images}
          titles={this.state.titles}
          authors={this.state.authors}
          descriptions={this.state.descriptions}
          sources={this.state.sources}
          urls={this.state.urls}
        />
        <Foot
          pageNum={this.state.pageNum}
          changePage={this.changePage.bind(this)}
        />
      </div>
    );
  }
}

export default App;
