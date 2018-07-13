import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader'
import {
	Button,
	Table,
	FormGroup,
	FormControl,
	ControlLabel
} from 'react-bootstrap'

class Edit extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			smShow: false,
			lgShow: false
		};
	}

	render() {
		return (
			<div className="pools">
				<Loader loaded={true} color="white" />
				<p className="title-page">Mining Server Dashboard</p>
				<p className="gray-box"><img className="edit-img" src="/assets/img/edit.png" alt="" />MultiManero | Mining Profiles</p>
				<div className="edit">
					<FormGroup>
						<ControlLabel>Profile Name</ControlLabel>
						<FormControl type="text" placeholder="text" />
					</FormGroup>

					<FormGroup controlId="formControlsSelect" className="filter-select">
						<ControlLabel>Profile Type</ControlLabel>
						<FormControl componentClass="select" placeholder="select">
							<option value="select">Multi Pool</option>
						</FormControl>
					</FormGroup>
					<Button className="green-btn">Add Pool</Button>

					<div className="general-table">
						<p className="title-page">Pools</p>
						<Table striped condensed hover>
							<tbody>
								<tr>
									<td>Manero-Pool1</td>
									<td className="table-btn"><Button>Drag Up/Down<img className="move-img" src="/assets/img/move.png" alt="" /></Button></td>
									<td><Button className="red-btn">Delete</Button></td>
								</tr>
								<tr>
									<td>Manero-Pool1</td>
									<td className="table-btn"><Button>Drag Up/Down<img className="move-img" src="/assets/img/move.png" alt="" /></Button></td>
									<td><Button className="red-btn">Delete</Button></td>
								</tr>
								<tr>
									<td>Manero-Pool1</td>
									<td className="table-btn"><Button>Drag Up/Down<img className="move-img" src="/assets/img/move.png" alt="" /></Button></td>
									<td><Button className="red-btn">Delete</Button></td>
								</tr>
							</tbody>
						</Table>
					</div>
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
					<FormGroup controlId="formControlsSelect" className="filter-select">
						<ControlLabel>Select</ControlLabel>
						<FormControl componentClass="select" placeholder="select">
							<option value="select">select</option>
							<option value="other">Mining</option>
							<option value="other">option ||</option>
							<option value="other">option |||</option>
						</FormControl>
					</FormGroup>
					<div className="btn-bottom">
						<Button className="green-btn">Update Server Info</Button>
						<Button className="red-btn">Delete Server</Button>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	session: state.session
});

export default connect(mapStateToProps)(Edit)
