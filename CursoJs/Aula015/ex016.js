var num = [2,1,3,4,5,6,7,8]

console.log(`Nosso vetor é de ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O Nosso vetor em ordem cresente fica${num.sort()}`)

let pos = num.indexOf(8)
console.log(`O valor 8 tem posição de ${pos}`)

if (pos == -1) {
    console.log('numero não encontrado no array')
}else{
    console.log(`O valor foi encontrado na posição ${pos}`)
}