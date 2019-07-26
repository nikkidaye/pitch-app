import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import MainCategories from './components/MainCategories';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import SingleCategory from './components/SingleCategory';
import UserProfile from './components/UserProfile';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
