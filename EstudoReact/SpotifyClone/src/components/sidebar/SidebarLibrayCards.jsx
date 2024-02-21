function SidebarLibrayCards() {
    return (
        <div className="mt-3" data-type="Album">
            <div className="mb-2">
                <div className="row ">
                    <div className="col-md-2">
                        <img style={{ minWidth: "50px", maxWidth: "50px", maxHeight: "50px", minHeight: "50px" }} src="https://i.scdn.co/image/ab67616d000011ebc8b444df094279e70d0ed856" className="img-fluid rounded" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-light">Ok Computer</h5>
                            <p className="card-text"><small className="text-secondary">Album  • RadioHead</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarLibrayCards