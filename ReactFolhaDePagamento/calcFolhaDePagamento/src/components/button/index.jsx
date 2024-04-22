function Button(props) {
    const classColor = "btn " + props.Color
    return (
        <button onClick={props.onClick} className={classColor}>{props.Nome}</button>
    )
}

export default Button