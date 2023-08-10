 var resultado = document.getElementById('display');
 var UltimoOperador = ''

  function Sinal(char) {
      return ['+', '-', '/', '*'].includes(char);
  }


  document.addEventListener("keydown", function(event) {
    // Verifica se a tecla pressionada é um número (0-9)
    numeroAnteriors = event.key

    console.log(numeroAnteriors)

    if (event.key >= "0" && event.key <= "9") {
      // Obtém o número da tecla pressionada
      var numero = event.key;
      // Adiciona o número à div de saída
      resultado.innerHTML += numero;
     
       
    }

    if(numeroAnteriors == '+' && resultado.innerHTML == '' || numeroAnteriors == '-' && resultado.innerHTML == '' || numeroAnteriors == '/' && resultado.innerHTML == '' || numeroAnteriors == '*' && resultado.innerHTML == ''){
        return
    }

    if (event.key == "+" || event.key == "-" || event.key == "*"  || event.key == "/" ) {
    
        var digitos = resultado.innerHTML;
        var ultimoCaractere = digitos[digitos.length - 1];
        var params = event.key
        console.log(params)
        
        if (Sinal(ultimoCaractere) && Sinal(params)) {
            resultado.innerHTML = digitos.slice(0, -1) + params;
            return
        } else {
            resultado.innerHTML += params;
        }

        
        // Obtém o número da tecla pressionada
        var numero = event.key;
       
        // Adiciona o número à div de saída
        resultado.innerHTML += numero;

      
      }

      if (event.key == '=' || event.key === "Enter") {

        var numero = event.key;
 
        calc();
      }

      if (event.key === "Backspace") {
        backspace()
      }
      var resultadotrue = document.getElementById('resultadotrue')
      var resultado1 = document.getElementById('display')
      resultadotrue.value = resultado1.innerHTML
  });


  function numero(params) {

      var digitos = resultado.innerHTML;
      var ultimoCaractere = digitos[digitos.length - 1];


      if (Sinal(ultimoCaractere) && Sinal(params)) {
          resultado.innerHTML = digitos.slice(0, -1) + params;
      } else {
          resultado.innerHTML += params;
      }

      if (Sinal(params)) {
        UltimoOperador = params
      }

      if (digitos === '' && Sinal(params)) {
        resultado.innerHTML = '';
      }


      var resultadotrue = document.getElementById('resultadotrue')
      var resultado1 = document.getElementById('display')
      resultadotrue.value = resultado1.innerHTML
  }

  var storedNumberAfterSymbol = null;

  function calc() {
    const displayContent = resultado.innerHTML;
    const lastSymbol = UltimoOperador;
    const numberAfterSymbol = extractNumberAfterLastSymbol(displayContent, lastSymbol);
  
    storedNumberAfterSymbol = numberAfterSymbol !== null ? numberAfterSymbol : storedNumberAfterSymbol;
    var teste = lastSymbol + (storedNumberAfterSymbol !== null ? storedNumberAfterSymbol : "");
    
    var aindaSinal = false;

    for (let i = 0; i < displayContent.length; i++) {
        if (Sinal(displayContent[i])) {
            aindaSinal = true;
            break;
        }
    }

    if (aindaSinal) {
       console.log(eval(displayContent));
       resultado.innerHTML = eval(resultado.innerHTML);
    } else {
        resultado.innerHTML = eval(resultado.innerHTML + teste);
    }

}

function extractNumberAfterLastSymbol(inputString, lastSymbol) {
    const parts = inputString.split(lastSymbol);
    if (parts.length > 1) {
        return parseFloat(parts[parts.length - 1]);
    } else {
        return null;
    }

}

  function clean() {
      resultado.innerHTML = '';
  }

  function backspace() {
      resultado.innerHTML = resultado.innerHTML.slice(0, -1);
  }



