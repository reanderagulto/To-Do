import React from 'react'
import cx from './AddTodo.module.scss'
import clsx from 'clsx'

const AddTodo = () => {
  return (
    <section className={cx.wrapper}>
      <form className={cx.form}>
        <div className={cx.group}>
          <label for="">Add Todo</label>
          <input type="text" name="todo" className={cx.control}/>
        </div>
        <div className={cx.group}>
          <button 
            type="submit" 
            className={clsx(cx.btn, cx.submit)}
            onClick={clickHandler}
          >
            +
          </button>
        </div>

      </form>
    </section>
  )
}

export default AddTodo
