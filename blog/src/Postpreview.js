import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const Postpreview = props => (

    <div>
    { props.posts.map(({sys, fields}, i) =>
    <div key={fields.id} className="post-preview">
        <Link to={'/post/' + sys.id + '/'}>
          <h2 className="post-title">{fields.title}</h2>
        </Link>
          <h3 className="post-subtitle">{fields.subtitle}</h3>
        <p className="post-meta">Posted by {fields.author} on {fields.date}</p>
      </div>
    )}
    </div>
  );

export default Postpreview;
