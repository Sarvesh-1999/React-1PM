import React, { Component } from "react";

export default class LifeCycleInCBC extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => this.setState((prev) => ({ count: prev.count + 1 }));

  componentDidMount() {
    console.log("MOUNTED");
  }

  componentDidUpdate() {
    console.log("UPDATED");
  }

  componentWillUnmount() {
    console.log("UNMOUNTED");
  }

  render() {
    return (
      <div>
        <h1>LifeCycleInCBC - {this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}
