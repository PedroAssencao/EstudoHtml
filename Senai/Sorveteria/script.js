
var select = document.getElementById('PrimeiroSelect')
var select2 = document.getElementById('SegundoSelect')
var res = document.getElementById('res')
var res2 = document.getElementById('res2')


    select.addEventListener('change', function(){
        var preco = parseFloat(select.value)
        res2.innerHTML = `Valor: $${preco.toFixed(2)}`
    })

    function Enviar() {

        var selectedOption = select.options[select.selectedIndex];

        if (selectedOption) {
            select2.appendChild(selectedOption);
            calcularSoma();
            res2.innerHTML = 'Valor: $0.00'
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
    res.innerHTML = `Valor Total: $${total.toFixed(2)}`

    }

