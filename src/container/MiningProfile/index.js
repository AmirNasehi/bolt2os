import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader'
import {
	Button,
	Table,
} from 'react-bootstrap'

class MiningProfile extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			smShow: false,
			lgShow: false
		};
	}

	render() {
		return (
			<div className="mining">
				<Loader loaded={true} color="white" />
				<p className="title-page">Mining Server Dashboard</p>
				<p className="gray-box">Mining Profiles</p>
				<div className="general-table">
					<Table striped condensed hover>
						<thead>
							<tr>
								<th>Mining Profile</th>
								<th>Profile Type</th>
								<th>Mining Pool(s)</th>
								<th>Switching Interval</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>TesterManero</td>
								<td>Single Pool</td>
								<td>Manero-Pool1</td>
								<td>N/A</td>
							</tr>
							<tr>
								<td>MultiManero</td>
								<td>Multi Pool</td>
								<td>
									<ul>
										<li>Manero-Pool1</li>
										<li>ZCash-Pool1 </li>
										<li>Dash-Pool1</li>
									</ul>
								</td>
								<td>60min</td>
							</tr>
							<tr>
								<td>MultiManero</td>
								<td>Multi Pool</td>
								<td>
									<ul>
										<li>Manero-Pool1</li>
										<li>ZCash-Pool1 </li>
										<li>Dash-Pool1</li>
									</ul>
								</td>
								<td>60min</td>
							</tr>
						</tbody>
					</Table>
					<div className="pagination-box">
						<Button className="btn-pagination">Showing 1 to 3 of 3 entries</Button>
						<nav className="page-box" aria-label="Page navigation example">
							<ul className="pagination justify-content-end">
								<li className="page-item disabled">
									<a className="page-link" href="#">Previous</a>
								</li>
								<li className="page-item"><a className="page-link" href="#">1</a></li>
								<li className="page-item disabled">
									<a className="page-link" href="#">Next</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div >
		)
	}
}

const mapStateToProps = state => ({
	session: state.session
});

export default connect(mapStateToProps)(MiningProfile)
