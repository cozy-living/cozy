import React from "react";

import { Card, Comment, Tooltip, Avatar, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";
import classes from "./PostEntry.module.css";
import MyPostButton from "./MyPostButton";

const PostEntry = (props) => {
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
    <ul style={{ marginLeft: "-40px" }}>
      <Card title={props.title} className={classes.card}>
        <li>
          <Comment
            author={<a href={"mailto:" + props.email}>{props.name}</a>}
            avatar={<Avatar icon={<UserOutlined />} alt={props.name} />}
            content={<Tooltip title={props.suite}>{props.detail}</Tooltip>}
            datetime={<span>{props.date}</span>}
          />
          {urlFile}
        </li>
        <MyPostButton
          title={props.title}
          postId={props.postid}
          content={props.detail}
          fetchHandler={props.fetchHandler}
          onEdit={props.onEdit}
        />
      </Card>
    </ul>
  );
};

export default PostEntry;
