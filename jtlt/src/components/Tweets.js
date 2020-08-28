import React, { Component } from "react";
import Tweet from "./Tweet";
import PropTypes from "prop-types";

class Tweets extends Component {
  render() {
    return <Tweet id={this.props.id} />;
  }
}

Tweets.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Tweets;
