import React, { useState } from "react";

import { Modal } from "antd";
import PostForm from "./PostForm";
import classes from "./CreatePost.module.css";

const CreatePost = (props) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const onCancelHandler = () => {
    setVisible(false);
  };

  return (
    <>
      <div>
        <button onClick={showModal} className={classes.button}>
          Create Post
        </button>
      </div>
      <Modal
        visible={visible}
        title="Create Your Post"
        onCancel={onCancelHandler}
        width={800}
        footer={<></>}
      >
        {
          <PostForm
            onSavePostData={props.onAddPost}
            onSuccess={props.onSuccess}
            onCancel={onCancelHandler}
          />
        }
      </Modal>
    </>
  );
};

export default CreatePost;
