import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from "common/Footer";
import { Button, FormControl, ControlLabel } from "react-bootstrap";

class Create extends Component {
    state = {
        email: '',
        password: '',
    }

    render() {

        return (
            <div className="create">
                <div className="login-header">
                    <img className="logo" src="/assets/img/green-logo.jpg" alt="" />
                    <div className="right-side__header">
                        <Link to="/home/dashboard">Dashboard</Link>
                        <Link to="/home/dashboard">Contact US</Link>
                        <Link to="/">Sign In</Link>
                        <Button className="create-btn" href="/create">Create An Account</Button>
                    </div>
                </div>

                <div className="create-content">
                    <div className="container">
                        <form className="create-box">
                            <div className="center-box">
                                <p className="h4">Create <b>Boltos.lo</b> Account</p>
                                <p className="second-txt">Let's quickly gather some brief information and you'll be on your way to gain access to a robust platform!</p>

                                <div className="flex-row">
                                    <div className="half-width">
                                        <ControlLabel>First Name</ControlLabel>
                                        <FormControl type="text" placeholder="Enter First Name Here.." />
                                    </div>

                                    <div className="half-width">
                                        <ControlLabel>Last Name</ControlLabel>
                                        <FormControl type="text" placeholder="Enter Last Name Here.." />
                                    </div>
                                </div>
                                <div className="flex-row">
                                    <div className="complete-width">
                                        <ControlLabel>Username</ControlLabel>
                                        <FormControl type="text" placeholder="Username" />
                                    </div>
                                </div>
                                <div className="flex-row">
                                    <div className="half-width">
                                        <ControlLabel>Title</ControlLabel>
                                        <FormControl type="text" placeholder="Enter Title Here.." />
                                    </div>

                                    <div className="half-width">
                                        <ControlLabel>Company</ControlLabel>
                                        <FormControl type="text" placeholder="Enter Company Name Here.." />
                                    </div>
                                </div>
                                <div className="flex-row">
                                    <div className="half-width">
                                        <ControlLabel>Password</ControlLabel>
                                        <FormControl type="password" placeholder="Enter Password Here.." />
                                    </div>

                                    <div className="half-width">
                                        <ControlLabel>Confirm Password</ControlLabel>
                                        <FormControl type="password" placeholder="Enter Confirmation Password Here.." />
                                    </div>
                                </div>
                                <div className="flex-row">
                                    <div className="complete-width">
                                        <ControlLabel>Email</ControlLabel>
                                        <FormControl type="email" placeholder="Enter Email Address Here.." />
                                    </div>
                                </div>

                                <Button className="create-account__btn" type="submit">Create Account</Button>
                                <div className="more-information">
                                    <label>
                                        <small>By clicking Sign In, you agree to our <Link to="#">Terms of Use</Link> and our <Link to="#">Privacy Policy</Link>.</small>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps)(Create)