import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img className="logo" src="/assets/img/green-logo.jpg" alt="" />
                <div className="right-side__header">
                    <Link to="/home/dashboard">Dashboard</Link>
                    <Link to="/home/dashboard">Contact US</Link>
                    <Link to="/">Sign Out</Link>
                    {/* <Button className="download-btn" href="/create">
                        <img className="logo-download" src="/assets/img/download.png" alt="" />
                        Download
                    </Button> */}
                </div>
            </div>
        )
    }
}