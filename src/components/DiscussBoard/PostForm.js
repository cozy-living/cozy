import React, { useEffect, useState } from "react";
import axios from "axios";

import classes from "./PostForm.module.css";

const PostForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDetail, setEnteredDetail] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const detailChangeHandler = (event) => {
    setEnteredDetail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const post = {
      title: enteredTitle,
      content: enteredDetail,
      file: selectedFile,
    };

    props.onSavePostData(post);
    setEnteredTitle("");
    setEnteredDetail("");
  };

  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const fileUploadHandler = () => {
    console.log(selectedFile);
  };

  return (
    <form className={classes.form}>
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
        <input type="file" onChange={fileSelectedHandler} />
      </div>
      <button onClick={submitHandler} style={{ marginTop: "1rem" }}>
        Submit
      </button>
    </form>
  );
};

export default PostForm;
