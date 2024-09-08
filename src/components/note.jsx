import React from 'react'
import '../components/style.css'
import keep from './keep'


function note(props) {
  
  return (
    <div className='note'>
        <h1> {props.title}</h1>
        <hr />
        <p>{props.text}</p>
       
        
      
    </div>
  )
}

export default note
