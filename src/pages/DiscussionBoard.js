import { useState } from "react";

import Post from "../components/DiscussBoard/Post";
import MyPost from "../components/DiscussBoard/MyPost";

import classes from "./DiscussionBoard.module.css";
import ModalButton from "../components/DiscussBoard/ModalButton";

const DiscussionBoard = () => {
  const [showPost, setShowPost] = useState(false);

  const [showMyPost, setShowMyPost] = useState(false);

  const ShowPostHandler = () => {
    setShowPost(true);
    setShowMyPost(false);
  };

  const ShowMyPostHandler = () => {
    setShowMyPost(true);
    setShowPost(false);
  };

  return (
    <div className={classes.page}>
      <p className={classes.title}>Discussion Board</p>
      {/* TODO: need to make it a modal */}
      <ModalButton />
      <div className={classes.tabs}>
        <button className={classes.button} onClick={ShowPostHandler}>
          Posts
        </button>
        <button
          className={classes.button}
          onClick={ShowMyPostHandler}
          style={{ marginLeft: "10px" }}
        >
          My Posts
        </button>
      </div>
      <div className={classes.posts}>
        {showPost && <Post visible={showPost} />}
        {showMyPost && <MyPost visible={showMyPost} />}
      </div>
    </div>
  );
};

export default DiscussionBoard;
