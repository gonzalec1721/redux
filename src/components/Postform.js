import React, { Component } from "react";
import { connect } from "react-redux";
import { createPosts } from "../actions/postActions";
class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.handlChange = this.handlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    this.props.createPosts(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              onChange={this.handlChange}
              type="text"
              name="title"
              value={this.state.title}
            />
          </div>
          <div>
            <label>Body: </label>
            <br />
            <textarea
              onChange={this.handlChange}
              name="body"
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
          <br />
        </form>
      </div>
    );
  }
}

export default connect(null, { createPosts })(Postform);
