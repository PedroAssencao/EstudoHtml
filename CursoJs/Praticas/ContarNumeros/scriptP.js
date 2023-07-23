

function Contar() {
    var inicio = parseInt(document.getElementById('inicio').value);
    var fim = parseInt(document.getElementById('Fim').value);
    var pular = parseInt(document.getElementById('Pular').value);
    var res = document.getElementById('res');
    var numeros = '';
    for (inicio; inicio <= fim; inicio += pular) {
        numeros += `${inicio} 👉 `;
        if (inicio + pular > fim) {
            res.innerHTML = `Os números são: ${numeros}`;
            res.innerHTML += '🏳️';
            break;
        }
    }
}
