import React, { Component } from 'react';
import * as contentful from 'contentful'


class SinglePost extends Component{

  render(){

    const { postid } = this.props.match.params;
    console.log(this.props);

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
          <hr/>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePost;
