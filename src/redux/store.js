import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
//import promise from 'redux-promise-middleware'

import reducer from './reducer'
import { loadState } from './localStorage'

const persistedState = loadState();
const middleware = applyMiddleware(thunkMiddleware, createLogger())

export default createStore(reducer, persistedState, middleware)
