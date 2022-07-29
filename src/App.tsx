import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContainersCounter from './containers/ContainersCounter';
import ContainersTodo from './containers/ContainersTodo';
import TodoApp from './containers/TodoApp';
import GithubProfileLoader from './components/GithubProfileLoader';

function App() {
  return (
    <div className="App">
      <ContainersCounter />
      <ContainersTodo />
      <TodoApp />
      <GithubProfileLoader />
    </div>
  );
}

export default App;
