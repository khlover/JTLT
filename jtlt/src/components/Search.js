import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
  };

  onChange = (e) => this.setState({ search: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.search(this.state.search);
    this.setState({ search: "" });
  };

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="seach"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Search vocabulary"
          value={this.state.search}
          onChange={this.onChange}
        ></input>

        <input
          type="submit"
          value="Search"
          className="btn"
          style={{ flex: "1" }}
        ></input>
      </form>
    );
  }
}

export default Search;
