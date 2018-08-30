import React, { Component } from 'react';
import Postpreview from './Postpreview';
import postsData from './data/postData';


class PostContainer extends Component{

  constructor(props) {
     super(props);
     this.state = { posts: postsData };
   }

  render(){
    const { posts } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
          {posts.map((post, index) =>
            <Postpreview key={index}
            post={post} />
          )}
          <hr/>
          </div>
        </div>
      </div>
    );
  }
}

export default PostContainer;
