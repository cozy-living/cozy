import React, { useState } from "react";

import {
  Form,
  Input,
  Checkbox,
  Button,
  DatePicker,
} from "antd";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 5,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const CreateForm = (props) => {
  /*
  Fullname
  E-mail
  Post Title
  Date
  Post Detail
  */
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredDetail, setEnteredDetail] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const detailChangeHandler = (event) => {
    setEnteredDetail(event.target.value);
  };

  function sumbitHandler(event) {
    // event.preventDefault();

    const postData = {
      name: enteredName,
      email: enteredEmail,
      title: enteredTitle,
      date: enteredDate,
      detail: enteredDetail,
    };

    props.onSavePostData(postData);
    // cleanup after submission
    setEnteredName("");
    setEnteredEmail("");
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredDetail("");
  };

  const [form] = Form.useForm();

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      scrollToFirstError
      style={{ left: "50%", marginTop: "30px" }}
      onSubmit={sumbitHandler}
    >
      {/* Full Name */}
      <Form.Item
        name="fullname"
        label="Fullname"
        tooltip="Fill-in your full name with SPACE?"
        rules={[
          {
            required: true,
            message: "Please input your Fullname!",
            whitespace: true,
          },
        ]}
        value={enteredName}
        onChange={nameChangeHandler}
      >
        <Input style={{ width: "auto" }} placeholder="your name" />
      </Form.Item>

      {/* Email */}
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
        value={enteredEmail}
        onChange={emailChangeHandler}
      >
        <Input
          placeholder="Please input your E-mail"
          style={{ width: "6cm" }}
        />
      </Form.Item>

      {/* post title */}
      <Form.Item
        name="title"
        label="Post Title"
        rules={[
          {
            required: true,
            message: "Please input your post title!",
            whitespace: true,
          },
        ]}
        value={enteredTitle}
        onChange={titleChangeHandler}
      >
        <Input style={{ width: "auto" }} placeholder="your name" />
      </Form.Item>

      {/* Post Date */}
      <Form.Item
        name="date"
        label="Date"
        rules={[
          {
            required: true,
            message: "Please input your post date!",
          },
        ]}
        value={enteredDate}
        onChange={dateChangeHandler}
      >
        <DatePicker />
      </Form.Item>

      {/* post detail intro */}
      <Form.Item
        name="detail"
        label="Post Detail"
        rules={[
          {
            required: true,
            message: "Please input your post detail",
          },
        ]}
        value={enteredDetail}
        onChange={detailChangeHandler}
      >
        <Input.TextArea
          placeholder="Write your post here"
          style={{ height: "150px", width: "auto" }}
          showCount
          maxLength={300}
        />
      </Form.Item>

      {/* aggreement checker */}
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        style={{ textAlign: "center", marginLeft: "190px" }}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default CreateForm;
