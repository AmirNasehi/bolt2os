import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from "common/Footer";
import { Button, FormControl, FormGroup,InputGroup } from "react-bootstrap";

class Password extends Component {
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
                            <div className="password-box">
                                <img className="password-img" src="/assets/img/typing.jpg" alt="" />
                                <p className="h4">Forgot Password?</p>
                                <p className="second-txt">You will be emailed a link if email address is found.</p>
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon><div className="icon-email"/></InputGroup.Addon>
                                        <FormControl type="email" placeholder="email address"/>
                                    </InputGroup>
                                </FormGroup>

                                <div className="flex-row">
                                    <Button className="password-btn" type="submit">Reset Password</Button>
                                    <Button className="password-btn" type="submit">Recover Username</Button>
                                </div>
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

export default connect(mapStateToProps)(Password)