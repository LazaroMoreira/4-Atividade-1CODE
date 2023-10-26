var celular = [
    {
        marca: 'Chevorlet',
        modelo: 'Onix',
        ano: 2020,
        motor: 1.4
    },
    {
        marca: 'Fiat',
        modelo: 'Uno',
        ano: 2013,
        motor: '1.0'
    }
]

function contarPropiedades(objeto) {
    numerodePropriedades = 0
    for (let i in objeto) {
        numerodePropriedades++
    }

    return numerodePropriedades;
}
console.log(contarPropiedades(celular))

