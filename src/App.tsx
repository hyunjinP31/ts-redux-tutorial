import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContainersCounter from './containers/ContainersCounter';
import ContainersTodo from './containers/ContainersTodo';

function App() {
  return (
    <div className="App">
      <ContainersCounter />
      <ContainersTodo />
    </div>
  );
}

export default App;
