import React from 'react'
import { Link } from 'react-router-dom'
import { NavDropdown,MenuItem } from "react-bootstrap";

export default class Sidebar extends React.Component {

	render() {
		return (
			<nav className="sidebar">
				<ul>
					<li className="side-li">
						<Link to="/home/dashboard">
							<div className="logo-dashboard"/>
							<p className="side-title">Dashboard</p>
						</Link>
					</li>
					<li className="side-li">
						<Link to="/home/profile">
							<div className="logo-profile" />
							<p className="side-title">User Profile</p>
						</Link>
					</li>
					<li>
						<div className="data-txt">
							<p className="side-title">Data</p>
							<img className="plus" src="/assets/img/plus.png" alt="" />
						</div>
					</li>
					<li className="side-li">
						<Link to="/home/pools">
							<div className="logo-pools" />
							<p className="side-title">Mining Pools</p>
						</Link>
					</li>
					<li className="side-li">
						<Link to="/home/miningprofile">
							<div className="logo-mining" />
							<p className="side-title">Mining Profile</p>
						</Link>
					</li>
					{/* <li className="side-li">
						<Link to="/home/miningprofile">
							<div className="logo-mining" />
							<NavDropdown eventKey={3} title="Mining Profile" id="basic-nav-dropdown">
								<MenuItem eventKey={3.1}><p>TesterManero</p><img className="edit-img" src="/assets/img/black-edit.png" alt="" /></MenuItem>
								<MenuItem eventKey={3.2}><p>MultiManero</p><img className="edit-img" src="/assets/img/black-edit.png" alt="" /></MenuItem>
								<MenuItem eventKey={3.3}><p>ProfitabilityProfile</p><img className="edit-img" src="/assets/img/black-edit.png" alt="" /></MenuItem>
								<MenuItem eventKey={3.4}><p>Show All</p></MenuItem>
							</NavDropdown>
						</Link>
					</li> */}
				</ul>
			</nav>
		)
	}
}
