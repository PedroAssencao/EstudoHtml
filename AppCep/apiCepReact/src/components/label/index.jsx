import './style.css'

function label(props) {
    return (
        <div className='Label'>
            <label>{props.titulo} {props.nome}</label>
        </div>
    )
}

export default label