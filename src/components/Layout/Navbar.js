import React from "react"

import { Row, Col, Layout, Menu, Button, Avatar, Dropdown, message } from "antd"
import { UserOutlined } from "@ant-design/icons/lib/icons"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../Authentication/Login"
import Signup from "../Authentication/Signup"

const { Header } = Layout;

// TODO (or Things to fix):
//   #1. Put logo into place
//   #2. Change authed from false to true: notice the avartar and login/signup button is NOT in the same position 
//   #3. Implement on-click response: navbar option, profile option, logo?
//   #4. Navbar collapses when window is resized: use grid gutter for responsive design ({ xs: 8, sm: 16, md: 24, lg: 32 })


// const profileOption = (
// 	<Menu>
// 		<Menu.Item>
// 			<span>Account</span>
// 			<Link to="/dashboard"></Link>
// 		</Menu.Item>
// 		<Menu.Item
// 			style={{ color: "red" }}
// 			onClick={this.handleLogOut}
// 		>
// 			<span>Log Out</span>
// 		</Menu.Item>
// 	</Menu>
// )


class Navbar extends React.Component {
	state = {
		authed: false,
		username: "",
	}


	componentDidMount() {
		const authToken = localStorage.getItem("authToken")
		const username = localStorage.getItem("username")
		this.setState({
			authed: authToken != null,
			username: username,
		})
	}



	handleLoginSuccess = (token, username) => {
		localStorage.setItem("authToken", token)
		localStorage.setItem("username", username)
		this.setState({
			authed: true,
			username: username
		})
	}
	
	handleLogOut = () => {
		localStorage.removeItem("authToken")
		localStorage.removeItem("username")
		this.setState({
			authed: false,
		})
	}



	render() {

		const profileOption = (
			<Menu>
				<Menu.Item>
					<span>Account</span>
					<Link to="/dashboard"></Link>
				</Menu.Item>
				<Menu.Item
					style={{ color: "red" }}
					onClick={this.handleLogOut}
				>
					<span>Log Out</span>
				</Menu.Item>
			</Menu>
		)

		return (

			<Header style={{ background: "white" }}>
				<Row>
					<Col span={4} style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
						<div>
							{/* TODO : Fill the Logo image here */}
							LOGO HERE
						</div>
					</Col>
					<Col span={16} style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
						<Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
							<Menu.Item key="1">
								<span>Home</span>
								<Link to="/" />
							</Menu.Item>
							<Menu.Item key="2">
								<span>Payment</span>
								<Link to="payment" />
							</Menu.Item>
							<Menu.Item key="3">
								<span>Service</span>
								<Link to="service" />
							</Menu.Item>
							<Menu.Item key="4">
								<span>Post</span>
								<Link to="discussion" />
							</Menu.Item>
						</Menu>
					</Col>
					<Col span={4}>
						{this.state.authed ?
							<div style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
								<span style={{ marginRight: "12px" }}>Hello, {this.state.username} ~</span>
								<Dropdown overlay={profileOption} placement="bottomCenter" arrow>
									<Avatar icon={<UserOutlined />}></Avatar>
								</Dropdown>
							</div> :
							<>
								<Login handleLoginSuccess={this.handleLoginSuccess} />
								<Signup />
							</>
						}
					</Col>
				</Row>
			</Header>
		)
	}
}



export default Navbar;
