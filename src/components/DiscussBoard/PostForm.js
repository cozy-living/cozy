import React, { useEffect, useState } from "react";
import axios from "axios";

import classes from "./PostForm.module.css";

const PostForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredDetail, setEnteredDetail] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const detailChangeHandler = (event) => {
    setEnteredDetail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const post = {
      name: enteredName,
      email: enteredEmail,
      title: enteredTitle,
      date: enteredDate,
      detail: enteredDetail,
    };

    props.onSavePostData(post);
    setEnteredName("");
    setEnteredEmail("");
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredDetail("");
  };

  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const fileUploadHandler = () => {
  };

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="your full name"
          value={enteredName}
          onChange={nameChangeHandler}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          placeholder="your email with @"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="title">Post Title</label>
        <input
          type="text"
          id="title"
          placeholder="your post title"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="name">Date</label>
        <input
          type="text"
          id="date"
          placeholder="Date XX-XX-XXXX"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="name">Post Detail</label>
        <textarea
          rows="5"
          id="detail"
          placeholder="your post detail"
          value={enteredDetail}
          onChange={detailChangeHandler}
        ></textarea>
      </div>
      <div className={classes.container}>
        <input type="file" onChange={fileSelectedHandler}></input>
        <button onClick={fileUploadHandler}>Upload</button>
      </div>
      <button onClick={submitHandler} style={{ marginTop: "1rem" }}>
        Submit
      </button>
    </form>
  );
};

export default PostForm;
