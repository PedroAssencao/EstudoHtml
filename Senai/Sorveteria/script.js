
var select = document.getElementById('PrimeiroSelect')
var select2 = document.getElementById('SegundoSelect')
var res = document.getElementById('res')

    function Enviar() {

        var selectedOption = select.options[select.selectedIndex];

        if (selectedOption) {
            select2.appendChild(selectedOption);
            calcularSoma();
        }

    }

    function voltar() {
        
        var selectedOption = select2.options[select2.selectedIndex];

        if (selectedOption) {
            select.appendChild(selectedOption);
            calcularSoma();
        }

    }

    function calcularSoma() {

    var total = 0;

    for (var i = 0; i < select2.options.length; i++) {
        total += parseInt(select2.options[i].value);
    }
    res.innerHTML = `Valor: $${total.toFixed(2)}`

    }

