// TODO: implement the service component. The Service page should contain 2 tabs (CreateRequest + ViewRequests) for a resident, and one tab only (ProcessRequests) for an admin
import React, { Component } from "react";
import styles from './ResidentService.module.css';
import {Button, Calendar, List, Layout, Form, Select, message, Card} from "antd";
import { addReservation, deleteReservation, listReservationsByUser } from "../../utils";

class ResidentService extends Component {
  state = {
    myService: false,
    loading: false,
    requests: [],
  }
  componentDidMount() {
    this.loadData();
  }
  loadData = async () => {
    this.setState({
      loading: true,
    })
    try {
      const userId = localStorage.getItem("userId");
      const resp = await listReservationsByUser(userId);
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

  setService = () => {
    this.setState({
      myService: true,
    });
    console.log(this.state.myService);
  }

  resetService = () => {
    this.setState({
      myService: false,
    });
    console.log(this.state.myService);
  }
  
  onFinish = async (values) => {
    const userId = localStorage.getItem("userId");
    values.state = "PENDING";
    this.setState({
      loading: true,
    })
    try {
      await addReservation(userId, values);
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      })
      message.success("reserve successfully");
      this.loadData();
    }
  }

  render() {
    const {myService, requests} = this.state;
    const {Content} = Layout;
    const {Option} = Select;
    const options = [
      {
        value: 'Room Reservation',
        label: 'Room Reservation',
      },
      {
        value: 'Maintainance',
        label: 'Maintainance',
      },
    ];
    // const requests = [{id: 1, type: "Room Reservation", suit: "1A", date: "2022.02.09", state: "unfinished", user_id: "1"},
    //           {id: 2, type: "Maintainance", suit: "2A", date: "2022.02.09", state: "unfinished", user_id: "2"}]
    //dummy data
    return (
      <Content style={{display:"flex", flexDirection:"column", justifyContent:"flex-start"}}>
        <h1 className={styles.service_title}>Service Board</h1>
        <div className={styles.reserve_button}>
          <Button onClick={this.resetService} disabled={!myService}>Reserve Service</Button>
          <Button onClick={this.setService} disabled={myService}>My Service</Button>
        </div>
          {
            myService ?
                <List
                    dataSource={requests}
                    style={{margin: "40px"}}
                    renderItem={item => (
                        <>
                          <div className = {styles.items} >
                            {/*TODO: change image based on event type*/}
                            <img src="common_room.jpeg" width="150" height="150" style={{borderRadius: "50%"}} alt=""/>
                            <Card
                                style={{height:"150", width:"85%", marginLeft: "20px"}}
                                title={item.type}
                                extra={
                                  <>
                                    <span style={{marginRight: "20px"}}>{item.date.substring(0, 10)}</span>
                                  </>
                                }
                            >
                              {item.state}
                            </Card>
                          </div>
                          <div style={{height: "30px"}}></div>
                        </>
                    )}
                />
            :
            <Form 
              className={styles.reserve_form}
              onFinish={this.onFinish}
              >
              <Form.Item
                name="type" label="service" rules={[{required: true, message: "service type required"}]}
                >
                <Select placeholder="Select service">
                  <Option value="room_reservation">Room Reservation</Option>
                  <Option value="maintainance">Maintainance</Option>
                </Select>

              </Form.Item>
              <Form.Item
                name="date" 
                label="date" 
                rules={[{required: true, message: "date required"}]}
                >
                <Calendar fullscreen={false} defaultValue={null}/>
              </Form.Item>
              <Form.Item>
                <Button 
                  type="primary"
                  htmlType="submit" 
                  style={{marginLeft: "600px", marginBottom: "20px"}}
                  loading={this.state.loading}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          }

      </Content>
    );
  }
}

class DeleteReservationButton extends Component {
  state = {
    loading: false,
  }

  onCancel = async () => {
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
    return <Button type="danger" style={{borderRadius: "20px"}} onClick={this.onCancel}>Delete</Button>
  }
}

export default ResidentService;
