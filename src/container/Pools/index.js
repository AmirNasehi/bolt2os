import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader'
import {
	Button,
	Table,
	Row,
	Col
} from 'react-bootstrap'

class Pools extends Component {

	render() {
		return (
			<div className="pools">
				<Loader loaded={true} color="white" />
				<p className="title-page">Mining Server Dashboard</p>
				<div className="chart">
					<p className="gray-box">Mining Pools</p>
					<Row>
						<Col sm={12} md={4}>
							<div className="chart-box">
								<p className="title-chart gray-btn">Chart Data</p>
								<img className="cirecle-chart-img" src="/assets/img/pie-chart.png" alt="" />
							</div>
						</Col>
						<Col sm={12} md={4}>
							<div className="chart-box">
								<p className="title-chart lightgray-btn">Chart Data</p>
								<img className="chart-img" src="/assets/img/chart.png" alt="" />
							</div>
						</Col>
						<Col sm={12} md={4}>
							<div className="chart-box">
								<p className="title-chart red-btn">Chart Data</p>
								<img className="chart-img" src="/assets/img/bar-chart.png" alt="" />
							</div>
						</Col>
					</Row>
				</div>
				<div className="general-table">
					<Table striped condensed hover>
						<thead>
							<tr>
								<th>Account Name</th>
								<th>Currency</th>
								<th>Stratum URL</th>
								<th>Username</th>
								<th>Password</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Manero-Pool1</td>
								<td><img className="bitcoin-img" src="/assets/img/bitcoin.png" alt="" />Bitcoin</td>
								<td>ASDADFAEWQQ00001</td>
								<td>AndyYe</td>
								<td>---</td>
								<td className="table-btn">
									<Button className="black-btn">Edit</Button>
									<Button className="red-btn">Delete</Button>
								</td>
							</tr>
							<tr>
								<td>Manero-Pool1</td>
								<td><img className="bitcoin-img" src="/assets/img/bitcoin.png" alt="" />Bitcoin</td>
								<td>ASDADFAEWQQ00001</td>
								<td>AndyYe</td>
								<td>---</td>
								<td className="table-btn">
									<Button className="black-btn">Edit</Button>
									<Button className="red-btn">Delete</Button>
								</td>
							</tr>
							<tr>
								<td>Manero-Pool1</td>
								<td><img className="bitcoin-img" src="/assets/img/bitcoin.png" alt="" />Bitcoin</td>
								<td>ASDADFAEWQQ00001</td>
								<td>AndyYe</td>
								<td>---</td>
								<td className="table-btn">
									<Button className="black-btn">Edit</Button>
									<Button className="red-btn">Delete</Button>
								</td>
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

export default connect(mapStateToProps)(Pools)
