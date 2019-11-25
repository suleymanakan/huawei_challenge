import React from "react";
import { Request } from "./components/Request";
import "./App.css";
import Main from "./components/Main";

class App extends React.Component {
  state = {
    data: [],
    hasMore: false,
    dataCount: 20,
    searchResultData: [],
    limit: 20,
    searchValue: ""
  };
  componentDidMount() {
    const { dataCount } = this.state;
    const res = new Request(dataCount);
    res.get().then(data => {
      this.setState({ data, dataCount: 40, hasMore: true });
    });
  }
  // trading  load More function with scroll
  loadMore = () => {
    if (this.state.hasMore) {
      const { dataCount } = this.state;
      const res = new Request(dataCount);
      res.get(dataCount).then(data => {
        this.setState({ data, dataCount: dataCount + 20 });
      });
    }
  };
  //searh result function
  onSearchResult = value => {
    if (value !== "") {
      this.setState({ searchValue: value, limit: 20 });
      const { limit } = this.state;
      const response = new Request();
      response.getSearchResult(value, limit).then(data => {
        this.setState({ data: data, hasMore: false });
      });
    }else{
      this.homeFunc();
    }
  };
  // home page function
  homeFunc = () => {
    const dataCount = 20;
    const res = new Request(dataCount);
    res.get().then(data => {
      this.setState({ data, hasMore: true });
    });
  };
  // Lead more function
  loadMoreBtnFunc = () => {
    const { limit, searchValue } = this.state;

    const mLimit = limit + 20;
    const response = new Request();
    response.getSearchResult(searchValue, mLimit).then(data => {
      this.setState({ data, hasMore: false, limit: mLimit });
    });
  };
  render() {
    return (
      <Main
        homeFunc={this.homeFunc}
        searchValue={this.state.searchValue}
        data={this.state.data}
        hasMore={this.state.hasMore}
        loadMore={this.loadMore}
        onSearchResultFunc={this.onSearchResult}
        loadMoreBtnFunc={this.loadMoreBtnFunc}
      />
    );
  }
}

export default App;
