import './App.css'
import Label from './components/label'
import Input from './components/input'
import Button from './components/button'
import { useState } from 'react'
function App() {

  const [Altura, setAltura] = useState("")
  const [Base, setBase] = useState("")
  const [result, setResult] = useState(0)

  const calcular = () => {
    const Resultado = (Base) * (Altura)
    setResult(Resultado)
  }

  const Limpar = () => {
    setBase("")
    setAltura("")
    setResult(0)
  }
  return (
    <div className='App'>

      <h1 style={{ textAlign: "center" }}>Calcular Area Retangulo</h1>
      <div style={{ marginTop: "10px", marginBottom: "15px", width: "100%" }}>
        <Label name="Base" />
        <Input value={Base} onChange={(e) => !isNaN(parseFloat(e.target.value)) && isFinite(e.target.value) ? setBase(e.target.value) : null} />
      </div>
      <div>
        <Label name="Altura" />
        <Input value={Altura} onChange={(e) => !isNaN(parseFloat(e.target.value)) && isFinite(e.target.value) ? setAltura(e.target.value) : null} />
      </div>
      {
        result > 0 ?
          <p style={{ textAlign: "center" }}>Resultado: {result}</p>
          : <p style={{ textAlign: "center" }}>
          </p>}
      <div style={{ marginTop: "10px", width: "100%", display: "flex", gap: "10px", justifyContent: "center", alignItems: "center" }}>
        <Button cor="green" onClick={calcular} name="Calcular" />
        <Button cor="red" onClick={Limpar} name="Limpar" />
      </div>

    </div>
  )
}

export default App
