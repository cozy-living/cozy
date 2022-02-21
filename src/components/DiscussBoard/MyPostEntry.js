import React from "react";

import { Card, Comment, Tooltip, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import classes from "./PostEntry.module.css";
import MyPostButton from "./MyPostButton";

const PostEntry = (props) => {
  return (
    <ul>
      <Card title={props.title} className={classes.card}>
        <li>
          <Comment
            author={
              <a
                href={"mailto:" + props.email}
                Tooltip={<span>{props.residence}</span>}
              >
                {props.name}
              </a>
            }
            avatar={<Avatar icon={<UserOutlined />} alt={props.name} />}
            content={props.detail}
            datetime={<span>{props.date}</span>}
          />
        </li>
        <MyPostButton />
      </Card>
    </ul>
  );
};

export default PostEntry;
