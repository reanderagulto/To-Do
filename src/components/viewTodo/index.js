import { React, useState } from 'react'
import clsx from 'clsx';
import cx from './ViewTodo.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

function ViewTodo() {
  const data = [
    {
      name: 'Study ReactJS',
      status: 'done',
    },
    {
      name: 'Study TypeScript',
      status: 'done',
    }, 
    {
      name: 'Study NodeJS and Express',
      status: 'ongoing',
    }, 
    {
      name: 'MERN Stack Tutorial',
      status: 'ongoing'
    }
  ]
  data.map((item, index) => {
    console.log(item);
  })
  return (
    <section className={cx.wrapper}>
      <div className={cx.header}>
        View Todo
      </div>
      <div className={cx.content}>
        <div className={cx.list}>
          {data && data.map((item, index) => {
            return (
              <div className={cx.item} key={index}>
                <div className={cx.controls}>
                  <span className={clsx(cx.btn, cx.icons)}><FontAwesomeIcon icon={faCheck} /></span>
                  <span className={clsx(cx.btn, cx.icons)}><FontAwesomeIcon icon={faXmark} /></span>
                </div>
                <span>{item.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ViewTodo