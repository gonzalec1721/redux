import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log("npWP", nextProps.newPost);
  //   // if (nextProps.newPost) {
  //   this.props.posts.unshift(nextProps.newPost);
  //   //}
  // }

  componentDidUpdate(prevProps) {
    console.log("prevProps", prevProps);
    if (this.props.newPost) {
      console.log("1st", this.props.newPost);
      this.props.posts.unshift(this.props.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <div>
          <h1>Posts</h1>
          {postItems}
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
