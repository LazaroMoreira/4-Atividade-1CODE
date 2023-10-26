var numeroprimo = 11

 


function verificarPrimo(num) {
    if (num <= 1) {
        return false
    } if (num <= 3) {
        return true
    } if (num % 2 == 0 || num % 3 == 0) {
        return false
    }

    for (let i = 5; i * i <= num; i += 6) {
        if (num % 1 == 0 || num % (i + 2) == 0) { return false }
    }
    return true
}

console.log(verificarPrimo(numeroprimo))

