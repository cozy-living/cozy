import React from "react";

import { Card, Col, Row, List } from "antd";
import styles from "./Post.module.css"
import classes from "./Post.module.css";
import PostEntry from "./PostEntry";

// const Post = (props) => {
//   return (
//     <>
//       <div className={classes.container}>
//         <Col span={12}>
//           {props.data.map((post) => (
//             <PostEntry
//               id={post.id}
//               name={post.name}
//               email={post.email}
//               suite={post.suite}
//               title={post.title}
//               detail={post.detail}
//               url={post.url}
//             />
//           ))}
//         </Col>
//       </div>
//     </>
//   );
// };

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
