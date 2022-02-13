// TODO: implement the navbar reusable component. The logo, button and user login/logout status should change accordingly in different cases

import React from "react";

import { Layout } from "antd"


const { Header } = Layout

class Navbar extends React.Component {
	render() {
		return (
			<Header style={{ display: "flex", background: "white", justifyContent: "space-between" }}>
				<div style={{ fontSize: 16, fontWeight: 600 }}>
					Cozy
				</div>
				{this.props.authed && (
					<div>
						Login
					</div>
					// <div>Signup</div>
				)}
			</Header>
		)
	}
}

export default Navbar;
