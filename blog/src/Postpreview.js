import React, { Component } from 'react';

class Postpreview extends Component{
  render(){
    return(
      <div className="post-preview">
        <a href="post.html">
          <h2 className="post-title">{this.props.title}</h2>
          <h3 className="post-subtitle">{this.props.subtitle}</h3>
        </a>
        <p className="post-meta">Posted by
          <a href="#">{this.props.author}</a>
          on {this.props.date}</p>
      </div>
    );
  }
}

export default Postpreview;
