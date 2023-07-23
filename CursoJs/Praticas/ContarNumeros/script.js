function Contar(){

    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('Fim')
    var pular = document.getElementById('Pular')
    var res = document.getElementById('res');

    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || pular.value.lenght == 0) {
        res.innerHTML = 'impossivel contar!'
    }else{

        res.innerHTML = 'Contando: <br>'
        var Ini = Number(inicio.value)
        var fi = Number(fim.value)
        var pass = Number(pular.value)
        if (pass <= 0) {
            alert('Passo invalido! Considerando Passo 1')
            pass = 1
        }
        if (Ini < fi) {
            //contangem cresente
            for (let c = Ini; c <= fi; c+=pass) {
                res.innerHTML += `${c} 👉`
                
            }
        }else{

            //contagem regressiva
            for (let c = Ini; c >= fi; c-=pass) {
                res.innerHTML += `${c} 👈`
                
            }
        }
        res.innerHTML += '🏳️'
    }
}