import './style.css'
function Button(props){
    const cor = props.cor
    return(
       <div>
        <button style={{backgroundColor: cor}} onClick={props.onClick} >{props.name}</button>
       </div>
    )
}

export default Button