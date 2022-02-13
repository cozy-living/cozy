import React, { Component } from "react";

import { Layout } from "antd"


// TODO
//		#1. Find a better color scheme
//		#2. Write the proper text / content


class Footer extends Component {
	render() {
		return (
			<Layout style={{ background: 'white' }}>
				<div style={{ textAlign: 'center' }}>
					沪公网安备31011002002436号
				</div>
				<div style={{ textAlign: 'center' }}>
					儿童色情信息举报专区
				</div>
				<div style={{ textAlign: 'center' }}>
					扫黄打非举报
				</div>
			</Layout>
		)
	}
}

export default Footer;
