var carro = {marca: 'mitsubishi',
modelo: 'lancer evolution',
ano: 2012}

var caminhao

function clonarObjeto(obj1, obj2){
    obj2 = obj1
    return obj2
}
console.log(clonarObjeto(carro, caminhao))