import "./styles.css";
import React from "react";
import ResultComponent from "./Components/ResultComponent";
import KeyButtonComponent from "./Components/KeyButtonComponent";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      res: ""
    };
  }

  calculate = () => {
    let ans = eval(this.state.res);
    this.setState({
      res: ans
    });
  };

  clearInput = () => {
    this.setState({
      res: ""
    });
  };

  moveBack = () => {
    this.setState({
      res: this.state.res.slice(0, -1)
    });
  };

  onClick = (btn) => {
    if (btn == "C") {
      this.clearInput();
    } else if (btn === "CE") {
      this.moveBack();
    } else if (btn === "=") {
      this.calculate();
    } else {
      this.setState({
        res: this.state.res + btn
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Calculator App</h1>
        <div className="calWrapper">
          <ResultComponent result={this.state.res} />
          <KeyButtonComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}
