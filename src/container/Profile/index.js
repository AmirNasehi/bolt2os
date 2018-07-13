import React, { Component } from 'react'
import query from '../../common/Query'
import { connect } from 'react-redux'
import { ControlLabel, FormControl, Button, Row, Col } from "react-bootstrap";

class Profile extends Component {
	state = {}

	componentWillMount() {
		console.log('===>', this.props)
	}

	render() {
		return (
			<div className="profile">
				<p className="title-page">User Profile</p>
				<div className="flex-row">
					<div className="profile-box">
						<div className="flex-row">
							<div className="left-box">
								<img className="profile-img" src="/assets/img/default.jpg" alt="" />
								<small><img className="img-logo" src="/assets/img/image.png" alt="" />Click here to change image</small>
							</div>
							<div className="right-box">
								<p className="h5">Profile Name</p>
								<small>Sales Executive</small>
								<p className="bio-txt">Bio</p>
								<ul>
									<li>Placeholder for bio text. </li>
									<li>Placeholder for bio text. </li>
									<li>Placeholder for bio text. </li>
									<li>Placeholder for bio text. </li>
									<li>Placeholder for bio text. </li>
									<li>Placeholder for bio text. </li>
								</ul>
							</div>
						</div>
						<ControlLabel>User Name</ControlLabel>
						<FormControl type="text" placeholder="user name" />
						<ControlLabel>Old Password</ControlLabel>
						<FormControl type="password" placeholder="Password" />
						<ControlLabel>New Password</ControlLabel>
						<FormControl type="password" placeholder="new password" />
						<ControlLabel>Confirm New Password</ControlLabel>
						<FormControl type="password" placeholder="confirm new Password" />
						<Button className="gray-btn" type="submit">Change Password</Button>
					</div>
					<div className="noti-box">
						<p className="title-page">Notifications</p>
						<Row>
							<Col sm={12} md={4}>
								<div className="flex-row">
									<p>Email</p>
									<div class="btn-group btn-group-sm btn-group-toggle" data-toggle="buttons">
										<label class="btn btn-secondary active"><input type="radio" name="options" id="option1" autocomplete="off" checked="" />On</label>
										<label class="btn btn-secondary"><input type="radio" name="options" id="option2" autocomplete="off" disabled="" />Off</label>
									</div>
								</div>
							</Col>
							<Col sm={12} md={8}>
								<ControlLabel>Email Address</ControlLabel>
								<FormControl type="email" placeholder="your email" />
							</Col>
							<Col sm={12} md={4}>
								<div className="flex-row">
									<p>SMS</p>
									<div class="btn-group btn-group-sm btn-group-toggle" data-toggle="buttons">
										<label class="btn btn-secondary active"><input type="radio" name="options" id="option1" autocomplete="off" checked="" />On</label>
										<label class="btn btn-secondary"><input type="radio" name="options" id="option2" autocomplete="off" disabled="" />Off</label>
									</div>
								</div>
							</Col>
							<Col sm={12} md={8}>
								<ControlLabel>SMS Phone Number</ControlLabel>
								<FormControl type="number" placeholder="your sms" />
							</Col>
							<Col sm={12} md={4}>
								<div className="flex-row">
									<p>Telegram</p>
									<div class="btn-group btn-group-sm btn-group-toggle" data-toggle="buttons">
										<label class="btn btn-secondary active"><input type="radio" name="options" id="option1" autocomplete="off" checked="" />On</label>
										<label class="btn btn-secondary"><input type="radio" name="options" id="option2" autocomplete="off" disabled="" />Off</label>
									</div>
								</div>
							</Col>
							<Col sm={12} md={8}>
								<ControlLabel>Telegram ID</ControlLabel>
								<FormControl type="text" placeholder="your telegram id" />
							</Col>
							<Col sm={12} md={4}>
								<div className="flex-row">
									<p>Slack</p>
									<div class="btn-group btn-group-sm btn-group-toggle" data-toggle="buttons">
										<label class="btn btn-secondary active"><input type="radio" name="options" id="option1" autocomplete="off" checked="" />On</label>
										<label class="btn btn-secondary"><input type="radio" name="options" id="option2" autocomplete="off" disabled="" />Off</label>
									</div>
								</div>
							</Col>
							<Col sm={12} md={8}>
								<ControlLabel>Slack ID</ControlLabel>
								<FormControl type="text" placeholder="your slack id" />
							</Col>
						</Row>
						<Button type="submit" className="gray-btn">Save Notifications</Button>
						<p className="title-page second-title">Two Factor Authentication</p>
						<img className="qr-img" src="/assets/img/qr.png" alt="" />
						<div className="flex-row flex-start">
							<ControlLabel>Secret Key:</ControlLabel>
							<FormControl className="bottom-label" type="text" placeholder="your text" readOnly/>
						</div>
						<div className="flex-row flex-start">
							<ControlLabel>Authentication Code:</ControlLabel>
							<FormControl className="bottom-label" type="number" placeholder="your code"/>
						</div>
						<Button type="submit" className="gray-btn">Enable</Button>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	session: state.session
});

export default connect(mapStateToProps)(Profile)