import React, { useState } from "react";
import axios from "axios";

import { Modal, Button, message } from "antd";
import classes from "./MyPostButton.module.css";
import { PropertySafetyFilled } from "@ant-design/icons";

const MyPostButton = (props) => {
  const [visible, setVisible] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDetail, setEditedDetail] = useState("");

  const titleChangeHandler = (event) => {
    setEditedTitle(event.target.value);
    console.log(event.target.value);
    console.log(editedTitle);
  };

  const detailChangeHandler = (event) => {
    setEditedDetail(event.target.value);
    console.log(event.target.value);
    console.log(editedDetail);
  };

  const showModal = () => {
    setVisible(true);
  };

  const onCancelHandler = () => {
    setVisible(false);
  };

  const onChangeHandler = (event) => {
    event.preventDefault();

    const post = {
      title: editedTitle,
      content: editedDetail,
    };

    props.onEdit(post);
    setVisible(false);
  };

  const deletePostHanlder = () => {
    let userId = localStorage.getItem("userId");
    axios
      .delete(`http://18.216.82.23:8080/${userId}/posts/${props.postId}`)
      .then((response) => {
        props.fetchHandler();
        message.success("Successfully Removed!");
      })
      .catch((error) => {
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
          <label>Your Title</label>
          <textarea onChange={titleChangeHandler}>{props.title}</textarea>
          <label className={classes.detail}>Your Post Detail</label>
          <textarea rows="5" id="detail" onChange={detailChangeHandler}>
            {props.content}
          </textarea>
          <div className={classes.buttonContainer}>
            <button onClick={onChangeHandler}>Submit</button>
          </div>
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
