// TODO: implement the dashboard component. An admin can edit or delete a dashboard by clicking the corresponding button in a dashboard, while a resident can only view a dashboard

import React, { Component } from "react";
import styles from "./Dashboard.module.css"
import {List, Card, Button, Modal, Form, Input} from "antd";
import { CloseOutlined } from "@ant-design/icons";
class Dashboard extends Component {
  state = {
    admin: true,
    isModalVisible: false,
    loading: false,
  }
  //TODO:get events
  showModal = () => {
    this.setState({
      isModalVisible: true,
    })
  }
  closeModal = () => {
    this.setState({
      isModalVisible: false,
    })
  }
  onFinish = () => {
    //TODO: create new event
    this.closeModal();
  }
  render() {
    const admin = this.state.admin;
    const {TextArea} = Input;
    //dummy data
    const data = [
      {
        title: 'Title 1',
        content: "Content 1",
        date: "2022-02-16",
      },
      {
        title: 'Title 2',
        content: "Content 2",
        date: "2022-02-16",
      },
      {
        title: 'Title 3',
        content: "Content 3",
        date: "2022-02-16",
      },
      {
        title: 'Title 4',
        content: "Content 4",
        date: "2022-02-16",
      },
    ];
    //dummy data
    return (
      <>
        <h1 className={styles.title}>DashBoard</h1>
        {
          admin && <Button onClick={this.showModal} style={{marginLeft: "50px"}}>
            Post Event
          </Button>
        }
        <Modal visible={this.state.isModalVisible} footer={null} onCancel={this.closeModal}>
          <div>Event Post</div>
          <Form
            onFinish={this.onFinish}>
            <Form.Item
              name="title"
              rules={[{ required: true, message: 'Please input event title!' }]}
            >
              <Input showCount maxLength={20} placeholder="title"/>
            </Form.Item>
            <Form.Item
              name="content"
              rules={[{ required: true, message: 'Please input event content!' }]}
            >
               <TextArea showCount maxLength={100} placeholder="content"/>
            </Form.Item>
            <Button 
              loading={this.state.loading} 
              type="primary"
              htmlType="submit" >
              submit
            </Button>
          </Form>
        </Modal>
        <List
          dataSource={data}
          bordered
          style={{margin: "40px"}}
          renderItem={item => (
            <List.Item className={styles.items}>
               <Card 
               style={{width:"100%"}}
               title={item.title}
               extra={
                    <>
                      <span style={{marginRight: "20px"}}>{item.date}</span>
                      {admin && <Button type="danger" icon={<CloseOutlined/>} shape="circle"></Button>}
                    </>
                 }
               >
                {item.content}
               </Card>
            </List.Item>
          )}
  />,
      </>
    )
  }
}

export default Dashboard;
