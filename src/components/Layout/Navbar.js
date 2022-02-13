import React from "react"

import { Row, Col, Layout, Menu, Button, Avatar, Dropdown } from "antd"
import { UserOutlined } from "@ant-design/icons/lib/icons"

const { Header } = Layout;

// TODO (or Things to fix):
//   #1. Put logo into place
//   #2. Change authed from false to true: notice the avartar and login/signup button is NOT in the same position 
//   #3. Implement on-click response: navbar option, profile option, logo?
//   #4. Navbar collapses when window is resized: use grid gutter for responsive design ({ xs: 8, sm: 16, md: 24, lg: 32 })


const profileOption = (
	<Menu>
		<Menu.Item>
			<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
				Account
			</a>
		</Menu.Item>
		<Menu.Item style={{ color: "red" }}>
			<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
				Log Out
			</a>
		</Menu.Item>
	</Menu>
)


class Navbar extends React.Component {
	state = {
		authed: false
	}

	render() {
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
							<Menu.Item key="1">Home</Menu.Item>
							<Menu.Item key="2">Payment</Menu.Item>
							<Menu.Item key="3">Service</Menu.Item>
							<Menu.Item key="4">Post</Menu.Item>
						</Menu>
					</Col>
					<Col span={4}>
						{this.state.authed ?
							<>
								<Button type="secondary" style={{ margin: "6px" }}>Log In</Button>
								<Button type="primary" style={{ margin: "6px" }}>Sign Up</Button>
							</> :
							<div style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
								<span style={{ marginRight: "12px" }}>Hello, Eddy ~</span>
								<Dropdown overlay={profileOption} placement="bottomCenter" arrow>
									<Avatar icon={<UserOutlined />}></Avatar>
								</Dropdown>
							</div>
						}
					</Col>
				</Row>
			</Header>
		)
	}
}



export default Navbar;
