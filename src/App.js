import React from "react";
import Keypad from "./components/keypad";
import Display from "./components/display";
import "./App.css";

const endsWithSubtract = /\d[x/+‑]{1}‑$/;
const endsWithOperator = /[x+‑/]$/;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      runningSum: "0",
      input: "0",
      prevVal: "0",
      operator: false,
      decimal: false,
    };
  }

  handleNumber(event) {
    const value = event.target.value;
    const { runningSum, input } = this.state;
    if (value === "0" && input === "0") {
      this.setState({
        input: "0",
      });
    } else {
      this.setState({
        runningSum: (runningSum + value).replace(/^0+/, ""),
        input: (input + value).replace(/^0+/, ""),
        operator: false,
      });
    }
  }

  handleOperator(event) {
    const operation = event.target.value;
    const { runningSum, prevVal } = this.state;
    this.setState({ input: operation });
    if (!endsWithOperator.test(runningSum)) {
      this.setState({
        runningSum: runningSum + operation,
        prevVal: runningSum,
      });
    } else if (!endsWithSubtract.test(runningSum)) {
      this.setState({
        runningSum: (endsWithSubtract.test(runningSum + operation) ? runningSum : prevVal) + operation,
      });
    } else if (operation !== "‑") {
      this.setState({
        runningSum: prevVal + operation,
      });
    }
  }

  handleClear() {
    this.setState({
      runningSum: "0",
      input: "0",
      prevVal: "0",
      operator: false,
      decimal: false,
    });
  }

  handleDecimal() {
    const prevInput = this.state.runningSum.slice(this.state.runningSum.length - 1);
    const { input, runningSum } = this.state;
    if (this.state.equals === true) {
      this.setState({
        input: "0.",
        runningSum: "0.",
        equals: false,
      });
    } else if (!this.state.input.includes(".")) {
      this.setState({ equals: false });
      if (!/^[=?\.?0-9]+$/.test(prevInput) || (input === "0" && runningSum === "")) {
        this.setState({
          input: "0.",
          runningSum: runningSum + "0.",
        });
      } else {
        this.setState({
          input: runningSum.match(/(-?\d+\.?\d*)$/)[0] + ".",
          runningSum: runningSum + ".",
        });
      }
    }
  }

  handleBackspace() {
    const { runningSum, input } = this.state;
    if (input.length === 1) {
      this.setState({
        input: "0",
      });
    } else {
      this.setState({
        runningSum: runningSum.slice(0, -1),
        input: input.slice(0, -1),
      });
    }
  }

  handleEquals() {
    const { runningSum } = this.state;
    var sum = runningSum.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join("");
    let result = eval(sum);
    this.setState({
      runningSum: result.toString(),
      input: result.toString(),
      prevVal: result.toString(),
      operator: false,
    });
  }

  render() {
    return (
      <div id="calc-container">
        <div id="title">
          <h1>Calc Boy</h1>
        </div>
        <Display runningSum={this.state.runningSum} input={this.state.input} />
        <Keypad
          decimal={this.handleDecimal.bind(this)}
          equals={this.handleEquals.bind(this)}
          clear={this.handleClear.bind(this)}
          number={this.handleNumber.bind(this)}
          operator={this.handleOperator.bind(this)}
          backspace={this.handleBackspace.bind(this)}
        />
      </div>
    );
  }
}

export default App;
