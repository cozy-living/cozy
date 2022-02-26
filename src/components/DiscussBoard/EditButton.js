import React, { useState } from "react";

import { message } from "antd";
import classes from "./MyPostButton.module.css";
import { editPost } from "../../utils";

const EditButton = (props) => {
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDetail, setEditedDetail] = useState("");

  const titleChangeHandler = (event) => {
    setEditedTitle(event.target.value);
    console.log(editedTitle);
  };

  const detailChangeHandler = (event) => {
    setEditedDetail(event.target.value);
    console.log(editedDetail);
  };

  const onChangeHandler = async (event) => {
    event.preventDefault();

    let userId = localStorage.getItem("userId");
    const formData = new FormData();
    formData.append("title", editedTitle);
    formData.append("content", editedDetail);

    try {
      await editPost(userId, props.postId, formData);
      message.success("post editted successfully!");
    } catch (error) {
      message.error(error.message);
    } finally {
      props.fetchHandler();
    }
  };

  return (
    <form>
      <label>Your Title</label>
      <textarea onChange={titleChangeHandler}>{props.data.title}</textarea>
      <label className={props.data.content}>Your Post Detail</label>
      <textarea rows="5" id="detail" onChange={detailChangeHandler}>
        {props.data.content}
      </textarea>
      <div className={classes.buttonContainer}>
        <button onClick={onChangeHandler}>Submit</button>
      </div>
    </form>
  );
};

export default EditButton;
