//anotações no caderno exemplos praticos aqui


//exemplo de uma function comum sem parametro(function void) - inicio
var valor = 20

function incrementar() {
    valor += 30
}

incrementar() //lembrando que para a função funcionar ela sempre deve ser chamada 
console.log(valor)

//exemplo de uma function comum sem parametro(function void) - fim

//exemplo de função com parametro - inico

function MostrarNome(Nome) {
    console.log(Nome)
}

MostrarNome('Rodolfo') // funções com parametros so podem ser chamadas com seu parametro devidamente declarado
MostrarNome('Pedro') // funções com parametros tambem podem ser chamadas com parametros diferentes 


//funções com parametros tambem podem aceitar mais parametro alem de apenas um como no exemplo abaixo

function Soma(n1, n2) {
    console.log(n1+n2)
}

Soma(5,2) // resultado 7

//exemplo de função com parametro - fim


//exemplos de função com return - inicio

function subtração(n1,n2){

    var subtração = n1 - n2

    return subtração // vai retorna o valor da variavel subtração

}

var números = subtração(8,2) // chamo a função que esta retornando o resultado da subtração dos números que no caso e 8 - 2 = 6
var números2 = subtração(10,3)
console.log(números)
console.log(números2)
//obs novament enos podemos fazer varias variaveis com números diferentes como parametros que não daria problema nenhum

//exemplos de função com return - Fim

//exemplo de arrow function - inicio

var multi = (n1,n2) => {
    var multiplicação = n1 * n2

    return multiplicação
}

var resultado = multi(2,4)
console.log(resultado)


// uma pequena observação quando utilizado uma arrow funcion dentro de uma mesma linha e sem chaves ela tem efeito de return como por exemplo

var multiplicação = (n1,n2) => n1 * n2
var teste
console.log(teste = multiplicação(2,3))
//exemplo de arrow function - fim
