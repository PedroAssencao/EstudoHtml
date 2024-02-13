function LocationNotFound() {
    return (
        <div className="text-center" style={{marginTop: "40%"}}>
            <div>
                <img className="img-fluid" id="img" src="./src\img\NotFoud.png" />
                <label className="text-dark display-6 mt-3" style={{ fontSize: "20pt" }} htmlFor="img">Localização Não Encontrada Ou Não Informada</label>
            </div>
        </div>
    )
}

export default LocationNotFound;