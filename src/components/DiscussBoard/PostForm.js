import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import "./PostForm.css";

import classes from "./PostForm.module.css";

const PostForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDetail, setEnteredDetail] = useState("");
  const [file, setFile] = useState([]);
  const [showModal, SetShowModal] = useState(props.onVisible);

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
    SetShowModal(false);
  };

  //   const onSubmitHandler = (event) => {
  //     event.preventDefault();

  //     let userId = localStorage.getItem("userId");
  //     let web = "http://18.216.82.23/8080/" + userId + "/posts";

  //     const data = new FormData();

  //     for (let i = 0; i < files.length; i++) {
  //       data.append("file", files[i]);
  //     }

  //     axios
  //       .post(web, data)
  //       .then((response) => {
  //         toast.success("Upload Success");
  //         props.onSuccess(response.data);
  //       })
  //       .catch((e) => {
  //         toast.error("Upload Error");
  //       });
  //   };

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
        <form method="post" action="#" id="#">
          <div className="form-group files">
            <label>Upload Your File</label>
            <input
              type="file"
              onChange={fileSelectedHandler}
              className="form-control"
            />
          </div>
          {/* <div className={classes.container}>
            <button>Upload</button>
          </div> */}
        </form>
      </div>
      <button onClick={submitHandler} style={{ marginTop: "1rem" }}>
        Submit
      </button>
    </div>
  );
};

export default PostForm;
