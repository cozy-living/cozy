import React from "react";
import AddComment from "./AddComment";

import classes from "./CreateComment.module.css";

const CreateComment = () => {
  return (
    <div className={classes.container}>
      <button className={classes.button}>Reply</button>
    </div>
  );
};

export default CreateComment;
