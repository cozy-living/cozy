// TODO: implement the service component. The Service page should contain 2 tabs (CreateRequest + ViewRequests) for a resident, and one tab only (ProcessRequests) for an admin
import React, { Component } from "react";
import { Button, Calendar, List, Layout, Form, Select} from "antd";
import styles from './ResidentService.css';
import { CloseOutlined } from "@ant-design/icons/lib/icons";

class ResidentService extends Component {
  state = {
    myService: false,
    loading: false,
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

  onFinish = (values) => {
    console.log("form values:", values);
    //TODO:return the values to backend
  }
  onCancel = () => {
    //TODO:cancel the reservation
  }

  render() {
    const {myService} = this.state;
    const {Content} = Layout;
    const {Option} = Select;
    //dummy data
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
    const requests = [{id: 1, type: "Room Reservation", suit: "1A", date: "2022.02.09", state: "unfinished", user_id: "1"},
              {id: 2, type: "Maintainance", suit: "2A", date: "2022.02.09", state: "unfinished", user_id: "2"}]
    //dummy data
    return (
      <Content style={{display:"flex", flexDirection:"column", justifyContent:"flex-start"}}>
        <h1 className="service_title">Service</h1>
        <div className="reserve_botton">
          <Button onClick={this.resetService} disabled={!myService}>Reserve Service</Button>
          <Button onClick={this.setService} disabled={myService}>My Service</Button>
        </div>
          {
            myService ? 
            <List
              bordered
              dataSource={requests}
              style={{margin: "40px"}}
              //TODO:get items from backend
              renderItem={item => (
                  <List.Item className="resident_item">
                    <List.Item.Meta
                      title={item.type}
                      description={"APT:" + item.suit + "\tDATE:" + item.date}
                    />
                    <Button type="danger" style={{borderRadius: "20px"}} onClick={this.onCancel}>Delete</Button>
                  </List.Item>
              )}
            />
            :
            <Form 
              className="reserve_form"
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

export default ResidentService;
