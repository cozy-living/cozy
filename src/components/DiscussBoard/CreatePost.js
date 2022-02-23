import React, { useState } from "react";

import { Modal, Button } from "antd";
import CreateForm from "./CreateForm";
import PostForm from "./PostForm";

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
      <Button
        type="primary"
        shape="round"
        onClick={showModal}
        style={{ marginLeft: "135px" }}
      >
        Create Post
      </Button>
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
