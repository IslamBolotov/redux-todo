import React from 'react';
import './App.css';
import List from './components/List/List';
import AddTask from './components/AddTask/AddTask'



const App = () => {
  return (
    <div className="App">
      <AddTask />
      <List />
    </div>
  );
}

export default App;
