import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import PostContainer from './PostContainer'

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Header />
      <PostContainer />
      <div className="clearfix">
      <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
      </div>      
      <Footer />
      </div>
    );
  }
}

export default App;
