import React, { Component } from 'react';
import Postpreview from './Postpreview';

class PostContainer extends Component{
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
          <Postpreview
          title="Man must explore, and this is exploration at its greatest"
          subtitle="Problems look mighty small from 150 miles up"
          author=" Cristina Rodriguez "
          date ="September 24, 2017"/>
          <hr/>
          <Postpreview
          title="I believe every human has a finite number of heartbeats. I don\'t intend to waste any of mine."
          subtitle=""
          author=" Cristina Rodriguez "
          date ="August 24, 2017"/>
          <hr/>
          <Postpreview
          title="Science has not yet mastered prophecy"
          subtitle="We predict too much for the next year and yet far too little for the next ten."
          author=" Cristina Rodriguez "
          date ="July 24, 2017"/>
          <hr/>
          <Postpreview
          title="Failure is not an option"
          subtitle="I gonna learn React and I gonna love it."
          author=" Cristina Rodriguez "
          date ="July 24, 2017"/>
          </div>
        </div>
      </div>
    );
  }
}

export default PostContainer;
