import CenterBodyCards from "./CenterBodyCards"
function CenterBodyCarrosel() {
    return (
        <div className='Playlists ms-3' style={{ marginTop: "3%" }}>
            <h1 className='text-light'>
                Made For You
            </h1>
            <div className='container-fluid bg-success overflow-x-auto overflow-y-hidden d-flex gap-3'>
                <CenterBodyCards />
            </div>
        </div>
    )
}

export default CenterBodyCarrosel