// TODO: implement the service component. The Service page should contain 2 tabs (CreateRequest + ViewRequests) for a resident, and one tab only (ProcessRequests) for an admin

import React, { Component } from "react";
import { Button, Calendar, List} from "antd";

class ResidentService extends Component {
  state = {
    myService: false,
    requests: [{id: 1, type: "room", date: "2022.02.09", state: "unfinished", user_id: "1"}],
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

  
  onPanelChange = (value, mode) => {
    console.log(value, mode);
  }

  render() {
    const {myService, requests} = {...this.state};
    return (
      <>
        <div id="service_botton">
          <Button onClick={this.resetService} disabled={!myService}>Reserve Service</Button>
          <Button onClick={this.setService} disabled={myService}>My Service</Button>
        </div>
        {
          myService ? 
          <List
            bordered
            dataSource={requests}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={item.date}
                  description={item.type}
                />  
              </List.Item>
            )}
          />
          :
          <div className="calendar">
            <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
          </div>
        }
      </>
    );
  }
}

export default ResidentService;
