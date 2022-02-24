// TODO: implement the page for viewing all past requests submitted by a resident (a tab in the Service page)

import React, { Component } from "react";
import { Layout, List, Button, message } from "antd";
import styles from './ResidentService.css';
import { CheckCircleTwoTone, CheckOutlined, CloseCircleTwoTone, CloseOutlined } from "@ant-design/icons/lib/icons";
import {listReservations, deleteReservation} from "../../utils";
class AdminService extends Component {
  state = {
    loading: false,
    requests: [],
  }
  componentDidMount = () => {
    this.loadData();
  }
  loadData = async () => {
    const userId = localStorage.getItem("userId");
    this.setState({
      loading: true,
    })
    try {
      const resp = await listReservations();
      this.setState({
        requests: resp,
      })
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      })
    }
  }
  render() {
    const {Content} = Layout;
    // dummy data
    // const requests = [{id: 1, type: "Room Reservation", suit:"1A", date: "2022.02.09", state: "unfinished", user_id: "1"},
    //         {id: 2, type: "Maintainance", suit:"2A", date: "2022.02.09", state: "unfinished", user_id: "2"}];
    // dummy data
    const {requests} = this.state;
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
                    <ApproveBotton reservationId={item.id} loadData={this.loadData}/>
                    <RejectBotton reservationId={item.id} loadData={this.loadData}/>
                  </List.Item>
              )}
            />
      </Content>
    );
  }
}
class ApproveBotton extends Component {
  state = {
    loading: false,
  }
  onApprove = async () => {
    const userId = localStorage.getItem("userId");
    this.setState({
      loading: true,
    })
    try {
      await deleteReservation(userId, this.props.reservationId);
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      })
      this.props.loadData();
    }
  }
  
  render () {
    return <Button type="primary" icon={<CheckOutlined/>} shape="circle" onClick={this.onApprove}></Button>
  }
}
class RejectBotton extends Component {
  state = {
    loading: false,
  }
  onReject = async () => {
    const userId = localStorage.getItem("userId");
    this.setState({
      loading: true,
    })
    try {
      await deleteReservation(userId, this.props.reservationId);
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      })
      this.props.loadData();
    }
  }
  render () {
    return <Button type="danger" icon={<CloseOutlined/>} shape="circle" style={{marginLeft: "10px"}} onClick={this.onReject}></Button>
  }
}
export default AdminService;
