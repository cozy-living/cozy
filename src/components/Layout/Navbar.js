import React from "react"

import { Row, Col, Layout, Menu, Button, Avatar, Dropdown, message, Image } from "antd"
import { UserOutlined } from "@ant-design/icons/lib/icons"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../Authentication/Login"
import Signup from "../Authentication/Signup"
import logo from "../../assets/images/resident-logo.png";

const { Header } = Layout;


class Navbar extends React.Component {
	state = {
		authed: false,
		username: "",
	}


	componentDidMount() {
		const userId = localStorage.getItem("userId")
		const username = localStorage.getItem("username")
		console.log("navbar mount")
		this.setState({
			authed: userId != null,
			username: username,
		})
	}



	handleLoginSuccess = (userId, username) => {
		localStorage.setItem("userId", userId)
		localStorage.setItem("username", username)
		this.setState({
			authed: true,
			username: username
		})
	}
	
	handleLogOut = () => {
		localStorage.removeItem("userId")
		localStorage.removeItem("username")
		this.setState({
			authed: false,
		})
		message.success("Successfully logged out!")
	}



	render() {

		const profileOption = (
			<Menu>
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
							<img
								src={logo}
								alt="Logo Here"
								width="140"
								height="40"
							/>
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
								<span style={{ marginRight: "12px" }}>{this.state.username}</span>
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
