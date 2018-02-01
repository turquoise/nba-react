import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
//import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
