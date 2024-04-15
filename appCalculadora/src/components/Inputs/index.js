import React from 'react'
import './style.css'

function input(props) {
    return (
      <div className='divInput'>
         <input disabled value={props.value}/>
      </div>
    );
  }
  
  export default input;
  