import { useState } from 'react'
import Input from './components/input'
import Button from './components/button'
import './App.css'

function App() {
  const [LimiteFebonati, SetLimiteFebonati] = useState("")
  const [result, SetResult] = useState(null)

  const calcular = () => {
    // var fibonacci = [0, 1];
    // var limite = LimiteFebonati
    // if (LimiteFebonati == 0 || LimiteFebonati == null) {
    //   return
    // }
    // for (var i = 2; fibonacci[i - 1] + fibonacci[i - 2] <= limite; i++) {
    //   fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    // }
    // SetResult(fibonacci.join(", "))
    if (LimiteFebonati <= 0) SetResult(null);
    if (LimiteFebonati === "") SetResult(null);
    if (LimiteFebonati === 1) SetResult(null);
    if (LimiteFebonati === 2) SetResult(null);
    let a = 0, b = 1;
    var lista = [0]
    for (let i = 3; i <= LimiteFebonati; i++) {
      const temp = b;
      b = a + b;
      a = temp;
      lista.push(b)
    }
    SetResult(lista.join(", "));
  }

  const Apagar = () => {
    SetLimiteFebonati(null)
    SetResult(null)
  }

  return (
    <div className='App container-fluid'>
      <h1 className='display-4 text-center mt-5'>
        Calculadora de Febonati
      </h1>
      <div className='container-fluid p-3 containermassa'>
        <div className='row row-cols-1'>
          <div className='col'>
            <Input value={LimiteFebonati} onChange={(e) => !isNaN(parseFloat(e.target.value)) && isFinite(e.target.value) ? (SetLimiteFebonati(e.target.value)) : null} Nome="Numero Limite" />
          </div>
          <div className='col text-center p-3'>
            {result != null ? <h4>Resultado: {result}</h4>
              : null}
          </div>
          <div className='col'>
            <div className='justify-content-center d-flex gap-3'>
              <Button onClick={calcular} Nome="Calcular" Color="btn-success" />
              <Button onClick={Apagar} Nome="Resetar" Color="btn-danger" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App;
