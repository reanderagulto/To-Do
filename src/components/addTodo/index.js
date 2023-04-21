import React from 'react'
import cx from './AddTodo.module.scss'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const AddTodo = () => {

  const clickHandler = (e) => {
    e.preventDefault()
  }

  return (
    <section className={cx.wrapper}>
      <form className={cx.form}>
        <div className={cx.group}>
          <label htmlFor="todo">Add Todo</label>
          <input type="text" name="todo" className={cx.control}/>
        </div>
        <div className={cx.group}>
          <button 
            type="submit" 
            className={clsx(cx.btn, cx.submit)}
            onClick={clickHandler}
          >
            <FontAwesomeIcon icon="fa-solid fa-plus" />
          </button>
        </div>

      </form>
    </section>
  )
}

export default AddTodo
