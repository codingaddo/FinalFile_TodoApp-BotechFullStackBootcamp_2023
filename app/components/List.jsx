import React from 'react'
import styles from '../styles/list.module.css'

const List = () => {
  return (
    <div className={styles.listContainer}>
       
        <div className={styles.text}>
             <p>1</p>
             <p>Task name </p>
        </div>
        <div className={styles.btns}>
             <button className={styles.close} >❌</button>
            <input type="checkbox" className={styles.checkbox}/>    
        </div>    
    </div>
  )
}

export default List