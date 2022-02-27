import React from "react";

import axios from "axios";

import { Card, List, Button, message } from "antd";
import styles from "./MyPost.module.css"

const MyPost = (props) => {

  const url = "http://18.216.82.23:8080";

  const deletePostHandler = (postId) => {
    const userId = localStorage.getItem("userId");
    axios
      .delete(`${url}/${userId}/posts/${postId}`)
      .then((response) => {
        message.success("Post successfully deleted!");
        window.location.reload(false); // TODO: watch out for this in prod environment
        // best pracitce: recall GET or showModal === false, not viable b/c of the current component structure
      })
      .catch((error) => {
        message.error(error.message);
        console.log(error);
      });
  };

  return (
    <List
      dataSource={props.data}
      style={{ margin: "40px" }}
      renderItem={item => (
        <>
          <div className={styles.items} >
            <img src={item.url} width="150" height="150" style={{ borderRadius: "50%" }} alt="" />
            <Card
              style={{ height: "150", width: "85%", marginLeft: "65px" }}
              title={item.title}
              extra={
                <>
                  <span style={{ marginRight: "40px" }}>Published by <b>{item.name}</b></span>
                  <span style={{ marginRight: "20px" }}>{item.date.substring(0, 10)}</span>
                  <Button type="danger"
                    style={{ borderRadius: "20px" }}
                    onClick={() => deletePostHandler(item.postid)}
                  >Delete</Button>
                </>
              }
            >
              {item.detail}
              {/* {console.log(item)} */}

            </Card>
          </div >
          <div style={{ height: "30px" }}></div>
        </>
      )}
    />
  )
}

export default MyPost;
