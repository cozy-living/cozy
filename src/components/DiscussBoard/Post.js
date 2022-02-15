import React from "react";

import { Card, Col, Row } from "antd";
import classes from "./Post.module.css";
import CreateComment from "./CreateComment";
import AddComment from "./AddComment";
import PostEntry from "./PostEntry";

const Post = (props) => {
  const getText = () => {
    return <p>Posts</p>;
  };

  let newTitle = "OPS";

  return (
    <div className={classes.container}>
      <Col span={16}>
          {props.data.map((post) => (
            <PostEntry
              name={post.name}
              email={post.email}
              phone={post.phone}
              residence={post.residence}
              title={post.title}
              date={post.date}
              detail={post.detail}
            />
          ))}
      </Col>
    </div>
  );
};

export default Post;
