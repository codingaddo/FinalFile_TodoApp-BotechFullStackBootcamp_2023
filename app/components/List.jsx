import React from 'react'
import styles from '../styles/list.module.css'

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, done: false },
  { id: 2, description: "Socks", quantity: 12, done: true },
  { id: 2, description: "Socks", quantity: 12, done: true },
]

const List = () => {
  return (
    <>
      {
        initialItems.map((item)=>(
          <div key={item.id} className={styles.listContaine} >
            <div className={styles.text}>
                 <p>{item.quantity}</p>
                 <p>{item.description}</p>

            <div className={styles.btns}>
              <button className={styles.close} >❌</button>
              <input type="checkbox" className={styles.checkbox}/>    
            </div> 


            </div>

          </div>
        ))
      }
    </>
  
  )
}

export default List