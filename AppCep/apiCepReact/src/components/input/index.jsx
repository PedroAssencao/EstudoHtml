import './style.css'

function Input(props) {
    return (
        <div className='Input'>
            <input value={props.value} onChange={props.onChange}/>
        </div>
    )
}

export default Input