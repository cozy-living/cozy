import { useCallback, useEffect, useState } from "react";

import Post from "../components/DiscussBoard/Post";
import MyPost from "../components/DiscussBoard/MyPost";

import classes from "./DiscussionBoard.module.css";
import CreatePost from "../components/DiscussBoard/CreatePost";
import PostForm from "../components/DiscussBoard/PostForm";

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
  const [error, setError] = useState(null);

  /*
  let userId = localStorage.getItem("userId")
  let fetchWeb = "http://18.216.82.23:8080/" + userId + "/posts"
  fetch(fetchWeb)
 */

  const fetchPostHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    let web = "http://18.216.82.23:8080/posts";
    try {
      const response = await fetch(web);

      if (!response.ok) {
        throw new Error("There is something went wrong!!!");
      }

      const data = await response.json();
      const transformedPosts = data.map((postData) => {
        return {
          id: postData.user.id,
          name: postData.user.username,
          email: postData.user.email,
          suite: postData.user.suite,
          title: postData.title,
          date: postData.date,
          detail: postData.content,
          url: postData.fileUrl,
        };
      });
      setPosts(transformedPosts);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPostHandler();
  }, [fetchPostHandler]);

  const ShowPostHandler = () => {
    setShowPost(true);
    setShowMyPost(false);
  };

  const ShowMyPostHandler = () => {
    setShowMyPost(true);
    setShowPost(false);
  };

  const addPostHandler = async (post) => {
    console.log(post);
    let userId = localStorage.getItem("userId");
    let web = "http://18.216.82.23/8080/" + userId + "/posts"
    const response = await fetch(web, {
      method: "POST",
      body: JSON.stringify(post),
      header: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className={classes.page}>
      <p className={classes.title}>Discussion Board</p>
      <CreatePost onAddPost={addPostHandler} />
      <div className={classes.tabs}>
        <button className={classes.postTab} onClick={ShowPostHandler}>
          Posts
        </button>
        <button className={classes.button} onClick={ShowMyPostHandler}>
          My Posts
        </button>
      </div>
      <div className={classes.posts}>
        {!isLoading && posts.length > 0 && showPost && (
          <Post visible={showPost} data={posts} error={error} />
        )}
        {!isLoading && posts.length > 0 && showMyPost && (
          <MyPost visible={showMyPost} data={posts} error={error} />
        )}
        {!isLoading && posts.length === 0 && !error && <p>Found No Posts!</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
        {/* {showPost && <Post visible={showPost} data={posts} error={error} />}
        {showMyPost && (
          <MyPost visible={showMyPost} data={posts} error={error} />
        )} */}
      </div>
    </div>
  );
};

export default DiscussionBoard;
