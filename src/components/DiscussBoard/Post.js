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

  return (
    <div className={classes.container}>
      <Col span={12}>
        {props.data.map((post) => (
          <PostEntry
            id={post.id}
            name={post.name}
            email={post.email}
            suite={post.suite}
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
