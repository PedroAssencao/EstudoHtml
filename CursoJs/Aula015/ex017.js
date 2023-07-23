var num = [0,2,3,4,5,6,7,8,9]
/*metodo mais antigo de se fazer
for (let index = 0; index < num.length; index++) {
    console.log(`A posição ${index} tem valor ${num[index]}`)
}
*/
/*metodo mais novo de se fazer os dois metodos darão o memso resultado*/
for(let pos in num){

console.log(`A posição ${pos} tem valor ${num[pos]}`)

}