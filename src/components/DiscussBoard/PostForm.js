import React, { useState } from "react";
import "./PostForm.css";

import classes from "./PostForm.module.css";

const PostForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDetail, setEnteredDetail] = useState("");
  const [file, setFile] = useState([]);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const detailChangeHandler = (event) => {
    setEnteredDetail(event.target.value);
  };

  const fileSelectedHandler = (event) => {
    setFile(event.target.files[0]);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", enteredTitle);
    formData.append("content", enteredDetail);
    formData.append("file", file);

    props.onSavePostData(formData);
    setEnteredTitle("");
    setEnteredDetail("");
    setFile([]);
    props.onCancel(false);
  };


  return (
    <div className={classes.form}>
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
        <label htmlFor="name">Post Content</label>
        <textarea
          rows="5"
          id="detail"
          placeholder="your post content"
          value={enteredDetail}
          onChange={detailChangeHandler}
        ></textarea>
      </div>
      <div className={classes.container}>
        <form method="post" action="#" id="#">
          <div className="form-group files">
            <label>Upload Your File</label>
            <input
              type="file"
              onChange={fileSelectedHandler}
              className="form-control"
            />
          </div>
        </form>
      </div>
      <button onClick={submitHandler} style={{ marginTop: "1rem" }}>
        Submit
      </button>
    </div>
  );
};

export default PostForm;
