import React, { useState } from "react";

import { Modal, Button } from "antd";
import CreateForm from "./CreateForm";

const ModalButton = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const onSumbitHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible(false);
      setLoading(false);
    }, 1500);
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
        style={{ marginLeft: "15%" }}
      >
        Create Post
      </Button>
      <Modal
        visible={visible}
        title="Create Your Post"
        onOk={onSumbitHandler}
        onCancel={onCancelHandler}
        width={800}
        footer={[
          <Button key="back" onClick={onCancelHandler}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={onSumbitHandler}
          >
            Submit
          </Button>,
        ]}
      >
        {<CreateForm />}
      </Modal>
    </>
  );
};

export default ModalButton;
