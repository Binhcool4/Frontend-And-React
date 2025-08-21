import { Component } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface DetailPostProps {
  post: Post;
}

export default class DetailPost extends Component<DetailPostProps> {
  render() {
    const { id, title, content, author } = this.props.post;
    return (
      <div style={{ borderBottom: "1px solid gray", marginBottom: "10px" }}>
        <p>
          <b>Id: {id}</b>
        </p>
        <p>
          <b>Title: {title}</b>
        </p>
        <p>
          <b>Content: {content}</b>
        </p>
        <p>
          <b>Author: {author}</b>
        </p>
      </div>
    );
  }
}