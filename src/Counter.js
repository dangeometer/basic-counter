import React, { Component } from 'react';

export default class Counter extends Component {
state = {
  count: 0
}

  //bind event just like below - can do this because of babel plugin
  // this.handleIncrement = this.handleIncrement.bind(this)
  // this is a stage 3 proposal
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleDecement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }


  reset = () => {
    this.setState({
      count: 0
    });
  }

  render() {
    const {count} = this.state;
    return (
      <section className="Counter">
        <h1>Count: { count }</h1>
        <button onClick={this.handleIncrement} className="full-width">Increment</button>
        <button onClick={this.handleDecement} className="full-width">Decrement</button>
        <button onClick={this.reset} className="full-width">Reset</button>
      </section>
    );
  }
}
