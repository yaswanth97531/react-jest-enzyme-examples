import React from 'react';
import './App.css';
import Add from './Containers/Add/Add';
import CounterList from './Containers/CounterList/CounterList';
import List from './Containers/ItemsList/List';
import Calculator from './Containers/Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Add />
        <hr/>
        <CounterList />
        <hr/>
        {/* <List items={['one', 'two', 'three']} /> */}
        <List items={[]} />
        <hr />
        <Calculator />
      </header>
    </div>
  );
}

export default App;
