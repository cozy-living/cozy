import React from "react";

import { Card, List } from "antd";
import styles from "./Post.module.css"

const Post = (props) => {
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
                </>
              }
            >
              {item.detail}

            </Card>
          </div>
          <div style={{ height: "30px" }}></div>
        </>
      )}
    />
  )
}


export default Post;
