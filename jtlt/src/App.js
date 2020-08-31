import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/header";
import Search from "./components/Search";
import { TwitterContainer } from "./container/TwitterContainer";
import { DefinitionContainer } from "./container/DefinitionContainer";

class App extends Component {
  state = {
    finalsearch: "",
  };

  //Search value
  search = (search) => {
    this.setState({ finalsearch: search });
  };

  //Jump search to jump via hotlinks
  jumpSearch = (jumpSearch) => {
    this.setState({ finalsearch: jumpSearch });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Search search={this.search} />
          <DefinitionContainer
            defo={this.state.definition}
            search={this.state.finalsearch}
          />
          <TwitterContainer
            tweets={this.state.tweets}
            search={this.state.finalsearch}
            currentId={this.state.currentId}
          />
        </div>
      </div>
    );
  }
}

export default App;
