function Buttons(props){
    return(
        <div>
            <button className="" onClick={() => props.onClick()}>{props.nome}</button>
        </div>
    )
}

export default Buttons