import React from "react"
import { Form, Button, Input, Space, message, Modal } from "antd"
import { UserOutlined } from "@ant-design/icons"
import { register } from "../../utils"


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
			visible: true,
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
			loading: true
		})

		try {
			let f = formInstance.getFieldValue()
			delete f["confirm"]
			await register(f)
			message.success("Successfully created account")
			this.setState({
				visible: false
			})
		} catch (error) {
			message.error(error.message)
		} finally {
			this.setState({
				loading: false,
			})
			formInstance.resetFields()
		}
	}

	render() {
		return (
			<>
				<Button
					type="primary"
					style={{ margin: "6px" }}
					onClick={this.showModal}
				>
					Sign up
				</Button>

				<Modal
					visible={this.state.visible}
					title="Sign up"
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
							name="suite"
							rules={[
								{
									required: true,
									message: 'Please enter suite number',
								},
							]}
						>
							<Input
								disabled={this.state.loading}
								placeholder="Suite"
							>
							</Input>
						</Form.Item>
						<Form.Item
							name="username"
							rules={[
								{
									required: true,
									message: 'Please create a username',
								},
							]}
						>
							<Input
								disabled={this.state.loading}
								placeholder="Username"
							>
							</Input>
						</Form.Item>
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