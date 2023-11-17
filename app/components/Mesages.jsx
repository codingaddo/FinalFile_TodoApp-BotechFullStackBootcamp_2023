import React from 'react'
import styles from '../styles/mesages.module.css'

const data = [
  'Hello! NextJs is one of the leading javascript framework',
  'You have to challenge yourself today',
  "Don't forget to code everyday"
]

const Mesages = () => {
 
  return (
    <>
    <div className={styles.toggle}  >X</div>
    <div className={styles.container}>
        <div className={styles.stepContainer}>
            <span className={styles.active}>1</span>
            <span className={styles.steps}>2</span>
            <span className={styles.steps}>3</span>
        </div>
        <div className={styles.message}>
            Step:1 Meassges would be displayed here
        </div>
        <div className={styles.btnContainer}>
            <button className={styles.btn} >Previous</button>
            <button className={styles.btn} >Next</button>
        </div>
    </div>
   
    </>
  )
}
export default Mesages