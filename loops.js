let array = [1,2,3,4,5,6,7,8,9,10,"teste"]
let x = 0

do {
    console.log("Posição do x é: " + x )
    console.log("*********************")
    console.log("Valor da posição é: " + array[x])
    console.log("*********************")
    x = x + 1
} while(x < array.length)


