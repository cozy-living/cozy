// TODO: implement the dashboard component. An admin can edit or delete a dashboard by clicking the corresponding button in a dashboard, while a resident can only view a dashboard

import React, { Component } from "react";
import styles from "./Dashboard.module.css"
import {List, Card, Button, Modal, Form, Input, message} from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { addEvent, deleteEvent, listEvents } from "../../utils";
class Dashboard extends Component {
  imageRef = React.createRef();
  state = {
    admin: false,
    isModalVisible: false,
    loading: false,
    data: [],
  }
  componentDidMount = () => {
    const asHost = localStorage.getItem("asHost");
    this.setState({
      admin: asHost,
    })
    this.loadEvents();
  }
  loadEvents = async () => {
    this.setState({
      loading: true,
    })
    try {
      const resp = await listEvents();
      this.setState({
        data: resp,
      });
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      })
    }
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
  onPostEvent = async (values) => {
    const userId = localStorage.getItem("userId");
    const formData = new FormData();
    const {f} = this.imageRef.current;
    formData.append("file", f);
    formData.append("title", values.title);
    formData.append("content", values.content);
    this.setState({
      loading: true,
    })
    try {
      await addEvent(userId, formData);
      message.success("event added successfully");
    } catch (error) {
      message.error(error.message);      
    } finally {
      this.setState({
        loading: false,
      })
      this.closeModal();
      this.loadEvents();
    }

  }
  render() {
    const {TextArea} = Input;
    const { data, admin } = this.state;
    return (
      <>
        <h1 className={styles.title}>DashBoard</h1>
        {
          admin == "true" && <Button onClick={this.showModal} style={{marginLeft: "50px"}}>
            Post Event
          </Button>
        }
        <Modal visible={this.state.isModalVisible} footer={null} onCancel={this.closeModal}>
          <div>Event Post</div>
          <Form onFinish={this.onPostEvent}>
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: 'Please input event title!' }]}
            >
              <Input showCount maxLength={20} placeholder="title"/>
            </Form.Item>
            <Form.Item
              name="content"
              label="Content"
              rules={[{ required: true, message: 'Please input event content!' }]}
            >
               <TextArea showCount maxLength={100} placeholder="content"/>
            </Form.Item>
            <Form.Item
              name="file" label="Image" rules={[{ required: false, message: 'Please input event image!'}]}
            >
              <input 
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                ref={this.imageRef}
              />
            </Form.Item>
            <Button 
              loading={this.state.loading} 
              type="primary"
              htmlType="submit"
               >
              submit
            </Button>
          </Form>
        </Modal>
        <List
          dataSource={data}
          style={{margin: "40px"}}
          renderItem={item => (
            <>
              <div className={styles.items} >
                <img src={item.fileUrl} width="150" height="150" style={{borderRadius: "50%"}} alt=""/>
                <Card 
                style={{height:"150", width:"85%", marginLeft: "20px"}}
                title={item.title}
                extra={
                      <>
                        <span style={{marginRight: "20px"}}>{item.date.substring(0, 10)}</span>
                        {admin == "true" && <DeleteButton eventId={item.id} onRemoveSuccess={this.loadEvents}/>}
                      </>
                  }
                >
                  {item.content}
                </Card>
              </div>
              <div style={{height: "30px"}}></div>
            </>
          )}
  />,
      </>
    )
  }
}

class DeleteButton extends Component {

  state = {
    loading: false,
  }
  onDelete = async () => {
    const {eventId, onRemoveSuccess} = this.props;
    const userId = localStorage.getItem("userId");
    this.setState({
      loading: true,
    })
    try {
      await deleteEvent(userId, eventId);
      onRemoveSuccess();
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      })
    }
    
  }
  render() {
    return <Button type="danger" style={{borderRadius: "20px"}} onClick={this.onDelete}>Delete</Button>
  }
}

export default Dashboard;

{/* <List.Item className={styles.items} >
<img src="favicon.ico" width="150" height="150"/>
<Card 
style={{height:"150", width:"85%", marginLeft: "20px", border: "2px solid rgb(4, 4, 114)", borderRadius: "30px"}}
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
</List.Item> */}