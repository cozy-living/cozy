// TODO: implement the page for viewing all past requests submitted by a resident (a tab in the Service page)

import React, { Component } from "react";
import { Layout, List, Button } from "antd";
import styles from './ResidentService.css';
import { CheckCircleTwoTone, CheckOutlined, CloseCircleTwoTone, CloseOutlined } from "@ant-design/icons/lib/icons";
class AdminService extends Component {
  onApprove = () => {
    //TODO: Approve reservation
  }
  onReject = () => {
    //TODO: Reject reservation
  }
  
  render() {
    const {Content} = Layout;
    //dummy data
    const requests = [{id: 1, type: "Room Reservation", suit:"1A", date: "2022.02.09", state: "unfinished", user_id: "1"},
              {id: 2, type: "Maintainance", suit:"2A", date: "2022.02.09", state: "unfinished", user_id: "2"}];
    //dummy data
    return (
      <Content style={{height:"550px", display:"flex", flexDirection:"column", justifyContent:"flex-start", overflow: "auto"}}>
        <h1 className="service_title">Service</h1>
        <List
              bordered
              dataSource={requests}
              style={{margin: "40px"}}
              //TODO:get items from backend
              renderItem={item => (
                  <List.Item className="resident_item">
                    <List.Item.Meta
                      title={item.type}
                      description={"APT: " + item.suit + " DATE:" + item.date}
                    />
                    <Button type="primary" icon={<CheckOutlined/>} shape="circle" onClick={this.onApprove}></Button>
                    <Button type="danger" icon={<CloseOutlined/>} shape="circle" style={{marginLeft: "10px"}} onClick={this.onReject}></Button>
                  </List.Item>
              )}
            />
      </Content>
    );
  }
}

export default AdminService;
