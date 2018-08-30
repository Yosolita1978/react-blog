import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import HomeComponent from "./HomeComponent";
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Header />
      <Route exact path="/" component={HomeComponent} />
      <Footer />
      </div>
    );
  }
}

export default App;
