import React from "react";

import { Card, Col, Row } from "antd";
import classes from "./Post.module.css";
import MyPostButton from "./MyPostButton";

const MyPost = () => {
  return (
    <div>
      <Col span={20}>
        <Card className={classes.card} title="User1">
          My Post #1
        </Card>
        <MyPostButton />
      </Col>
      <Col span={20}>
        <Card className={classes.card} title="User2">
          My Post #2
        </Card>
        <MyPostButton />
      </Col>
      <Col span={20}>
        <Card className={classes.card} title="User3">
          My Post #3
        </Card>
        <MyPostButton />
      </Col>
      <Col span={20}>
        <Card className={classes.card} title="User3">
          My Post #4
        </Card>
        <MyPostButton />
      </Col>
      <Col span={20}>
        <Card className={classes.card} title="User3">
          My Post #5
        </Card>
        <MyPostButton />
      </Col>
    </div>
  );
};

export default MyPost;
