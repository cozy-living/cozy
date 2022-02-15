import { useState } from "react";

import Post from "../components/DiscussBoard/Post";
import MyPost from "../components/DiscussBoard/MyPost";

import classes from "./DiscussionBoard.module.css";
import CreatePost from "../components/DiscussBoard/CreatePost";

/*
          DiscussionBoard
               /   \
     CreatePost      Post
          |            |
   getting data     update data
*/

const DUMMY_DATA = [
  {
    id: "u1",
    name: "Hanwen Liu",
    email: "aidisheng880@gmail.com",
    phone: "9172505669",
    residence: ["Unit 1/", "Floor 1/", "APT 100"],
    title: "Fixing the Toilet",
    date: "2022-02-15",
    detail: "My toilet is stock, please have someone to fix it",
  },
  {
    id: "u2",
    name: "Stranger",
    email: "stranger@testing.com",
    phone: "1234567890",
    residence: ["Unit 2/", "Floor 1/", "APT 102"],
    title: "Loud Noise in APT 202",
    date: "2022-02-14",
    detail:
      "The APT 202 is very loud during the night time, please keep it down!",
  },
];

const DiscussionBoard = () => {
  const [showPost, setShowPost] = useState(false);

  const [showMyPost, setShowMyPost] = useState(false);

  const [newPosts, setNewPosts] = useState(DUMMY_DATA);

  const ShowPostHandler = () => {
    setShowPost(true);
    setShowMyPost(false);
  };

  const ShowMyPostHandler = () => {
    setShowMyPost(true);
    setShowPost(false);
  };

  const addPostHandler = (post) => {
    setNewPosts((prevPosts) => {
      return [post, ...prevPosts];
    });
  };

  return (
    <div className={classes.page}>
      <p className={classes.title}>Discussion Board</p>
      {/* TODO: need to make it a modal */}
      <CreatePost onAddPost={addPostHandler} />
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
        {showPost && <Post visible={showPost} data={newPosts}/>}
        {showMyPost && <MyPost visible={showMyPost} />}
      </div>
    </div>
  );
};

export default DiscussionBoard;
