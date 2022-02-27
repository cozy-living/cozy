import { useCallback, useEffect, useState } from "react";
import { Button } from "antd";

import axios from "axios";

import Post from "./Post";
import MyPost from "./MyPost";

import classes from "./DiscussionBoard.module.css";
import CreatePost from "./CreatePost";

import { addPost, listPostByUser } from "../../utils";
import { message } from "antd";

/*
          DiscussionBoard
               /   \
     CreatePost      Post
          |            |
   getting data     update data
*/

const DiscussionBoard = () => {
  const url = "http://18.216.82.23:8080";

  const [showPost, setShowPost] = useState(false);
  const [showMyPost, setShowMyPost] = useState(false);

  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const addPostHandler = async (post) => {
    // console.log(post);
    const userId = localStorage.getItem("userId");
    const web = `${url}/${userId}/posts`;
    const response = await fetch(web, {
      method: "POST",
      body: JSON.stringify(post),
      header: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    fetchPostHandler();
    // console.log(data);
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

  const addPostHandlerAxios = (post) => {
    // console.log(post);
    const userId = localStorage.getItem("userId");
    axios
      .request({
        method: "post",
        url: `${url}/${userId}/posts`,
        data: post,
      })
      .then((response) => {
        fetchPostHandler();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.page}>
      <p className={classes.title}>Discussion Board</p>
      {/* <div className={classes.tabs}>
        <button className={classes.button} onClick={ShowPostHandler}>
          Posts
        </button>
        <button className={classes.button} onClick={ShowMyPostHandler}>
          My Posts
        </button>
      </div> */}
      <div className={classes.button}>
        <Button
          onClick={ShowPostHandler}
          disabled={showPost}
        >
          Posts
        </Button>
        <Button onClick={ShowMyPostHandler} disabled={showMyPost}>
          My Posts
        </Button>
      </div>
      <CreatePost onAddPost={addPostHandlerAxios} />
      <div className={classes.posts}>
        {!isLoading && showPost && (
          <Post visible={showPost} data={posts} />
        )}
        {!isLoading && posts.length > 0 && showMyPost && (
          <MyPost
            visible={showMyPost}
            data={myPosts}
            fetchHandler={fetchMyPostHandler}
            onEdit={addPostHandler}
          />
        )}
        {isLoading && <p>Loading...</p>}
        {!isLoading && showMyPost && myPosts.length === 0 && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p>You have no posts yet!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscussionBoard;
