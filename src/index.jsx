import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { saveState } from './redux/localStorage'
import { AppContainer } from 'react-hot-loader'
import App from './app'
import '../styles/index.scss'

store.subscribe(() => {
	saveState(store.getState())
})

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./app', () => {
		const NextApp = require('./app').default;
		ReactDOM.render(
			<Provider store={store}>
				<NextApp />
			</Provider>,
			document.getElementById('app')
		);
	});
}
