import React, { useState } from "react";
import axios from "axios";

import { Modal, Button, message } from "antd";
import classes from "./MyPostButton.module.css";
import EditButton from "./EditButton";
import { listPostByUser } from "../../utils";

const MyPostButton = (props) => {
  const [visible, setVisible] = useState(false);
  const [myPosts, setMyPosts] = useState([]);

  const showModal = () => {
    setVisible(true);
    getPostHanlder();
  };

  const onCancelHandler = () => {
    setVisible(false);
  };

  const getPostHanlder = async () => {
    let userId = localStorage.getItem("userId");
    try {
      const data = await listPostByUser(userId);
      console.log(data);
      console.log(props.postId);
      const transformedData = data.map((postData) => {
        return {
          title: postData.title,
          detail: postData.content,
        };
      });
      setMyPosts(transformedData);
    } catch (error) {
      message.error(error.message);
    }
  };

  const deletePostHanlder = () => {
    let userId = localStorage.getItem("userId");
    axios
      .delete(`http://18.216.82.23:8080/${userId}/posts/${props.postId}`)
      .then((response) => {
        message.success("Post successfully deleted!");
        props.fetchHandler();
      })
      .catch((error) => {
        message.error(error.message);
        console.log(error);
      });
  };

  return (
    <div className={classes.container}>
      <Modal
        visible={visible}
        title="Edit Your Post"
        onCancel={onCancelHandler}
        width={800}
        footer={[
          <Button key="back" onClick={onCancelHandler}>
            Return
          </Button>,
        ]}
      >
        <div className={classes.control}>
          <EditButton data={myPosts} postId={props.postId} />
        </div>
      </Modal>
      <button onClick={showModal} className={classes.edit}>
        Edit
      </button>
      <button onClick={deletePostHanlder} className={classes.delete}>
        Delete
      </button>
    </div>
  );
};

export default MyPostButton;
