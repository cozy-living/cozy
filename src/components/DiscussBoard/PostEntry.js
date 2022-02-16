import React, { createElement, useState } from "react";

import { Card, Comment, Tooltip, Avatar } from "antd";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
  UserOutlined,
} from "@ant-design/icons";
import classes from "./PostEntry.module.css";
import CreateComment from "./CreateComment";

const PostEntry = (props) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <ul>
      <Card title={props.title} className={classes.card}>
        <li>
          <Comment
            actions={actions}
            author={
              <a
                href={"mailto:" + props.email}
                Tooltip={<span>{props.residence}</span>}
              >
                {props.name}
              </a>
            }
            avatar={<Avatar icon={<UserOutlined />} alt={props.name} />}
            content={<Tooltip title={props.residence}>{props.detail}</Tooltip>}
            datetime={<span>{props.date}</span>}
          />
        </li>
        <CreateComment />
      </Card>
    </ul>
  );
};

export default PostEntry;
