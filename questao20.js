var numeros = [
    { nome: 'LAZARO', idade: 32, },
    { nome: 'Alexandro', idade: 15, },
    { nome: 'Carol', idade: 21 }]

function ordenarObjetos(array) {
    var newarray = array.sort((a, b) => a.idade - b.idade)
    return newarray
}
console.log(ordenarObjetos(numeros))

