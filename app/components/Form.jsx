import React from 'react'
import styles from '../styles/form.module.css'

const Form = () => {
  return (
    <>
        <form action="">
            <div className={styles.container}>
                <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
                <input type="text" placeholder='Task name'className={styles.input} />
                <button type="submit" className={styles.btn}>
                    Add task
                </button>
            </div>
        </form>
    </>
  )
}

export default Form