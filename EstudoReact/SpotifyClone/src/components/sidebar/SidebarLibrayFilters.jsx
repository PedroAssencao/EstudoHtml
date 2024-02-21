function SidebarLibrayFilters() {
    return (
        <div className="d-flex gap-2 mt-3">
            <a className="text-decoration-none text-light rounded-pill d-flex justify-content-center align-items-center" style={{ fontSize: "9pt", width: "7rem", height: "2rem", backgroundColor: "#232323" }}>
                <strong>Playlist</strong>
            </a>
            <a className="text-decoration-none text-light rounded-pill d-flex justify-content-center align-items-center" style={{ fontSize: "9pt", width: "7rem", height: "2rem", backgroundColor: "#232323" }}>
                <strong>Artist</strong>
            </a>
            <a className="text-decoration-none text-light rounded-pill d-flex justify-content-center align-items-center" style={{ fontSize: "9pt", width: "7rem", height: "2rem", backgroundColor: "#232323" }}>
                <strong>Albuns</strong>
            </a>
        </div>
    )
}

export default SidebarLibrayFilters