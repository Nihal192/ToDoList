import React, { useState } from 'react'
import "./App.css"
import Todoinput from './Todoinput'
import TodoList from './TodoList';

function App(){
  const [listTodo, setListTodo]=useState([]);
  let addlist =(inputText)=>{
    setListTodo([...listTodo,inputText]);
  }

  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }




  return(
    <div className='main-container'>
      <div className='div-contianer'>

      <Todoinput addlist={addlist}/>
      <h1 className='app-heading'>TODO</h1>
      <hr/>
      {listTodo.map((listItem,i)=> {
        return (
          <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
        )
      })} 
  
      </div>
    </div>
  )
}
export default App