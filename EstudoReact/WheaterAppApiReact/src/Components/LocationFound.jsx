import Footer from './footer'
function LocationFound(props) {
    return (
        <div className="d-flex flex-column text-center" style={{ marginTop: "0" }}>
            <h1 className='text-center text-dark h1'>{props.Nome}</h1>
            <img className="img-fluid" width={300} height={300} src={`https://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Weather Icon" />
            <label className="text-dark mt-3 font-weight-bold" style={{ fontSize: "15pt" }}>{props.temp}</label>
            <label className="text-dark mt-3 font-weight-bold" style={{ fontSize: "10pt" }}>{props.Title}</label>
            <Footer 
            key={1}
            humity={props.humidity}
            wind={props.wind}
            />
        </div>

    )
}

export default LocationFound;