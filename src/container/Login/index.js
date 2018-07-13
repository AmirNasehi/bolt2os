import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from "common/Footer";
import { Button, Row, Col, FormControl, Checkbox } from "react-bootstrap";

class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    render() {

        return (
            <div className="login">
                <div className="login-header">
                    <img className="logo" src="/assets/img/green-logo.jpg" alt="" />
                    <div className="right-side__header">
                        <Link to="/home/dashboard">Dashboard</Link>
                        <Link to="/home/dashboard">Contact US</Link>
                        <Link to="/">Sign In</Link>
                        <Button className="create-btn" href="/create">Create An Account</Button>
                    </div>
                </div>

                <div className="login-content">
                    <div className="container">
                        <Row>
                            <Col sm={12} md={8}>
                                <div className="text-box">
                                    <p className="h3 login-title">Boltos.lo</p>
                                    <p className="second-title">A powerful system with innovative technologies you can depend on!</p>
                                    <p className="light-text">
                                        Experience a robust web portal that will allow you to manage and monitor your mining process with ease.
                                    </p>
                                    <Button className="create-btn" href="/create">Create An Account</Button>
                                </div>
                            </Col>
                            <Col sm={12} md={4}>
                                <form className="login-box">
                                    <p className="h4">Sign In</p>
                                    <p className="h5 second-txt">Please enter your Username and Password.</p>

                                    <FormControl type="email" placeholder="Email" />
                                    <FormControl type="password" placeholder="Password" />

                                    <Checkbox>
                                        Remember me
                                    </Checkbox>
                                    <div className="more-information">
                                        <label>
                                            <small>By clicking Sign In, you agree to our <Link to="#">Terms of Use</Link> and our <Link to="#">Privacy Policy</Link>.</small>
                                        </label>
                                    </div>
                                    <Button className="signin-btn" type="submit">Sign In</Button>
                                    <Link to="/password" className="forgot-txt"><p>Forgot your password or username?</p></Link>
                                </form>
                            </Col>
                        </Row>
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

export default connect(mapStateToProps)(Login)