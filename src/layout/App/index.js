import React from 'react'
import AddTodo from '../../components/addTodo'
import ViewTodo from '../../components/viewTodo'
import cx from './App.module.scss'

const App = () => {
  return (
    <main className={cx.app}>
      <header className={cx.header}>
        <h1>Todo App</h1>
      </header>
        <AddTodo />
        <ViewTodo />
    </main>
  )
}

export default App
