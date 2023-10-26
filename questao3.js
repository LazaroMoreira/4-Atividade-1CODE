
/*function inverterString (txt1){
    var saida = " "
    for (let i = txt1.length; i >=0; i--){
        saida == txt1[i];
    }
   console.log(saida)

}
inverterString('texto')*/


/*var Frase = ["Bom", "dia", "galera"]
Frase.reverse()
function inverterString() {

    return inverterString
}
console.log(Frase)*/

var texto = 'ola tudo bem'

function inverterString (string1){
    let strArr = string1.split('')

    let arrInvert = strArr.reverse()
    
    let invertedString = arrInvert.join('')

    console.log(invertedString)

}
inverterString(texto)
