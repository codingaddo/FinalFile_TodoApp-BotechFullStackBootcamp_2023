import React from 'react'
import styles from '../styles/todo.module.css'

const Todo = ({children}) => {
  return (
    <div className={styles.main}>
        {children}
    </div>
  )
}

export default Todo