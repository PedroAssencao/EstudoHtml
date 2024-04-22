function Input(props) {
    return (
        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">{props.Nome}</span>
            <input value={props.value} type="text" onChange={props.onChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        </div>
    )
}

export default Input