import React from "react";

import { Card, Col, Row } from "antd";
import classes from "./Post.module.css";
import MyPostEntry from "./MyPostEntry";

const MyPost = (props) => {
  return (
    <div className={classes.container}>
      <Col span={12}>
        {props.data.map((post) => (
          <MyPostEntry
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
  );
};

export default MyPost;
