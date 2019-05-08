import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Contact from './components/Contact';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Contact />
      </div>
    </div>
  );
}

export default App;
