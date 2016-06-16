import ReactDOM from 'react-dom'
import React from 'react'
import { createStore, compose, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
import { Provider } from 'react-redux'
import todoApp from '../reducers/index.js'
import App from './app.js'

const root = document.createElement('section')
document.body.appendChild(root)

let store = createStore(todoApp, {}, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(<Provider store={store}><App /></Provider>, root)
