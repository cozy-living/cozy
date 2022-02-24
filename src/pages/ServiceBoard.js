import React, {Component} from 'react';
import AdminService from '../components/Service/AdminService';
import ResidentService from '../components/Service/ResidentService';
class ServiceBoard extends Component {
  state = {
    admin: false,
  }
  componentDidMount = () => {
    const asHost = localStorage.getItem("asHost");
    this.setState({
      admin: asHost,
    })
  }
  render() {
    return (
      <div className='centered'>
        {
        this.state.admin == "true" ? <AdminService />
        :
        <ResidentService />
        }
      </div>
    )
  }
}

export default ServiceBoard;
