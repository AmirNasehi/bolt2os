import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


export default class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<div className="container">
					<div className="first-box">
						<div className="col-box">
							<p className="footer-title">Company</p>
							<Link to="/home/dashboard">Dashboard</Link>
							<Link to="/home/dashboard">Contact US</Link>
							<Link to="/home">Sign In</Link>
							<Button className="create-btn" href="/create">Create An Account</Button>
						</div>
						<div className="col-box">
							<p className="footer-title">Connnect</p>
							<div>
								<img className="logo" src="/assets/img/instagram.png" alt="" />
								<img className="logo" src="/assets/img/twitter.png" alt="" />
								<img className="logo" src="/assets/img/facebook.png" alt="" />
								<img className="logo" src="/assets/img/linkedin.png" alt="" />
							</div>
						</div>
					</div>
					<p>© Bolt Network LLC | Terms & Conditions | Privacy Policy</p>
				</div>
			</div>
		)
	}
}
