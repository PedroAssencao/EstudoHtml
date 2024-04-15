import './App.css'
import Input from './components/input' 
import Buttons from './components/buttons' 
import { useState } from 'react'
function App() {
const [Altura, SetAltura] = useState(0)
const [peso, Setpeso] = useState(0)
const [result, setResult] = useState(0)

const SetarAltura = (event) => {
  SetAltura(event.target.value);
};

const SetarPeso = (event) => {
  Setpeso(event.target.value);
};

const calcular = () => {
  const resultado = peso / (Altura*Altura) 
  setResult(resultado.toFixed(2))  
}

const Limpar = () => {
  setResult(0)
  SetAltura(0)
  Setpeso(0)  
}

  return (
      <div>
        <h1 className='titulo'>Calculadora Imc</h1>
        <div className='inputs'>
        <label>Altura</label>
        <Input value={Altura} onChange={SetarAltura}/>
        <label>Peso</label>
        <Input value={peso} onChange={SetarPeso}/>
        </div>
        <div className='Btns'>
        <Buttons nome="Calcular" onClick={calcular} />
        <Buttons nome="Limpar" onClick={Limpar} />
        </div>
        {result == 0 || result == "NaN" ? 
        <p></p>: 
        <p>Seu Imc é De: {result}</p>}
      </div>
  )
}

export default App
