

var fim = 20;
var pular = 3;

for (var inicio = 1; inicio <= fim; inicio += pular) {
    console.log(`os números são ${inicio}`);
    if (inicio + pular > fim) {
        console.log('O número posterior excede o limite do número final');
        break; 
    }
}

for (inicio; inicio <= fim; inicio += pular) {
    console.log(`os números são ${inicio}`);
    if (inicio + pular > fim) {
        console.log('O número posterior excede o limite do número final');
        break;
    }
}
