function fatorial(n) {
    let fat = 1
    for (let index = n; index > 1; index--) {
        fat *= index
    }
    return fat 
}

console.log(fatorial(5))