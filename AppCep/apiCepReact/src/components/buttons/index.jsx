import './style.css'
function Button(props) {
    return (
        <div className='Btn' onClick={props.onClick}>
            Buscar
        </div>
    )
}

export default Button