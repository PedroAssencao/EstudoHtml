import { useState } from 'react'
import Button from './components/buttons'
import Label from './components/label'
import Input from './components/input'
import './App.css'

function App() {

  const [dados, setDados] = useState("")
  const [cep, setcep] = useState("")

  const fetchTeste = () => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
      .then(response => response.json())
      .then(result => {
        const resposta = JSON.stringify(result);
        const objetoJavaScript = JSON.parse(resposta);
        setDados(objetoJavaScript);
      }).catch(function (err) {
        console.error(err);
      })
  }


  return (
    <div className='App'>
      <h1>Localidade por Cep</h1>
      <div className='layout'>
        <div className=''>
          <Label nome="CEP" />
          <Input value={cep} onChange={(e) => !isNaN(parseFloat(e.target.value)) && isFinite(e.target.value) ? setcep(e.target.value) : null} />
          <Button onClick={fetchTeste} />
        </div>
        <div className='Resultado'>
          <Label nome="Resultados: " />
          <Label titulo="Cep: " nome={dados.cep} />
          <Label titulo="Logradouro: " nome={dados.logradouro} />
          <Label titulo="Complemento: " nome={dados.complemento} />
          <Label titulo="Localidade: " nome={dados.localidade} />
          <Label titulo="Uf: " nome={dados.uf} />
        </div>
      </div>
    </div>
  )
}

export default App
