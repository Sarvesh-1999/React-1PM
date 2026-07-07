import { Component } from "react";

class StatesInCBC extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  };

  decrement = () => {
    this.setState((prev) => {
      return prev.count > 0 ? { count: prev.count - 1 } : { count: 0 };
    });
  };

  reset = () => {
    this.setState((prev) => {
      return { count: 0 };
    });
  };

  render() {
    return (
      <div>
        <h1>Learn States in Class Based</h1>
        <h2>Counter : {this.state.count}</h2>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}
export default StatesInCBC;
