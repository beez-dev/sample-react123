import React from 'react';
import logo from './logo.svg';
import './App.css';
import jsonComponentSchema from "./jsonComponentSchema"; 
import Builder from "./Builder";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Builder schema={jsonComponentSchema}/>
      </header>
    </div>
  );
}

export default App;
