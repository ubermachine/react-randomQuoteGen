import React from 'react';
//import ReactDOM from 'react-dom'
import './App.css';
import Quotes from './components/quotes'
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from "jQuery";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Quotes/>
      </header>
    </div>
  );
}

export default App;
