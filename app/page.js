'use client'
import Form from './components/Form'
import List from './components/List'
import Todo from './components/Todo'
import styles from './page.module.css'
export default function Home() {
  return (
   <div className={styles.main}>
      <Todo>
        <Form/>
        <List/>
        
      </Todo>
   </div>
  )
}
