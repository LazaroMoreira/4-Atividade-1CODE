let numero = [1, 2, 3, 4, 5]
let multi = 7


function multiplicarArray(array, multiplicador) {

    let novoarray = []
    for (let i = 0; i < numero.length; i++) {
        novoarray.push(array[i] * multiplicador)
    }
    return novoarray
}
console.log(multiplicarArray(numero, multi))
