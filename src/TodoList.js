import React from 'react'
                                                   //whole idea isto show the items in list manner.
export default function TodoList(props) {
  return (
    <div>
      <li className='list-item'>  // this is list that store the items
        {props.item}  //this will send the items to app.js in looping manner
        <span className='icons'>  //jpg icon of trash that will indicate the 
        <i className="fa-solid fa-trash icon-delete" onClick={e=>{       
          props.deleteItem(props.index)  //
        }}></i>
        </span>
      </li>
    </div>
  )
}
