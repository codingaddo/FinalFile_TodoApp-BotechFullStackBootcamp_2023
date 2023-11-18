'use client'
import { useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import Todo from './components/Todo'
import styles from './page.module.css'
export default function Home() {
  const [data,setData]=useState([])

  const handleData = (newData)=>{
    setData(item=>[...item,newData])
  }

  const handleDelete = (ID)=>{
        setData(items=>items.filter((item)=>item.id!==ID))
  }

  const handleDone =(ID)=>{
    setData(items=>items.map((item)=>item.id===ID?{...item,done:!item.done}:item))
  }

  const handleClear = ()=>{
    if(data.length===0) return
    let confirmed = window.confirm('Do you want to clear all List')
   confirmed && setData([])
  }
  return (
   <div className={styles.main}>
    <h1>Todo/List App</h1>
          <Form handleNewData={handleData}/>
      <Todo>
         <List items={data} onHandleDelete={handleDelete} onHandleDone={handleDone}/>
      </Todo>
        <button
         style={
            {
              backgroundColor:'red',
              width:'100px',
              color:'white',
              fontSize:'20px',
              padding:'10px',
              border:'none',
              borderRadius:'10px',
              cursor:'pointer'
            }
        } onClick={handleClear}>Clear all</button>
   </div>
  )
}
