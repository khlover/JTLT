import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tweet as ShowTweet } from "react-twitter-widgets";

export class Tweet extends Component {
  render() {
    return <ShowTweet tweetId={this.props.id} />;
  }
}

export default Tweet;

Tweet.propTypes = {
  id: PropTypes.string.isRequired,
};
