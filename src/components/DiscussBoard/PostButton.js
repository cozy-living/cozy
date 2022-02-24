import React from "react";

import { Menu } from "antd";

const PostButton = (props) => {
  return (
    <div>
      <Menu.Item onClick={props.onShowPost}>posts</Menu.Item>
      <Menu.Item onClick={props.onShowMyPost}>My posts</Menu.Item>
    </div>
  );
};


export default PostButton;