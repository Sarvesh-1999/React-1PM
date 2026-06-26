import React, { Component } from "react";

export default class LifeCycleInCBC extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  };

  componentDidMount() {
    console.log("component mounted");
    this.id = setInterval(() => {
      console.log("API CALLED");
    }, 2000);
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component unmounted");
    clearInterval(this.id);
  }

  render() {
    return (
      <div>
        <h1>LifeCycleInCBC {this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}
