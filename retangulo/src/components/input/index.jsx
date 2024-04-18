import './style.css'
function Input(props){
    return(
       <div>
        <input value={props.value} onChange={props.onChange}/>
       </div>
    )
}

export default Input