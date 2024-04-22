import './App.css'
import Input from './components/input'
import Button from './components/button'
import { useState } from 'react'
function App() {
  const [Distancia, SetDistancia] = useState("")
  const [Tempo, SetTempo] = useState("")
  const [result, SetResult] = useState(0)
  
  const calcular = () => {
    const Calcular = (Distancia) / (Tempo)
    SetResult(Calcular)
  }

    
  const Apagar = () => {
    SetDistancia("")
    SetTempo("")
    SetResult(0)
  }
  return (
    <div className='App container-fluid'>
      <h1 className='display-4 text-center mt-5'>
        Velocidade Media
      </h1>
      <div className='container-fluid p-3 containermassa'>
        <div className='row row-cols-1'>
          <div className='col'>
            <Input value={Distancia} onChange={(e) => (SetDistancia(e.target.value))} Nome="Distancia" />
          </div>
          <div className='col'>
            <Input value={Tempo} onChange={(e) => (SetTempo(e.target.value))} Nome="Tempo" />
          </div>
          <div className='col text-center p-3'>
            {result > 0 ?
              <h4>Resultado: {result}</h4> :
              null
            }
          </div>
          <div className='col'>
            <div className='btn justify-content-center d-flex gap-3'>
              <Button onClick={calcular} Nome="Calcular" Color="btn-success" />
              <Button onClick={Apagar} Nome="Resetar" Color="btn-danger" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
