import React from "react";

import { Card, Comment, Tooltip, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import classes from "./PostEntry.module.css";
import MyPostButton from "./MyPostButton";

const PostEntry = (props) => {
  return (
    <ul style={{marginLeft: "-40px"}}>
      <Card title={props.title} className={classes.card}>
        <li>
          <Comment
            author={<a href={"mailto:" + props.email}>{props.name}</a>}
            avatar={<Avatar icon={<UserOutlined />} alt={props.name} />}
            content={<Tooltip title={props.suite}>{props.detail}</Tooltip>}
            datetime={<span>{props.date}</span>}
          />
        </li>
        <MyPostButton />
      </Card>
    </ul>
  );
};

export default PostEntry;
