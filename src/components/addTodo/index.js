import React from 'react'
import cx from './AddTodo.module.scss'
import clsx from 'clsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddTodo = () => {

  const clickHandler = (e) => {
    e.preventDefault()
  }

  return (
    <section className={cx.wrapper}>
      <form className={cx.form}>
        <label htmlFor="todo">Add Todo</label>
        <div className={cx.group}>  
          <input type="text" name="todo" className={cx.control}/>
          <button 
            type="submit" 
            className={clsx(cx.btn, cx.submit)}
            onClick={clickHandler}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className={cx.group}>
          
        </div>

      </form>
    </section>
  )
}

export default AddTodo
