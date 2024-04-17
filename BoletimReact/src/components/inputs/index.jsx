import './style.css'
function Inputs(props){
  const teste = props.NameClass + " form-control"
    return(
        <div>
          <input value={props.value} className={teste} onChange={props.onChange}/>
        </div>
    )
}
export default Inputs