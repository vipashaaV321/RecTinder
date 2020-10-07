import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header'
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">
     <Header/>
     <TinderCards/>
     <SwipeButtons/>
    </div>
  );
}

export default App;
