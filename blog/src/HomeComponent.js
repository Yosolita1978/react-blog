import React, { Component } from 'react';
import PostContainer from './PostContainer';

class HomeComponent extends Component{
  render(){
    return(
      <div>
      <PostContainer />
      <div className="clearfix">
      <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
      </div>
      </div>
    );
  }
}

export default HomeComponent;
