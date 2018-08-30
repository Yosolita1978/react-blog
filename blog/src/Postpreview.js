import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Postpreview extends Component{
  render(){
    const { post } = this.props;
    return(
      <div className="post-preview">
        <Link to={'/post/' + post.id + '/'}>
          <h2 className="post-title">{post.title}</h2>
        </Link>
          <h3 className="post-subtitle">{post.subtitle}</h3>
        <p className="post-meta">Posted by {post.author} on {post.date}</p>
      </div>
    );
  }
}

export default Postpreview;
