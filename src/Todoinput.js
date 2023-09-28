import React,{useState} from 'react'

export default function Todoinput(props) {
  const[inputText,setInputText]= useState('');
  return (
    <div className='input-contianer'>
      <input type='text' className='input-box-todo'
      placeholder='enter your text'
      value={inputText}
      onChange={e => {
        setInputText(e.target.value)
        }
      }
      />
      <button className='add-btn' onClick={() => {
        props.addlist(inputText)
      }}>+</button>
    
    </div>
  )
}
