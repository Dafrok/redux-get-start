import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/add-todo.js'
import VisibleTodoList from '../containers/visible-todolist.js'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
