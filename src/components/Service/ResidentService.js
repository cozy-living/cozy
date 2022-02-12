// TODO: implement the service component. The Service page should contain 2 tabs (CreateRequest + ViewRequests) for a resident, and one tab only (ProcessRequests) for an admin

import React, { Component } from "react";
import { Button, Calendar, List, Cascader} from "antd";

class ResidentService extends Component {
  state = {
    myService: false,
    requests: [{id: 1, type: "room reservation", date: "2022.02.09", state: "unfinished", user_id: "1"},
              {id: 2, type: "maintainance", date: "2022.02.09", state: "unfinished", user_id: "2"}],
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

  
  onPanelChange = (value) => {
    console.log("choose value:", value);
  }
  onCascaderChange = (value) => {
    console.log("choose value:", value)
  }
  render() {
    const {myService, requests} = {...this.state};
    const options = [
      {
        value: 'Room reservation',
        label: 'Room reservation',
      },
      {
        value: 'Maintainance',
        label: 'Maintainance',
      },
    ];
    return (
      <>
        <h1 className="service_title">Service</h1>
        <div id="service_botton">
          <Button onClick={this.resetService} disabled={!myService}>Reserve Service</Button>
          <Button onClick={this.setService} disabled={myService}>My Service</Button>
        </div>
          {
            myService ? 
            <List
              bordered
              dataSource={requests}
              style={{margin: "40px"}}
              renderItem={item => (
                  <List.Item className="resident_service_item">
                    <List.Item.Meta
                      title={item.date}
                      description={item.type}
                    />
                    <Button>Delete</Button>
                  </List.Item>
              )}
            />
            :
            <div className="service_form">
              <Cascader options={options} onChange={this.onCascaderChange} placeholder="Please select" />
              <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
            </div>
          }
      </>
    );
  }
}

export default ResidentService;
