import React from "react";

import { Form, Input, Cascader, Select, Checkbox, Button } from "antd";

const { Option } = Select;

// dummy data for resident
const residences = [
  {
    value: "unit1",
    label: "Unit 1",
    children: [
      {
        value: "floor1",
        label: "Floor 1",
        children: [
          {
            value: "apt100",
            label: "APT 100",
          },
          {
            value: "apt101",
            label: "APT 101",
          },
          {
            value: "apt102",
            label: "APT 102",
          },
        ],
      },
      {
        value: "floor2",
        label: "Floor 2",
        children: [
          {
            value: "apt200",
            label: "APT 200",
          },
          {
            value: "apt201",
            label: "APT 201",
          },
          {
            value: "apt202",
            label: "APT 202",
          },
        ],
      },
      {
        value: "floor3",
        label: "Floor 3",
        children: [
          {
            value: "apt300",
            label: "APT 300",
          },
          {
            value: "apt301",
            label: "APT 301",
          },
          {
            value: "apt302",
            label: "APT 302",
          },
        ],
      },
    ],
  },
  {
    value: "unit2",
    label: "Unit 2",
    children: [
      {
        value: "floor1",
        label: "Floor 1",
        children: [
          {
            value: "apt100",
            label: "APT 100",
          },
          {
            value: "apt101",
            label: "APT 101",
          },
          {
            value: "apt102",
            label: "APT 102",
          },
        ],
      },
      {
        value: "floor2",
        label: "Floor 2",
        children: [
          {
            value: "apt200",
            label: "APT 200",
          },
          {
            value: "apt201",
            label: "APT 201",
          },
          {
            value: "apt202",
            label: "APT 202",
          },
        ],
      },
      {
        value: "floor3",
        label: "Floor 3",
        children: [
          {
            value: "apt300",
            label: "APT 300",
          },
          {
            value: "apt301",
            label: "APT 301",
          },
          {
            value: "apt302",
            label: "APT 302",
          },
        ],
      },
    ],
  },
];
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
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const CreateForm = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  //   phone number prefix selector
  const prefixSelector = (
    <Form.Item style={{ width: "1px" }} name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="1">+1</Option>
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["Unit 1", "Floor 2", "APT 202"],
        prefix: "+1",
      }}
      scrollToFirstError
      style={{ left: "50%", marginTop: "30px" }}
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
      >
        <Input style={{ width: "auto" }} placeholder="your name" />
      </Form.Item>

      {/* gender selection */}
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: "Please select gender!",
          },
        ]}
      >
        <Select style={{ width: "auto" }} placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
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
      >
        <Input
          placeholder="Please input your E-mail"
          style={{ width: "6cm" }}
        />
      </Form.Item>

      {/* phone number */}
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "auto",
          }}
        />
      </Form.Item>

      {/* Resident -> TODO: need to switch to select APT */}
      <Form.Item
        name="residence"
        label="Residence"
        rules={[
          {
            type: "array",
            required: true,
            message: "Please select your habitual residence!",
          },
        ]}
      >
        <Cascader style={{ width: "auto" }} options={residences} />
      </Form.Item>

      {/* post detail intro */}
      <Form.Item
        name="detail"
        label="Post Detail"
        rules={[
          {
            required: true,
            message: "Please input Intro",
          },
        ]}
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
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>

    </Form>
  );
};

export default CreateForm;
