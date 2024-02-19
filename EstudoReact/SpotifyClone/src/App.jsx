import React, { useState } from 'react';
function App() {

  const [overflowY, setOverflowY] = useState('hidden');

  const handleMouseEnter = () => {
    setOverflowY('auto');
  };

  const handleMouseLeave = () => {
    setOverflowY('hidden');
  };


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col p-2 sidebar d-none d-lg-block bg-black" style={{ minWidth: "10rem", maxWidth: "20rem", minHeight: "100vh" }}>
          <div className="container-fluid mt-2 rounded-3 mb-2 p-3" style={{ backgroundColor: "#121212" }}>
            <div className="container d-flex flex-column">
              <a className="d-flex gap-3 text-decoration-none text-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg>
                <strong>
                  Home
                </strong>
              </a>
              <a className="d-flex gap-3 text-decoration-none text-secondary mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                <strong>
                  Search
                </strong>
              </a>
            </div>
          </div>

          <div className="container-fluid mt-2 rounded-3 mb-2 p-3" style={{ minHeight: "100vh", backgroundColor: "#121212" }}>
            <div className="container d-flex flex-column">
              <a className="d-flex align-itemns-center text-decoration-none gap-3">
                <a className="d-flex gap-3 text-decoration-none text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-collection" viewBox="0 0 16 16">
                    <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5z" />
                  </svg>
                  <strong>
                    Your Libray
                  </strong>
                </a>

                <div className="ms-auto d-flex gap-3">
                  <a className="text-decoration-none text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg>
                  </a>
                  <a className="text-decoration-none text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                  </a>
                </div>
              </a>
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

              <div
                className="mt-2"
                style={{
                  minWidth: "17rem",
                  maxHeight: "74vh",
                  overflowY: overflowY,
                  overflowX: "hidden",
                  transition: "overflow 0.3s ease"
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >

                <div className="mt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-search text-secondary" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                    <a className="text-decoration-none text-secondary d-flex gap-2 justify-content-center align-items-center">
                      <strong style={{ fontSize: "9pt" }}>
                        Recents
                      </strong>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="mt-3" data-type="Album">
                  <div class="mb-2">
                    <div class="row">
                      <div class="col-md-3 d-flex justify-content-center align-itemns-center">
                        <img width={50} height={50} src="https://i.scdn.co/image/ab67616d000011ebc8b444df094279e70d0ed856" class="img-fluid rounded-3" alt="..." />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title text-light">Ok Computer</h5>
                          <p class="card-text"><small class="text-secondary">Album  • RadioHead</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3" data-type="Album">
                  <div class="mb-2">
                    <div class="row">
                      <div class="col-md-3 d-flex justify-content-center align-itemns-center">
                        <img width={50} height={50} src="https://i.scdn.co/image/ab67616d000011ebc8b444df094279e70d0ed856" class="img-fluid rounded-3" alt="..." />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title text-light">Ok Computer</h5>
                          <p class="card-text"><small class="text-secondary">Album  • RadioHead</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3" data-type="Album">
                  <div class="mb-2">
                    <div class="row">
                      <div class="col-md-3 d-flex justify-content-center align-itemns-center">
                        <img width={50} height={50} src="https://i.scdn.co/image/ab67616d000011ebc8b444df094279e70d0ed856" class="img-fluid rounded-3" alt="..." />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title text-light">Ok Computer</h5>
                          <p class="card-text"><small class="text-secondary">Album  • RadioHead</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3" data-type="Album">
                  <div class="mb-2">
                    <div class="row">
                      <div class="col-md-3 d-flex justify-content-center align-itemns-center">
                        <img width={50} height={50} src="https://i.scdn.co/image/ab67616d000011ebc8b444df094279e70d0ed856" class="img-fluid rounded-3" alt="..." />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title text-light">Ok Computer</h5>
                          <p class="card-text"><small class="text-secondary">Album  • RadioHead</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3" data-type="Album">
                  <div class="mb-2">
                    <div class="row">
                      <div class="col-md-3 d-flex justify-content-center align-itemns-center">
                        <img width={50} height={50} src="https://i.scdn.co/image/ab67616d000011ebc8b444df094279e70d0ed856" class="img-fluid rounded-3" alt="..." />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title text-light">Ok Computer</h5>
                          <p class="card-text"><small class="text-secondary">Album  • RadioHead</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3" data-type="Album">
                  <div class="mb-2">
                    <div class="row">
                      <div class="col-md-3 d-flex justify-content-center align-itemns-center">
                        <img width={50} height={50} src="https://i.scdn.co/image/ab67616d000011ebc8b444df094279e70d0ed856" class="img-fluid rounded-3" alt="..." />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title text-light">Ok Computer</h5>
                          <p class="card-text"><small class="text-secondary">Album  • RadioHead</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        <div className="col bodyFull" style={{ minHeight: "100vh" }}>
          <div className='header ms-3' style={{ marginTop: "3%" }}>
            <h1 className='text-light'>
              Good Morning
            </h1>
            <div className='container-fluid'>
             <div className='container'>
             <div className="mt-3">
                  <div class="mb-2">
                    <div class="row">
                      <div class="col-md-3 d-flex justify-content-center align-itemns-center">
                        <img width={50} height={50} src="https://i.scdn.co/image/ab67616d000011ebc8b444df094279e70d0ed856" class="img-fluid rounded-3" alt="..." />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title text-light">Ok Computer</h5>
                          <p class="card-text"><small class="text-secondary">Album  • RadioHead</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

             </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
