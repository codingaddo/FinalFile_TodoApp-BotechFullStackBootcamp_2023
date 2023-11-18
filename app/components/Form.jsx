import React, { useState } from 'react'
import styles from '../styles/form.module.css'

const Form = ({handleNewData}) => {
    const [input,setInput] = useState('')
    const [quantity,setQuantity]= useState(1)

    const handleInput = (e)=>{
        e.preventDefault()
        
        if(!input){
            alert('Input field can not be empty')
        }else{

        
            console.log(input)
            console.log(quantity)
            const newTodo = {description: input, quantity:quantity, done:false,id:Date.now()}
            console.log(newTodo)
            handleNewData(newTodo)
            setQuantity(1)
            setInput('')
        }
    }
  return (
    <>
        <form action="" onSubmit={handleInput}>
            <div className={styles.container}>
                <select name="" id="" value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
                   {
                    Array.from({length:50},(_,nums)=>nums+1).map((num)=>(
                    <option value={num} key={num}>{num}</option>
                    ))
                   }
                </select>
                <input type="text" value={input} placeholder='Task name'className={styles.input}
                 onChange={(e)=>setInput(e.target.value)} />
                <button type="submit" className={styles.btn}>
                    Add task / list
                </button>
            </div>

            {/* <select name="" id="" onChange={(e)=>setQuantity(e.target.value)}>
                <option value="1">1</option>
                <option value="1">2</option>
            </select> */}
        </form>
    </>
  )
}

export default Form