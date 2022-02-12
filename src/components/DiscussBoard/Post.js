import React from "react";

import { Card, Col, Row } from "antd";
import classes from "./Post.module.css";
import CreateComment from "./CreateComment";

const Post = () => {
  const getText = () => {
    return <p>Posts</p>;
  };

  return (
    <div>
      <Col span={20}>
        <Card className={classes.card} title="User1">
          Post1
        </Card>
        <CreateComment />
      </Col>
      <Col span={20}>
        <Card className={classes.card} title="User2">
          Post2
        </Card>
        <CreateComment />
      </Col>
      <Col span={20}>
        <Card className={classes.card} title="User3">
          Post3
        </Card>
        <CreateComment />
      </Col>
      <Col span={20}>
        <Card className={classes.card} title="User3">
          Post4
        </Card>
        <CreateComment />
      </Col>
      <Col span={20}>
        <Card className={classes.card} title="User3">
          Post5
        </Card>
        <CreateComment />
      </Col>
    </div>
  );
};

export default Post;
