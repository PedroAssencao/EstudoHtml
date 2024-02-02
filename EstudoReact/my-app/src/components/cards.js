function cards(props) {
    return(
    <div className="card col">
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.details}</p>
        </div>
    </div>
    )
}

export default cards