var data = new Date()
var DiaSemana = data.getDay()
var dia = (data.getDate())

switch(DiaSemana){

    case 0:
        console.log(`Hoje e Domingo Dia ${dia} , Tenha um Otimo Dia!`)
    break

    case 1:
        console.log(`Hoje e Segunda Dia ${dia} , Tenha um Otimo Dia!`)
    break

    case 2:
        console.log(`Hoje e terça Dia ${dia} , Tenha um Otimo Dia!`)
    break

    case 3:
        console.log(`Hoje e Quarta Dia ${dia} , Tenha um Otimo Dia!`)
    break

    case 4:
        console.log(`Hoje e Quinta Dia ${dia} , Tenha um Otimo Dia!`)
    break

    case 5:
        console.log(`Hoje e Sexta Dia ${dia} , Tenha um Otimo Dia!`)
    break
    
    case 6:
        console.log(`Hoje e Sábado Dia ${dia} , Tenha um Otimo Dia!`)
    break
}