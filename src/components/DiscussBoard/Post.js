import React from "react";

import { Card, Col, Row } from "antd";
import classes from "./Post.module.css";
import PostEntry from "./PostEntry";

const Post = (props) => {
  return (
    <>
      <div className={classes.container}>
        <Col span={12}>
          {props.data.map((post) => (
            <PostEntry
              id={post.id}
              name={post.name}
              email={post.email}
              suite={post.suite}
              title={post.title}
              detail={post.detail}
              url={post.url}
            />
          ))}
        </Col>
      </div>
    </>
  );
};

export default Post;
