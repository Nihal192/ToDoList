import React,{useState} from 'react'

export default function Todoinput(props) {
  const[inputText,setInputText]= useState('');   // This fucntion will take input from input text container that is displayed on homepage.
  return (
    <div className='input-contianer'>
      <input type='text' className='input-box-todo'
      placeholder='enter your text'
      value={inputText}
      onChange={e => {                         //on change is kind of event listener that invokes setInputText in return which will store the values that are being written in the textbox.
        setInputText(e.target.value)
        }
      }
      />
      <button className='add-btn' onClick={() => {     //Button that is being use to add items into the list. 
        props.addlist(inputText)   // you are calling inputtext that you defined above the return .
        setInputText("")   //you clearing the input box once user enters the texts and click on '+' icon.
      }}>+</button>
    
    </div>
  )
}
