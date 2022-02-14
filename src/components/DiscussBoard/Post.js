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
          {<CreateComment />}
        </Card>
      </Col>
      <Col span={20}>
        <Card className={classes.card} title="User2">
          Post2
          {<CreateComment />}
        </Card>
      </Col>
      <Col span={20}>
        <Card className={classes.card} title="User3">
          Post3
          {<CreateComment />}
        </Card>
      </Col>
      <Col span={20}>
        <Card className={classes.card} title="User3">
          Post4
          {<CreateComment />}
        </Card>
      </Col>
      <Col span={20}>
        <Card className={classes.card} title="User3">
          Post5
          {<CreateComment />}
        </Card>
      </Col>
    </div>
  );
};

export default Post;
