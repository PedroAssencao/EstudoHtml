import { useState } from 'react'
import './App.css'

function App() {
  const [Filme, setFilmes] = useState([])
  const [TotalFilmes, setTotalFilmes] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [pages, setPages] = useState(2)

  const handBuscarMovies = () => {
    const chaveAPI = "203b5c5e"
    let url = "a"

    if (totalPages == 0) {
      url = `http://www.omdbapi.com/?apikey=${chaveAPI}&s=rambo`
      
    }else if (pages<=totalPages) {
      url = `http://www.omdbapi.com/?apikey=${chaveAPI}&s=rambo&page=${pages}`
      setPages(pages + 1)
    } 
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setTotalFilmes(data.totalResults)
      setFilmes(Filme.concat(data.Search))

      if (data.totalResults%10 !== 0) {
        setTotalPages(Math.floor(data.totalResults) + 1)
      }else{
        setTotalPages(Math.floor(data.totalResults/10))

      }
    })
  }
  return (
    <div className='App'>
      Movies
      <button onClick={handBuscarMovies}>
        buscar
      </button>

      {Filme.map((m, index) => <p key={index}>{m.Title}</p>)}
    </div>
  )
}

export default App
