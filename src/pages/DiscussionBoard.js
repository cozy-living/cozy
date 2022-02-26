import { useState } from "react";
import axios from "axios";

import Post from "../components/DiscussBoard/Post";
import MyPost from "../components/DiscussBoard/MyPost";

import classes from "./DiscussionBoard.module.css";
import CreatePost from "../components/DiscussBoard/CreatePost";

import { addPost, listPostByUser } from "../utils";
import { message } from "antd";

/*
          DiscussionBoard
               /   \
     CreatePost      Post
          |            |
   getting data     update data
*/

const DiscussionBoard = () => {
  const [showPost, setShowPost] = useState(false);

  const [showMyPost, setShowMyPost] = useState(false);

  // fetched data
  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /*
  let userId = localStorage.getItem("userId")
  let fetchWeb = "http://18.216.82.23:8080/" + userId + "/posts"
  fetch(fetchWeb)
 */

  const fetchMyPostHandler = async () => {
    setIsLoading(true);
    let userId = localStorage.getItem("userId");
    try {
      let data = await listPostByUser(userId);
      console.log(data);
      const transformedMyPosts = data.map((myPostData) => {
        return {
          id: myPostData.user.id,
          name: myPostData.user.username,
          suite: myPostData.user.suite,
          email: myPostData.user.email,
          postid: myPostData.id,
          title: myPostData.title,
          detail: myPostData.content,
          date: myPostData.date,
          url: myPostData.fileUrl,
        };
      });
      setMyPosts(transformedMyPosts);
    } catch (error) {
      message.error(error.message);
    }
    setIsLoading(false);
  };

  const fetchPostHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://18.216.82.23:8080/posts");

      if (!response.ok) {
        throw new Error("Fail to list posts");
      }

      const data = await response.json();
      console.log(data);
      const transformedPosts = data.map((postData) => {
        return {
          id: postData.user.id,
          name: postData.user.username,
          email: postData.user.email,
          suite: postData.user.suite,
          postid: postData.id,
          title: postData.title,
          date: postData.date,
          detail: postData.content,
          url: postData.fileUrl,
        };
      });
      setPosts(transformedPosts);
    } catch (error) {
      message.error(error.message);
    }
    setIsLoading(false);
  };

  const ShowPostHandler = () => {
    setShowPost(true);
    setShowMyPost(false);
    fetchPostHandler();
  };

  const ShowMyPostHandler = () => {
    setShowMyPost(true);
    setShowPost(false);
    fetchMyPostHandler();
  };

  const addPostHandler = async (post) => {
    console.log(post);
    setIsLoading(true);
    let userId = localStorage.getItem("userId");
    try {
      await addPost(userId, post);
      message.success("Post Added Successfully");
    } catch (err) {
      message.error(err.message);
    } finally {
      setIsLoading(false);
      fetchPostHandler();
    }
    // const response = await fetch(web, {
    //   method: "POST",
    //   body: JSON.stringify(post),
    //   header: {
    //     "Content-type": "application/json",
    //   },
    // });
    // const data = await response.json();
    // // auto fetch?
    // fetchPostHandler();
  };

  return (
    <div className={classes.page}>
      <p className={classes.title}>Discussion Board</p>
      <CreatePost onAddPost={addPostHandler} />
      <div className={classes.tabs}>
        <button className={classes.button} onClick={ShowPostHandler}>
          Posts
        </button>
        <button className={classes.button} onClick={ShowMyPostHandler}>
          My Posts
        </button>
      </div>
      <div className={classes.posts}>
        {isLoading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p>Loading...</p>
          </div>
        )}
        {!isLoading && posts.length > 0 && showPost && (
          <Post visible={showPost} data={posts} />
        )}
        {!isLoading && myPosts.length > 0 && showMyPost && (
          <MyPost
            visible={showMyPost}
            data={myPosts}
            fetchHandler={fetchMyPostHandler}
          />
        )}
        {!isLoading && showPost && posts.length === 0 && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p>Found No Posts!</p>
          </div>
        )}
        {!isLoading && showMyPost && myPosts.length === 0 && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p>You have no posts yet!</p>
          </div>
        )}
        {/* {showPost && <Post visible={showPost} data={posts} error={error} />}
        {showMyPost && (
          <MyPost visible={showMyPost} data={posts} error={error} />
        )} */}
      </div>
    </div>
  );
};

export default DiscussionBoard;
