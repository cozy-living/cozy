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
            postid={post.postid}
            title={post.title}
            detail={post.detail}
            url={post.url}
            fetchHandler={props.fetchHandler}
          />
        ))}
      </Col>
    </div>
  );
};

export default MyPost;
