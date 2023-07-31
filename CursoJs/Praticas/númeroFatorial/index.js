// var fatorial = 5
// var teste = []
// var res = 1
// for (let index = 1; index <= fatorial; index++) {
//     teste.push(index)
// }
// for (let index = 0; index < teste.length; index++) {
//     res *= teste[index]
//     console.log(res)
// }
var num = 5
function fatorial(num) {
    var res = 1
    for (let index = 1; index <= num; index++) {
    res *= index    
    return res
    }

}
