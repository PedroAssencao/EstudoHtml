 var resultado = document.getElementById('display');
  
  function Sinal(char) {
      return ['+', '-', '/', '*'].includes(char);
  }

  function numero(params) {
      var digitos = resultado.innerHTML;
      var ultimoCaractere = digitos[digitos.length - 1];

      if (Sinal(ultimoCaractere) && Sinal(params)) {
          resultado.innerHTML = digitos.slice(0, -1) + params;
      } else {
          resultado.innerHTML += params;
      }

  }

  function calc() {
      resultado.innerHTML = eval(resultado.innerHTML);
  }

  function clean() {
      resultado.innerHTML = '';
  }

  function backspace() {
      resultado.innerHTML = resultado.innerHTML.slice(0, -1);
  }
