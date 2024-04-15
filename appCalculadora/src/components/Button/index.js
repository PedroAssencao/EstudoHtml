import React from 'react'
import './style.css'

function Button(props) {
    const classeAplicar = "btnNumero "+ props.classeColor 
    return (
      <div className={classeAplicar} onClick={()=>props.onClick(props.numero)}>   
         <div>{props.numero}</div>             
      </div>
    );
  }
  
  export default Button;
  