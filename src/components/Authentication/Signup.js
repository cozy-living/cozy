import React from "react"
import { Form, Button, Input, Space, message, Modal } from "antd"
import { UserOutlined } from "@ant-design/icons"

class Signup extends React.Component {
	formRef = React.createRef()
	state = {
		loading: false,
		visible: false,
	}

	onFinish = () => {
		console.log("finish form")
	}


	showModal = () => {
		this.setState({
			visible: true
		})
	}

	handleCancel = () => {
		this.setState({
			visible: false
		})
	}

	handleSubmit = async () => {
		this.setState({
			loading: true
		})
	}

	handleSignup = async () => {
		const formInstance = this.formRef.current

		// try {
		// 	await formInstance.validateFields()
		// } catch (error) {
		// 	return
		// }

		this.setState({
			loading: true
		})

		

		// try {
		// 	const { asHost } = this.state
		// 	const resp = await login(formInstance.getFieldsValue(true), asHost)
		// 	this.props.handleLoginSuccess(resp.token, asHost)
		// } catch (error) {
		// 	message.error(error.message)
		// } finally {
		// 	this.setState({
		// 		loading: false,
		// 	})
		// }
	}

	render() {
		return (
			<>
				<Button
					type="primary"
					style={{ margin: "6px" }}
					onClick={this.showModal}
				>
					Signup
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
							name="email"
							rules={[
								{
									type: 'email',
									message: 'Please enter a valid email address',
								},
								{
									required: true,
									message: 'Please input your email',
								},
							]}
						>
							<Input
								disabled={this.state.loading}
								placeholder="Email"
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


						<Form.Item
							name="confirm"
							dependencies={['password']}
							hasFeedback
							rules={[
								{
									required: true,
									message: 'Please confirm your password'
								},
								({ getFieldValue }) => ({
									validator(_, value) {
										if (!value || getFieldValue('password') === value) {
											return Promise.resolve();
										}
										return Promise.reject(new Error('Confirmation must match original password'))
									}
								})
							]}
						>
							<Input.Password
								disabled={this.state.loading}
								placeholder="Confirm Password"
							/>
						</Form.Item>

					</Form>
				</Modal>

			</>
		)
	}

}


export default Signup;