import React from 'react';
import logo from './logo.svg';
import './App.css';
 import CheckboxDemo from './Components/Checkbox/Checkbox';
import Home from './Features/Home';
import Form from "./Features/Form/Form"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      {/* <Home/> */}
      <Form/>
      
      </header>
    </div>
  );
}

export default App;
