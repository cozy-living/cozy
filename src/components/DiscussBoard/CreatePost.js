import React, { useState } from "react";

import { Modal, Button } from "antd";
import CreateForm from "./CreateForm";
import PostForm from "./PostForm";
import classes from "./CreatePost.module.css";

const CreatePost = (props) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const onCancelHandler = () => {
    setVisible(false);
  };

  return (
    <>
      <div>
        {/* <Button
          type="primary"
          onClick={showModal}
          // style={{ marginLeft: "135px" }}
        >
          Create Post
        </Button> */}
        <button onClick={showModal} className={classes.button}>
          Create Post
        </button>
        {/* <button onClick={showModal}>Create Post</button> */}
      </div>
      <Modal
        visible={visible}
        title="Create Your Post"
        onCancel={onCancelHandler}
        width={800}
        footer={[
          <Button key="back" onClick={onCancelHandler}>
            Return
          </Button>,
        ]}
      >
        {<PostForm onSavePostData={props.onAddPost} />}
      </Modal>
    </>
  );
};

export default CreatePost;
