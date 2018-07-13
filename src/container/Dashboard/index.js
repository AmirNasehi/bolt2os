import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader'
import {
	Button,
	FormGroup,
	ControlLabel,
	FormControl,
	Checkbox,
	Table,
	Modal,
	Row,
	Col
} from 'react-bootstrap'

class Dashboard extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			smShow: false,
			lgShow: false
		};
	}

	render() {
		return (
			<div className="dashboard">
				<Loader loaded={true} color="white" />
				<p className="title-page">Mining Server Dashboard</p>
				<div className="filter-box">
					<p className="filter-txt">Filter By:</p>
					<div className="filter-inf">
						<FormGroup controlId="formControlsSelect" className="filter-select">
							<ControlLabel>Select</ControlLabel>
							<FormControl componentClass="select" placeholder="select">
								<option value="select">select</option>
								<option value="other">Mining</option>
								<option value="other">option ||</option>
								<option value="other">option |||</option>
							</FormControl>
						</FormGroup>
						<div className="btn-box">
							<Button className="gray-btn">Clear</Button>
							<Button className="green-btn">Search</Button>
						</div>
					</div>
				</div>
				<div className="search-box">
					<p className="filter-txt">Search Hosts:</p>
					<div className="filter-inf">
						<FormControl type="search" placeholder="Search" />
						<Button className="gray-btn">Update All Selected Hosts</Button>
					</div>
				</div>
				<div className="general-table">

					<Table striped condensed hover>
						<thead>
							<tr>
								<th><Checkbox /></th>
								<th>Host Name</th>
								<th>Mining Profile</th>
								<th>Status</th>
								<th>Uptime</th>
								<th>Average Gpu Temps</th>
								<th>Core/Mem Cloacks</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><Checkbox /></td>
								<td>minor01.NYC1</td>
								<td>Manero-Pool1</td>
								<td>Mining</td>
								<td>19 Days, 10 Hours</td>
								<td>70 C</td>
								<td>14 Mhz/ 1200 Mhz</td>
								<td className="table-btn">
									<Button className="green-btn">Start</Button>
									<Button className="gray-btn">Stop</Button>
									<Button onClick={() => this.setState({ lgShow: true })} className="black-btn">Edit</Button>
									<Button className="yellow-btn">Log</Button>
									<Button className="red-btn">Delete</Button>
								</td>
							</tr>
							<tr>
								<td><Checkbox /></td>
								<td>minor01.NYC1</td>
								<td>Manero-Pool1</td>
								<td>Mining</td>
								<td>19 Days, 10 Hours</td>
								<td>70 C</td>
								<td>14 Mhz/ 1200 Mhz</td>
								<td className="table-btn">
									<Button className="green-btn">Start</Button>
									<Button className="gray-btn">Stop</Button>
									<Button onClick={() => this.setState({ lgShow: true })} className="black-btn">Edit</Button>
									<Button className="yellow-btn">Log</Button>
									<Button className="red-btn">Delete</Button>
								</td>
							</tr>
							<tr>
								<td><Checkbox /></td>
								<td>minor01.NYC1</td>
								<td>Manero-Pool1</td>
								<td>Mining</td>
								<td>19 Days, 10 Hours</td>
								<td>70 C</td>
								<td>14 Mhz/ 1200 Mhz</td>
								<td className="table-btn">
									<Button className="green-btn">Start</Button>
									<Button className="gray-btn">Stop</Button>
									<Button onClick={() => this.setState({ lgShow: true })} className="black-btn">Edit</Button>
									<Button className="yellow-btn">Log</Button>
									<Button className="red-btn">Delete</Button>
								</td>
							</tr>
						</tbody>
					</Table>
					<div className="pagination-box">
						<Button className="btn-pagination">Showing 1 to 5 of 5 entries</Button>
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

				{/* Modal Edit */}
				<Modal
					show={this.state.lgShow} onHide={() => this.setState({ lgShow: false })}
					bsSize="large"
					aria-labelledby="contained-modal-title-lg"
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-lg">Server Info</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="modal-box">
							<Row className="row-modal">
								<Col md={3} sm={6}>
									<ControlLabel>Server Name</ControlLabel>
									<FormControl type="text" placeholder="text" />
								</Col>
								<Col md={3} sm={6}>
									<ControlLabel>UUID</ControlLabel>
									<FormControl type="text" defaultValue="text" readOnly />
								</Col>
								<Col md={3} sm={6}>
									<ControlLabel>Status</ControlLabel>
									<FormControl type="text" defaultValue="text" readOnly />
								</Col>
								<Col md={3} sm={6}>
									<ControlLabel>Target Temperature ℃</ControlLabel>
									<FormControl type="text" placeholder="text" />
								</Col>
							</Row>
							<Row className="row-modal">
								<Col md={3} sm={6}>
									<ControlLabel>Mining Profile</ControlLabel>
									<FormControl type="text" placeholder="text" />
								</Col>
								<Col md={3} sm={6}>
									<ControlLabel>BoltOS Version</ControlLabel>
									<FormControl type="text" defaultValue="text" readOnly />
								</Col>
								<Col md={3} sm={6}>
									<ControlLabel>Uptime</ControlLabel>
									<FormControl type="text" defaultValue="text" readOnly />
								</Col>
								<Col md={3} sm={6}>
									<ControlLabel>Minimum Fan Speed %</ControlLabel>
									<FormControl type="text" placeholder="text" />
								</Col>
							</Row>
							<Row className="bottom-box">
								<Col md={2} sm={6}>
									<ControlLabel>GPUs in Server</ControlLabel>
									<FormControl type="text" defaultValue="text" readOnly />
								</Col>
								<Col md={2} sm={6}>
									<ControlLabel>PCI Slot</ControlLabel>
									<FormControl className="simple-input" type="text" placeholder="text" />
									<FormControl className="simple-input" type="text" placeholder="text" />
								</Col>
								<Col md={3} sm={6}>
									<ControlLabel>GPU Make & Model</ControlLabel>
									<FormControl className="simple-input" type="text" placeholder="text" />
									<FormControl className="simple-input" type="text" placeholder="text" />
								</Col>
								<Col md={5} sm={6}>
									<div className="table-modal">
										<Table striped bordered condensed hover>
											<thead>
												<tr>
													<th width="10%">Core MHz</th>
													<th width="10%">Memory MHz</th>
													<th width="20%">Power Limit (watt)</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="modal-td"><FormControl className="table-input" type="text" value="1582"/></td>
													<td className="modal-td"><FormControl className="table-input" type="text" value="1350"/></td>
													<td className="modal-td"><FormControl className="table-input" type="text" value="200"/></td>
												</tr>
												<tr>
													<td className="modal-td"><FormControl className="table-input" type="text" value="1582"/></td>
													<td className="modal-td"><FormControl className="table-input" type="text" value="1350"/></td>
													<td className="modal-td"><FormControl className="table-input" type="text" value="200"/></td>
												</tr>
											</tbody>
										</Table>
									</div>
								</Col>
							</Row>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button className="green-btn">Update Server Info</Button>
						<Button className="red-btn">Delete Server</Button>
					</Modal.Footer>
				</Modal>
			</div >
		)
	}
}

const mapStateToProps = state => ({
	session: state.session
});

export default connect(mapStateToProps)(Dashboard)
