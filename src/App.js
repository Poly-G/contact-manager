import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import Provider from './context';
import AddContact from './components/contacts/AddContact';
import About from './components/pages/About';


function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route
              exact path="/"
              component={Contacts}
              />
              <Route
              exact path="/contact/add"
              component={AddContact}
              />
              <Route
              exact path="/about"
              component={About}
              />
              
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
