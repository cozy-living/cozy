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
          {<MyPostButton />}
        </Card>
      </Col>
      <Col span={20}>
        <Card className={classes.card} title="User2">
          My Post #2
          {<MyPostButton />}
        </Card>
      </Col>
      <Col span={20}>
        <Card className={classes.card} title="User3">
          My Post #3
          {<MyPostButton />}
        </Card>
      </Col>
      <Col span={20}>
        <Card className={classes.card} title="User3">
          My Post #4
          {<MyPostButton />}
        </Card>
      </Col>
      <Col span={20}>
        <Card className={classes.card} title="User3">
          My Post #5
          {<MyPostButton />}
        </Card>
      </Col>
    </div>
  );
};

export default MyPost;
