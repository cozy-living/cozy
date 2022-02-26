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

  const [myPost, setMyPost] = useState(false);

  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const fetchMyPostHandler = useCallback(async () => {
  //   setIsLoading(true);
  //   const web = `${url}/posts`;
  //   try {
  //     const userId = localStorage.getItem("userId");
  //     const data = await listPostByUser(userId);
  //     console.log(data);
  //     const transformedMyPosts = data.map((myPostData) => {
  //       return {
  //         id: myPostData.user.id,
  //         name: myPostData.user.username,
  //         suite: myPostData.user.suite,
  //         email: myPostData.user.email,
  //         postid: myPostData.id,
  //         title: myPostData.title,
  //         detail: myPostData.content,
  //         date: myPostData.date,
  //         url: myPostData.fileUrl,
  //       };
  //     });
  //     setMyPosts(transformedMyPosts);
  //   } catch (error) {
  //     message.error(error.message);
  //   }
  //   setIsLoading(false);
  // });

  const fetchPostHandler = useCallback(async () => {
    setIsLoading(true);
    const web = `${url}/posts`;
    try {
      const response = await fetch(web);

      if (!response.ok) {
        throw new Error("Unable to fetch posts!");
      }

      const data = await response.json();
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
      console.log(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPostHandler();
  }, [fetchPostHandler]);

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
        <Button onClick={() => setMyPost(false)} disabled={!myPost}>Posts</Button>
        <Button onClick={() => setMyPost(true)} disabled={myPost}>My Posts</Button>
      </div>
      <CreatePost onAddPost={addPostHandlerAxios} />
      <div className={classes.posts}>
        {!isLoading && posts.length > 0 && !myPost && (
          <Post visible={!myPost} data={posts} />
        )}
        {!isLoading && posts.length > 0 && myPost && (
          <MyPost
            visible={myPost}
            data={posts}
            fetchHandler={fetchPostHandler}
            onEdit={addPostHandler}
          />
        )}
        {!isLoading && posts.length === 0 && <p>Found No Posts!</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading}
      </div>
    </div>
  );
};

export default DiscussionBoard;
