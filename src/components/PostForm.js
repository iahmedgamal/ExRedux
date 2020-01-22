import React, { Component } from 'react';
import { NewPosts } from '../actions/postActions';
import { connect } from 'react-redux';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const post = { title: this.state.title, body: this.state.body };
    this.props.NewPosts(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>title</label>
            <input
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <br></br>
          <div>
            <label>Body</label>
            <textarea
              type='text'
              name='body'
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <button type='submit'>suubmit</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  post: state.posts.post
});

export default connect(mapStateToProps, { NewPosts })(PostForm);
