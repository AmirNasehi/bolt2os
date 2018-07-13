import React, { Component } from 'react'
import { connect } from 'react-redux'

class NotMatch extends Component {
    render() {
        return (
            <div className="login">
                not maaaaaaaaaaaaaaaaaaaaaatch
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps)(NotMatch)
