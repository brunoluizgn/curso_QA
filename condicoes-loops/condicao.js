/*  Primeiros conceitos de if, else e function em JS

let x = 1
let y = 2

if(x == y) {
    console.log(" As variáveis são iguais")
} else {
    console.log("As variáveis são diferentes")
}

let Idade = 25
if(Idade > 18){
    console.log("Ele é maior de idade")
} else {
    console.log("Ele é menor de idade")
} */

function compararNumeros(Num1, Num2) {

    if (Num1 < Num2) {

        return "Numero 2 é Maior "

    } else if (Num1 == Num2) {

        return " São iguais"
    }
    else {

        return " Numero 1 Maior"
    }
}

function dayOffTheWeek(dia){
    switch(dia){
        case 1:
            return "sunday"
        case 2:
            return "monday"   
        case 3:
            return "tuesday"     
        case 4:
            return "wednesday" 
        case 5:   
            return "thursday"
        case 6:
            return "friday"
        case 7:
            return "Saturday"   
        default:
            return "dia não encontrado"         
    }
}

 console.log(dayOffTheWeek(7)) 

