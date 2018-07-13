import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'

import Home from './container/Home'
import Dashboard from './container/Dashboard'
import Login from './container/Login'
import Create from './container/Create'
import Password from './container/Password'
import Pools from './container/Pools'
import Edit from './container/Edit'
import MiningProfile from './container/MiningProfile'
import Profile from './container/Profile'
import NotMatch from './container/404'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/create" component={Create} />
				<Route exact path="/password" component={Password} />
				<Route path="/home" render={() => (
					<Home>
						<Route path="/home/dashboard" component={Dashboard} />
						<Route path="/home/pools" component={Pools} />
						<Route path="/home/miningprofile" component={MiningProfile} />
						<Route path="/home/edit" component={Edit} />
						<Route path="/home/profile" component={Profile} />
					</Home>
				)} />
				<Route path="*" component={NotMatch} />
			</Switch>
		</Router>
	)
}

export default App
