import React from "react"
import { Form, Button, Input, Space, message, Modal, Checkbox } from "antd"
import { UserOutlined } from "@ant-design/icons"
import { login } from "../../utils"

class Login extends React.Component {


	formRef = React.createRef()
	state = {
		loading: false,
		visible: false,
		asAdmin: false,
	}

	showModal = () => {
		this.setState({
			visible: true
		})
	}

	handleCancel = () => {
		this.setState({
			visible: false,
			loading: false,
		})
	}


	handleSubmit = async () => {
		const formInstance = this.formRef.current

		this.setState({
			loading: true,
		})

		try {
			const params = formInstance.getFieldsValue()
			const userId = await login(params, this.state.asAdmin);
			this.props.handleLoginSuccess(userId, params["username"])
			localStorage.setItem("userId", userId);
			localStorage.setItem("asHost", this.state.asAdmin);
			message.success("Welcome, " + params["username"])
		} catch (error) {
			message.error(error.message)
		} finally {
			this.setState({
				loading: false,
			})
		}
	}

	handleSuccess = async () => {
		this.formRef.current.resetFields()
		this.setState({
			visible: false,
		})
	}
	handleCheckboxOnChange = (e) => {
		this.setState({
			asAdmin: e.target.checked,
		});
	}

	render() {
		return (
			<>
				<Button
					type="secondary"
					style={{ margin: "6px" }}
					onClick={this.showModal}
				>
					Login
				</Button>
				<Modal
					visible={this.state.visible}
					title="Login"
					onOk={this.handleSubmit}
					onCancel={this.handleCancel}
					width={400}
					footer={[
						<Button key='back' onClick={this.handleCancel}>
							Cancel
						</Button>,
						<Button key='submit' loading={this.state.loading} onClick={this.handleSubmit}>
							Submit
						</Button>,
					]}
				>
					<Form ref={this.formRef} onFinish={this.onFinish}>
						<Form.Item
							name="username"
							rules={[
								{
									required: true,
									message: 'Please input username',
								},
							]}
						>
							<Input
								disabled={this.state.loading}
								prefix={<UserOutlined className="site-form-item-icon" />}
								placeholder="Username"
							/>
						</Form.Item>
						<Form.Item
							name="password"
							rules={[
								{
									required: true,
									message: 'Please enter your password',
								},
							]}
						>
							<Input.Password
								disabled={this.state.loading}
								placeholder="Password"
							/>
						</Form.Item>
						
					</Form>
					<Checkbox
						disabled={this.state.loading}
						checked={this.state.asAdmin}
						onChange={this.handleCheckboxOnChange}
						>
						Admin Account
					</Checkbox>
				</Modal>
			</>


		)
	}
}


export default Login;