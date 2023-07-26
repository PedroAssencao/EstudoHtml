
var numeros = []
let soma = 0;
var select = document.getElementById('select')
var res = document.getElementById('res')

function Adicionar() {
    let num = parseInt(document.getElementById('num').value);
    res.innerHTML = ''
    if (isNaN(num)) {
        alert('Digite um número')
        return;
    } else if (num > 100) {
        alert('O número deve ser menor que 100')
        return;
    }

    if (numeros.indexOf(num) != -1) {
        alert('Número invalido ou ja encontrado na lista')
        return;

    }else{
        numeros.push(num);
        var option = document.createElement('option')
        option.text = `O valor ${num} foi adicionado`
        select.add(option)
    }
    soma = numeros.reduce(function(accumulator,value){
    return accumulator + value
    },0);
}

function finalizar() {
let maior = Math.max(...numeros);
let menor = Math.min(...numeros);
res.innerHTML += `Ao todo temos ${numeros.length} número cadastrados` + '</br>' 
res.innerHTML += `O maior número é ${maior}` + '</br>' 
res.innerHTML += `O menor número é ${menor}`+ '</br>' 
res.innerHTML += `O primeiro número é ${numeros[0]}`+ '</br>' 
res.innerHTML += `Todos os números somados são ${soma}` + '</br>' 
res.innerHTML += `A média dos números são ${soma / numeros.length}` + '</br>' 
res.innerHTML += `O Vetor em ordem cresente é ${numeros.sort()}`

}
