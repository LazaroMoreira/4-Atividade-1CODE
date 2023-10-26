var media = [8, 7, 9, 7]

var numTotal = 0
var numMedia = 0

function mediaArray(array, total, medias) {

    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    medias = total / array.length
    return (medias)
}
console.log(mediaArray(media, numTotal, numMedia))