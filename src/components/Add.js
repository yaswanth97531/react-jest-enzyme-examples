import React, { Component } from 'react';
import Form from './form';

class Add extends Component {
  render() {
    return (
      <div className="App">
        <h1>Add Function</h1>
        <p>I don't care</p>
        <Form operator='+' />
      </div>
    );
  }
}

export default Add;