import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.post) {
      this.props.posts.unshift(nextProps.post);
      console.log('recived post' + JSON.stringify(nextProps.post));
    } else {
      console.log('Nope');
    }
  }
  render() {
    const postItems = this.props.posts.map(post => (
      <div>
        <h3> {post.id}</h3>
        <h3> {post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.posts.items,
  post: state.posts.post
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
