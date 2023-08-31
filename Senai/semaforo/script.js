let intervalId = null;

function Go() {

    if (intervalId !== null) {
        clearInterval(intervalId)
    }

    intervalId = setInterval(function () {
        setTimeout(() => {
            document.getElementById("Verde").style.background = '#1b8003'
            document.getElementById("vermelho").style.background = 'red'
        }, 500)

        setTimeout(() => {
            document.getElementById("vermelho").style.background = '#5c0211'
            document.getElementById("Amarelo").style.background = 'yellow'
        }, 1000)

        setTimeout(() => {
            document.getElementById("Amarelo").style.background = '#948801'
            document.getElementById("Verde").style.background = '#34f505'
            document.getElementById('btnReset').style.display = 'block'
            console.log(intervalId)
        }, 1500)
    }, 2000)

}

function reset() {
    
    if (intervalId !== null) {
        clearInterval(intervalId)
        intervalId = null
    }

    document.getElementById('btnReset').style.display = 'none'
    document.getElementById("Verde").style.background = '#1b8003'
    document.getElementById("Amarelo").style.background = '#948801'
    document.getElementById("vermelho").style.background = '#5c0211'
}
