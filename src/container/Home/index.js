import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from "common/Header"
import Sidebar from "common/Sidebar";
import Footer from "common/Footer";

class Home extends Component {

	render() {
		return (
			<div>
				<Header />
				<div className="main-page">
					<Sidebar />
					<div className="mainbar">
						{this.props.children}
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	session: state.session
});

export default connect(mapStateToProps)(Home)
