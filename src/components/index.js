import ReactDOM from 'react-dom'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from '../reducers/index.js'
import App from './app.js'

const root = document.createElement('section')
document.body.appendChild(root)

let store = createStore(todoApp)

ReactDOM.render(<Provider store={store}><App /></Provider>, root)
