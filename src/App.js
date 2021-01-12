import React, { Component } from "react";
import Head from "./components/Head/head.jsx";
import Articles from "./components/Articles/articles.jsx";
import Foot from "./components/Foot/foot.jsx";
import NoImage from "./imgs/no_image.png";
import "./App.css";
const axios = require("axios");

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
    this.setState({
      images: [],
      titles: [],
      authors: [],
      descriptions: [],
      sources: [],
      urls: [],
    });
    this.getArticles(newPage);
    window.scrollTo(0, 0);
  }

  getArticles(pageNum) {
    axios({
      method: "get",
      url: `https://newsapi.org/v2/everything?sortBy=popularity&pageSize=9&page=${pageNum}&qInTitle=coffee&excludeDomains=google.com,reuters.com,themarketfeed.com,yankodesign.com,adsoftheworld.com,stereogum.com,designboom.com,bloomberg.com,techinasia.com,the-gadgeteer.com&language=en&apiKey=fca558e258b84f8b9b58d0988a853eab`,
      responseType: "stream",
    }).then((response) => {
      console.log(response.data.articles);
      var images = [];
      var titles = [];
      var authors = [];
      var descriptions = [];
      var sources = [];
      var urls = [];
      for (let i = 0; i < 9; i++) {
        if (response.data.articles[i].urlToImage !== null) {
          images[i] = response.data.articles[i].urlToImage;
        } else {
          images[i] = NoImage;
        }
        titles[i] = response.data.articles[i].title;
        authors[i] = response.data.articles[i].author;
        descriptions[i] = response.data.articles[i].description;
        sources[i] = response.data.articles[i].source.name;
        urls[i] = response.data.articles[i].url;
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
