import React, { Component } from 'react';

export default class CommentBox extends Component {
  constructor(props) {
    super(props)

    this.state = { comment: '' }
  }


  handleChange(event) {
    this.setState({ comment: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ comment: '' })
  }

  render() {
    // controlled input. gettting value of area whenever someone  types something in
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)} />
        <button action="submit">Submit Comment</button>
      </form>
    );
  }
}
