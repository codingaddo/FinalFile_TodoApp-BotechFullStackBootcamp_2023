import React from 'react'
import styles from '../styles/list.module.css'

const initialItems = [
  { id: 1, description: "Buy tomatoes", quantity:2, done: false },
  { id: 2, description: "Brush my teeth", quantity: 12, done: true },
  { id: 3, description: "Buy Socks", quantity: 12, done: true },
  { id: 4, description: "Anytthing", quantity: 12, done: true },
]

const List = ({items,onHandleDelete,onHandleDone}) => {
  return (
    <>
    
      {
        items.map((item)=>(
          <div key={item.id} className={styles.listContaine} >
            <div className={styles.text}>
                 <p>{item.quantity}</p>
                 <p 
                    style={item.done?{textDecoration:'line-through'}:{}}
                 >
                  {item.description}</p>

               <div className={styles.btns}>
                  <button className={styles.close} onClick={()=>onHandleDelete(item.id)} >❌</button>
                  <input type="checkbox" className={styles.checkbox} onClick={()=>onHandleDone(item.id)} />    
                </div> 
            </div>

          </div>
        ))
      }
    </>
  
  )
}

export default List