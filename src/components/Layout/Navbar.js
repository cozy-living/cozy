import React from "react"

import { Row, Col, Layout, Menu, Button, Avatar, Dropdown, message, Image } from "antd"
import { UserOutlined } from "@ant-design/icons/lib/icons"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../Authentication/Login"
import Signup from "../Authentication/Signup"
import { selectLogo } from "../../helperFunc";

const { Header } = Layout;


class Navbar extends React.Component {
	state = {
		authed: false,
		username: "",
	}


	componentDidMount() {
		const userId = localStorage.getItem("userId")
		const username = localStorage.getItem("username")
		// console.log("navbar mount")
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
		window.location.href = "./home";
	}

	handleLogOut = () => {
		localStorage.removeItem("userId")
		localStorage.removeItem("username")
		localStorage.setItem("asHost", false)
		this.setState({
			authed: false,
		})
		window.location.href = "./home";
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
		const userId = localStorage.getItem("userId");
		return (

			<Header style={{ background: "white" }}>
				<Row>
					<Col span={4} style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
						<div>
							<img
								src={selectLogo()}
								alt="Logo Here"
								width="175"
								height="55"
							/>
						</div>
					</Col>
					<Col span={16}>
						{userId ?
							<Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
								<Menu.Item key="1">
									<span>Home</span>
									<Link to="/" />
								</Menu.Item>
								{localStorage.getItem("asHost") === 'false' &&
									<Menu.Item key="2">
										<span>Payment</span>
										<Link to="payment" />
									</Menu.Item>}
								<Menu.Item key="3">
									<span>Service</span>
									<Link to="service" />
								</Menu.Item>
								<Menu.Item key="4">
									<span>Post</span>
									<Link to="discussion" />
								</Menu.Item>
							</Menu> :
							<div></div>
						}
					</Col>
					<Col span={4}>
						{userId ?
							<div style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
								<span style={{ marginRight: "12px" }}>{this.state.username}</span>
								<Dropdown overlay={profileOption} placement="bottomCenter" arrow>
									<Avatar icon={<UserOutlined />}></Avatar>
								</Dropdown>
							</div> :
							<div>
								<Login handleLoginSuccess={this.handleLoginSuccess} />
								<Signup />
							</div>
						}
					</Col>
				</Row>
			</Header>
		)
	}
}

export default Navbar;
