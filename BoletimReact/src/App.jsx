import './App.css'
import Input from './components/inputs'
import Buttons from './components/buttons'
import { useState } from 'react'
function App() {

  const [nota1, SetNota1] = useState("")
  const [nota2, SetNota2] = useState("")
  const [Aluno, SetAluno] = useState("")
  const [nota3, SetNota3] = useState("")
  const [nota4, SetNota4] = useState("")
  const [Estatus, SetEstatus] = useState("")
  const [Result, SetResult] = useState("")
  const calcular = () => {
    const resultado = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4
    SetResult(resultado.toFixed(2))
    if (resultado.toFixed(2) >= 6) {
      SetEstatus("Aprovado")
    }else{
      SetEstatus("Reprovado")
    }
  }

  const Apagar = () => {
    SetResult("")
    SetNota1("")
    SetAluno("")
    SetNota2("")
    SetNota3("")
    SetNota4("")
    SetEstatus("")
    
  }
  return (
    <div className='App'>
      <div>
        <h3 className='titulo mt-3 mb-3'>BOLETIM</h3>
      </div>

      <div>
        <label>Aluno</label>
        <div style={{ width: "96%" }}>
          <Input value={Aluno} onChange={(e) => SetAluno(e.target.value)}/>
        </div>
      </div>

      <div className='container-fluid mt-3'>
        <div className='row'>
          <div className='col-6'>
            <div className='me-5'>
              <div>
                <label>Nota 1:</label>
                <Input value={nota1} onChange={(e) => SetNota1(e.target.value)} NameClass="InputLimit" />
              </div>
              <div>
                <label>Nota 2:</label>
                <Input value={nota2} onChange={(e) => SetNota2(e.target.value)} NameClass="InputLimit" />
              </div>
              <div>
                <label>Nota 3:</label>
                <Input value={nota3} onChange={(e) => SetNota3(e.target.value)} NameClass="InputLimit" />
              </div>
              <div>
                <label>Nota 4:</label>
                <Input value={nota4} onChange={(e) => SetNota4(e.target.value)} NameClass="InputLimit" />
              </div>
            </div>
          </div>

          <div className='col-6 d-flex justify-content-center align-items-center flex-column'>
            {Result == 0
              ? <>
                <h6>Informe Os Valores!</h6>
           
              </>
              : <>
                <h6>Media:</h6>
                <h1 className='display-5'>{Result}</h1>
                <h6>{Estatus}</h6>
              </>
            }


          </div>
        </div>
      </div>

      <div className='container-fluid mt-4 d-flex justify-content-center flex-column align-items-center'>
        <Buttons onClick={calcular} nameClass="btn btn-success mb-2" name="Calcular" />
        <Buttons onClick={Apagar} nameClass="btn btn-danger" name="Apagar" />
      </div>



    </div>
  )
}

export default App
