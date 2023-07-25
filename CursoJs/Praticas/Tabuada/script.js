function tabuada(){

    var num = parseInt(document.getElementById('num').value)
    var res = document.getElementById('res')
    console.log(num)
    if (isNaN(num)) {
        alert('O número 0 não e um valor multiplicavel, Considerando valor 1!')
        num = 1
    }
    res.innerHTML = ''
    for (let index = 1; index <= 10; index++) {
        
        var resultado = num * index
        var item = document.createElement('option')
        item.text = `${num} x ${index} = ${resultado}`
        res.appendChild(item)
        // res.innerHTML += num + 'x' + index + '=' + resultado +'</br>'
    }
    
}
