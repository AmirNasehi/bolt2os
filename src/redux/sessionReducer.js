const initialState = {
    loggedIn: false,
    user: {},
    userId: undefined,
    sessionId: undefined,
    data: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_LOGIN':
            return {
                loggedIn: false,
                user: {}
            }
        case 'REQUESTED_LOGIN_SUCCEEDED':
            console.log("Logged In")
            return {
                loggedIn: true,
                user: action.user,
            }
        case 'REQUESTED_INSTA_LOGIN_REJECTED':
            return {
                loggedIn: false,
                msg: action.message
            }
        case 'REQUEST_LOGOUT':
            console.log("Logged Out")
            return {
                loggedIn: false,
                user: {},
                data: {}
            }
        case 'UPDATE_STATE':
            console.log(action)
            return {
                loggedIn: true,
                data: action.reqData.data,
                user: action.reqData.user
            }
    }
    return state
}
