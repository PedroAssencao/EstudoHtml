function cards(props) {
    return (
        <>
            <div className="col card" style={{width: "18rem"}}>
                <img src={props.img} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{props.Title}</h5>
                        <p className="card-text">{props.descricao}</p>
                    </div>
            </div>
        </>
    )
}

export default cards