import React from "react";

import { Card, Col, Row } from "antd";
import classes from "./Post.module.css";
import CreateComment from "./CreateComment";
import AddComment from "./AddComment";

const Post = () => {
  const getText = () => {
    return <p>Posts</p>;
  };

  return (
    <div className={classes.container}>
      <Col span={16}>
        <Card className={classes.card} title="User1">
          Post1
          {<CreateComment />}
        </Card>
      </Col>

      <AddComment />

      <Col span={16}>
        <Card className={classes.card} title="User2">
          Post2
          {<CreateComment />}
        </Card>
      </Col>

      <AddComment />

      <Col span={16}>
        <Card className={classes.card} title="User3">
          Post3
          {<CreateComment />}
        </Card>
      </Col>

      <AddComment />

      <Col span={16}>
        <Card className={classes.card} title="User3">
          Post4
          {<CreateComment />}
        </Card>
      </Col>

      <AddComment />

      <Col span={16}>
        <Card className={classes.card} title="User3">
          Post5
          {<CreateComment />}
        </Card>
      </Col>

      <AddComment />

    </div>
  );
};

export default Post;
