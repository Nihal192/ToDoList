import React, { useState } from 'react'
import "./App.css"
import Todoinput from './Todoinput'
import TodoList from './TodoList';

function App(){
  const [listTodo, setListTodo]=useState([]);             //This function will store the values that is being written by user.
  let addlist =(inputText)=>{                    //we have declared the vairable name addlist that will  create a new array that contains all the elements from the existing listTodo array. Then, you add inputText to this new array.
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
