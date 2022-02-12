import React, {Component} from 'react';
import AdminService from '../components/Service/AdminService';
import ResidentService from '../components/Service/ResidentService';
class ServiceBoard extends Component {
  state = {
    admin: false,
  }

  render() {
    return (
      <div classname='centered'>
        {
        this.state.admin ? <AdminService />
        :
        <ResidentService />
        }
      </div>
    )
  }
}

export default ServiceBoard;
