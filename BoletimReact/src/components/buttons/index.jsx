function Buttons(props){
  const NameClass = props.nameClass
    return(
        <div>
          <button className={NameClass} onClick={props.onClick}>{props.name}</button>
        </div>
    )
}
export default Buttons