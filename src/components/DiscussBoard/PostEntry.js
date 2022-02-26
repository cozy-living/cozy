import React, { createElement, useState } from "react";

import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";

import { Card, Comment, Tooltip, Avatar, Image } from "antd";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
  UserOutlined,
} from "@ant-design/icons";
import classes from "./PostEntry.module.css";
import NewComment from "./NewComment";

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

  function get_url_extension(url) {
    return url.split(/[#?]/)[0].split(".").pop().trim().toLowerCase();
  }

  let urlFile = <p>Found No URL</p>;

  if (
    get_url_extension(props.url) === "jpg" ||
    get_url_extension(props.url) === "png" ||
    get_url_extension(props.url) === "jpeg"
  ) {
    urlFile = <Image src={props.url} />;
  }

  if (
    get_url_extension(props.url) === "mov" ||
    get_url_extension(props.url) === "mp4" ||
    get_url_extension(props.url) === "avi" ||
    get_url_extension(props.url) === "wmv"
  ) {
    urlFile = (
      <ReactPlayer
        url={props.url}
        width="100%"
        height="100%"
        controls={true}
      ></ReactPlayer>
    );
  }

  if (
    get_url_extension(props.url) === "mp3" ||
    get_url_extension(props.url) === "flac"
  ) {
    urlFile = <ReactAudioPlayer src={props.url} controls></ReactAudioPlayer>;
  }

  return (
    <ul>
      <Card title={props.title} className={classes.card}>
        <li>
          <Comment
            // actions={actions}
            author={<a href={"mailto:" + props.email}>{props.name}</a>}
            avatar={<Avatar icon={<UserOutlined />} alt={props.name} />}
            content={<Tooltip title={props.suite}>{props.detail}</Tooltip>}
            datetime={<span>{props.date}</span>}
          />
          {urlFile}
        </li>
        <NewComment name={props.name} />
      </Card>
    </ul>
  );
};

export default PostEntry;
