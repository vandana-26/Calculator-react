import React from "react";

export default class ResultComponent extends React.Component {
  render() {
    return (
      <div className="result">
        <p>{this.props.result}</p>
      </div>
    );
  }
}
