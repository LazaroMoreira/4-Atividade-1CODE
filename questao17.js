var aluno = {
    nome: 'Lazaro',
    notas: [7, 8, 9, 8],
    total: 0,
    mediafinal: 0,

    calcularMedia(array, tot, medF) {
        for (i = 0; i < array.length; i++) {
            tot += array[i]
        }

        medF = tot / array.length

        console.log(medF)
    }


}


aluno.calcularMedia(aluno.notas, aluno.total, aluno.mediafinal)