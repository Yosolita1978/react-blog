import React, { Component } from 'react';
import Postpreview from './Postpreview';
import * as contentful from 'contentful'


class PostContainer extends Component{

  constructor(props) {
     super(props);
     this.state = {posts: []};
   }

client = contentful.createClient({
     space: 'on3t7p55b9vo',
     accessToken: 'e5ec91831b489dc0e4d81a2755bf84e9e1ddc71c3147e0f2674ca21dfc454e27' })

  componentDidMount() {
      this.fetchPosts().then(this.setPosts);
    }

  fetchPosts = () => this.client.getEntries();

  setPosts = response => {
      this.setState({
        posts: response.items

      });
      // console.log(this.state.posts);
    }

  render(){

    return (
      <div className="container">
      <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
          <Postpreview posts={this.state.posts} />
          <hr/>
          </div>
          </div>
          </div>
    );
  }
}

export default PostContainer;
