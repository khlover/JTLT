import React, { Component } from "react";
import PropTypes from "prop-types";

class Definition extends Component {
  render() {
    return (
      <div>
        <h2>
          English: {this.props.eng} {this.props.altEng}
        </h2>
        <h2>Kana: {this.props.kana}</h2>
        <h2>Kanji :{this.props.kanji}</h2>
      </div>
    );
  }
}

Definition.propTypes = {
  defo: PropTypes.object.isRequired,
};

export default Definition;
