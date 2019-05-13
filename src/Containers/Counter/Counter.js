import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count : 0
  }

  increment = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    });
  }

  decrement = () => {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      }
    });
  }

  render() {
    return (
      <div>
        <p>Current count: { this.state.count }</p>
        <button id='increment' onClick={this.increment}>+++</button>
        <button id='decrement' onClick={this.decrement}>---</button>
      </div>
    );
  }
}

export default Counter;