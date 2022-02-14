import React from "react";

import classes from "./MyPostButton.module.css";

const MyPostButton = () => {
  return (
    <div className={classes.container}>
      <button className={classes.edit}>Edit</button>
      <button className={classes.delete}>Delete</button>
    </div>
  );
};

export default MyPostButton;