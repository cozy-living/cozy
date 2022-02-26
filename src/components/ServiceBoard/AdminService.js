// TODO: implement the page for viewing all past requests submitted by a resident (a tab in the Service page)

import React, { Component } from "react";
import styles from './AdminService.module.css';
import { Layout, List, Button, message, Card } from "antd";
import { listReservations, deleteReservation } from "../../utils";
import { displayText, selectImage } from "../../helperFunc";

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
    const { Content } = Layout;
    const { requests } = this.state;
    return (
        <Content style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
        <h1 className={styles.service_title}>Resident Requests</h1>

        {/* <List
          bordered
          dataSource={requests}
          style={{ margin: "40px" }}
          //TODO:get items from backend
          renderItem={item => (
            <List.Item className="resident_item">
              <List.Item.Meta
                title={item.type}
                description={" DATE:" + item.date}
              />
              <ApproveBotton reservationId={item.id} loadData={this.loadData} />
              <RejectBotton reservationId={item.id} loadData={this.loadData} />
            </List.Item>
          )}
        /> */}

        <List
          dataSource={requests}
          style={{ margin: "40px" }}
          renderItem={item => (
            <>
              <div className={styles.items} >
                <img src={selectImage(item.type)} width="150" height="150" style={{ borderRadius: "50%" }} alt="" />
                <Card
                  style={{ height: "150", width: "85%", marginLeft: "65px" }}
                  title={displayText(item.type)}
                  extra={
                    <>
                      <span style={{ marginRight: "20px" }}>{item.date.substring(0, 10)}</span>
                    </>
                  }
                >
                  {/* {"Reservation Status: " + displayText(item.state)} */}
                  <RejectBotton reservationId={item.id} loadData={this.loadData} />
                  <ApproveBotton reservationId={item.id} loadData={this.loadData} />
                </Card>
              </div>
              <div style={{ height: "30px" }}></div>
            </>
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

  render() {
    return <Button type="primary" style={{ marginLeft: "15px" }} onClick={this.onApprove}>Approve</Button>
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
  render() {
    return <Button type="danger" onClick={this.onReject}>Decline</Button>
  }
}

export default AdminService;
