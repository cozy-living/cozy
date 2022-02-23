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
            date={post.date}
            detail={post.detail}
          />
        ))}
      </Col>
    </div>
  );
};

export default MyPost;
