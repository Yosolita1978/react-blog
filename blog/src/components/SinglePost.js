import React, { Component } from 'react';
import * as contentful from 'contentful';
import * as Markdown from 'react-markdown';


class SinglePost extends Component{

  constructor(props) {
     super(props);
     this.state = {currentPost:null};
   }

client = contentful.createClient({
     space: 'on3t7p55b9vo',
     accessToken: 'e5ec91831b489dc0e4d81a2755bf84e9e1ddc71c3147e0f2674ca21dfc454e27' })

  componentDidMount() {
    const entry_id = this.props.match.params.postid;
      this.fetchPost(entry_id).then(this.setPost);
    }

  fetchPost = entry_id => this.client.getEntry(entry_id);

  setPost = response => {
      this.setState({
        currentPost: response.fields

      });
      console.log(this.state.currentPost);
    }

  render(){

    // const { postid } = this.props.match.params;
    const post = this.state.currentPost;
    if(!post){
      return null;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
          <h2 className="post-title">{post.title}</h2>
          <h3 className="post-subtitle">{post.subtitle}</h3>
          <p className="post-meta">Posted by {post.author} on {post.date}</p>
          <Markdown source={post.content} />
          <hr/>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePost;
