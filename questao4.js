/*const vogal = ["a", "e", "i", "o", "u"]

function contarVogais(){

    return vogal.length

}
console.log(vogal.length)*/

let texto = "Fala baixo mó nengue";
let totalVogais = 0

function contarVogais() {

    for (let i = 0; i < texto.length; i++) {

        let vogais = "aeiouAEIOU";

        for (let j = 0; j < vogais.length; j++) {

            

            if (texto[i] == vogais[j]) {
                totalVogais++
            }
        }

    }

}

contarVogais()
console.log(totalVogais)