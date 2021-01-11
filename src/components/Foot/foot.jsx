import React, { Component } from "react";
import "./foot.css";

class Foot extends Component {
  state = {};

  componentDidMount() {
    this.getPageNumbers(this.props.pageNum);
  }

  changePage(newPage) {
    this.props.changePage(newPage);
    this.getPageNumbers(newPage);
  }

  getPageNumbers(pageNum) {
    var currentPage = pageNum;
    var previousPage = currentPage - 1;
    var nextPage = currentPage + 1;

    if (currentPage > 1) {
      this.setState({ previous: previousPage });
    }
    if (currentPage <= 10) {
      this.setState({ next: nextPage });
    }
    this.setState({ current: currentPage });
  }

  render() {
    var currentPage = this.state.current;
    return (
      <div className="pagination">
        {currentPage > 1 && (
          <>
            <div
              onClick={() => this.changePage(currentPage - 1)}
              className="pageBtn"
            >
              prev
            </div>
            {this.state.current === 10 && (
              <div onClick={() => this.changePage(8)} className="pageBtn">
                8
              </div>
            )}
            <div
              onClick={() => this.changePage(currentPage - 1)}
              className="pageBtn"
            >
              {currentPage - 1}
            </div>
          </>
        )}
        {currentPage === 1 && <div className="pageBtnDisabled">prev</div>}

        <div
          onClick={() => this.changePage(currentPage)}
          className="pageBtnCurrent"
        >
          {currentPage}
        </div>

        {currentPage < 10 && (
          <>
            <div
              onClick={() => this.changePage(currentPage + 1)}
              className="pageBtn"
            >
              {currentPage + 1}
            </div>
            {currentPage === 1 && (
              <div onClick={() => this.changePage(3)} className="pageBtn">
                3
              </div>
            )}
            <div className="pageBtn">next</div>
          </>
        )}
        {currentPage === 10 && <div className="pageBtnDisabled">next</div>}
      </div>
    );
  }
}

export default Foot;
