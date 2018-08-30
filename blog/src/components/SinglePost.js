import React, { Component } from 'react';
import postsData from '../data/postData';


class SinglePost extends Component{

  render(){

    const { postid } = this.props.match.params;
    let post;
    for(let i = 0; i < postsData.length; i++){
      if(postsData[i].id === parseInt(postid, 10)){
        post = postsData[i];
      }
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
          <h2 className="post-title">{post.title}</h2>
          <h3 className="post-subtitle">{post.subtitle}</h3>
          <p className="post-meta">Posted by {post.author} on {post.date}</p>
          <p className="post">{post.content}</p>
          <hr/>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePost;
