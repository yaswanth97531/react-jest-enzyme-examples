import React from 'react';

import './App.css';
import Add from './Containers/Add/Add';
import CounterList from './Containers/CounterList/CounterList';
import List from './Containers/ItemsList/List';
import Calculator from './Containers/Calculator/Calculator';
import DataTable from './Containers/DataTable/DataTable';

const cols = [{
    header: 'ID',
    name: 'id'
  },
  {
    header: 'Name',
    name: 'name'
  },
  {
    header: 'Email',
    name: 'email'
  }
];
const data = [{
    id: 5,
    name: 'John',
    email: 'john@example.com'
  },
  {
    id: 6,
    name: 'Liam',
    email: 'liam@example.com'
  },
  {
    id: 7,
    name: 'Maya',
    email: 'maya@example.com',
    someTest: 10
  },
  {
    id: 8,
    name: 'Oliver',
    email: 'oliver@example.com',
    hello: 'hello world'
  },
  {
    id: 25,
    name: 'Amelia',
    email: 'amelia@example.com'
  }
];

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
        <hr/>
        {/* <DataTable cols={cols} data={data} /> */}
        <DataTable cols={[]} data={[]} />
      </header>
    </div>
  );
}

export default App;
