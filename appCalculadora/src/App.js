import Button from './components/Button'
import Input from './components/Inputs'
import './styleapp.css'
import { useState } from 'react';
function App() {
  const [VisorResultado, SetVisorResultado] = useState('0');
  const [valorAtual, SetValorAtual] = useState(0)
  const [operador, SetOperador] = useState('')

  const handclickButton = (value) => {
    switch (value) {
      case 'C':
        SetVisorResultado('0')
        break;
      case '+':
        SetValorAtual(VisorResultado)
        SetVisorResultado('')
        SetOperador('+')
        break
        case '-':
          SetValorAtual(VisorResultado)
          SetVisorResultado('')
          SetOperador('-')
          break
          case '*':
            SetValorAtual(VisorResultado)
            SetVisorResultado('')
            SetOperador('*')
            break
            case '/':
              SetValorAtual(VisorResultado)
              SetVisorResultado('')
              SetOperador('/')
              break
              case '=':
                if (operador==="*") {
                  const soma = parseFloat(valorAtual) * parseFloat(VisorResultado)
                  SetValorAtual(soma)
                  SetVisorResultado(soma);
                }

                if (operador==="-") {
                  const soma = parseFloat(valorAtual) - parseFloat(VisorResultado)
                  SetValorAtual(soma)
                  SetVisorResultado(soma);
                }

                if (operador==="+") {
                  const soma = parseFloat(valorAtual) + parseFloat(VisorResultado)
                  SetValorAtual(soma)
                  SetVisorResultado(soma);
                }

                if (operador==="/") {
                  const soma = parseFloat(valorAtual) / parseFloat(VisorResultado)
                  SetValorAtual(soma)
                  SetVisorResultado(soma);
                }
                break      
      default:
        if (VisorResultado =='0' || operador == "=") {
          SetVisorResultado(value);
          SetOperador('')
        }else{
          SetVisorResultado(VisorResultado + value)
        }
    }
  }

  function handclick (value) 
  {
    console.log(value)
    SetVisorResultado(() => VisorResultado + value)
  }
  return (
    <div className="app">   

        <div className='ItemApp'>
          <Input value={VisorResultado}/>
        </div>

       <div className='itemApp'>
         <Button classeColor="darkgrey" numero="1" onClick={handclickButton}></Button>
         <Button classeColor="darkgrey"numero="2" onClick={handclickButton}></Button>
         <Button classeColor="darkgrey" numero="3" onClick={handclickButton}></Button>
         <Button classeColor="orange" numero="/" onClick={handclickButton}></Button>
        </div>   
        <div className='itemApp'>
         <Button classeColor="darkgrey"  numero="4" onClick={handclickButton}></Button>
         <Button classeColor="darkgrey" numero="5" onClick={handclickButton}></Button>
         <Button classeColor="darkgrey" numero="6" onClick={handclickButton}></Button>
         <Button classeColor="orange" numero="*" onClick={handclickButton}></Button>
        </div>
        <div className='itemApp'>
         <Button classeColor="darkgrey"  numero="7" onClick={handclickButton}></Button>
         <Button classeColor="darkgrey" numero="8" onClick={handclickButton}></Button>
         <Button classeColor="darkgrey" numero="9" onClick={handclickButton}></Button>
         <Button classeColor="orange" numero="+" onClick={handclickButton}></Button>
        </div>
        <div className='itemApp'>
         <Button classeColor="darkgrey" numero="=" onClick={handclickButton}></Button>
         <Button classeColor="darkgrey" numero="0" onClick={handclickButton}></Button>
         <Button classeColor="darkgrey" numero="C" onClick={handclickButton}></Button>
         <Button classeColor="orange" numero="-" onClick={handclickButton}></Button>
        </div>      
       
    </div>
  );
}

export default App;
