import React from "react";

import { Comment, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const AddComment = ({ children }) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<a>Hanwen Liu</a>}
    avatar={
      <Avatar
        style={{
          backgroundColor: "#87d068",
        }}
        icon={<UserOutlined />}
      />
    }
    content={<p>Nice Post, love it ;)</p>}
  >
    {children}
  </Comment>
);

export default AddComment;
