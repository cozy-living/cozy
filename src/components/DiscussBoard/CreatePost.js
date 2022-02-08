// TODO: implement the popup window for creating a new post by a user (must be a resident)
import CreateForm from "./CreateForm";
import React, { useState } from "react";
import classes from "./CreatePost.module.css";

const CreatePost = () => {
  const [isCreating, setIsCreating] = useState(false);

  const startCreatingHandler = () => {
    setIsCreating(true);
  };

  const stopCreatingHandler = () => {
    setIsCreating(false);
  };

  return (
    <div>
      {/* if is not creating then only show create button */}
      {!isCreating && (
        <button className={classes.button} onClick={startCreatingHandler}>
          Create Post
        </button>
      )}
      {/* if is creating then show the creating form */}
      {isCreating && <CreateForm onCancel={stopCreatingHandler} />}
    </div>
  );
};

export default CreatePost;
