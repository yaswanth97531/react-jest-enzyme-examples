import React from 'react';
import logo from './logo.svg';
import './App.css';
import Add from './components/Add/Add';
import CounterList from './components/CounterList/CounterList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Add />
        <hr/>
        <CounterList />
        <hr/>
      </header>
    </div>
  );
}

export default App;
