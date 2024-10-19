function mergeSort(array) {
    if (array.length < 2) {
        return array
    }
    //split array
    let newArrayLeft = array.slice(0, Math.round(array.length / 2))
    let newArrayRight = array.slice(Math.round(array.length / 2), array.length)

    let newLeft = mergeSort(newArrayLeft)
    let newRight = mergeSort(newArrayRight)

    let sortedArray = []

    while (newLeft.length !== 0 || newRight.length !== 0) {
        if (newLeft[0] < newRight[0] || (newRight.length === 0 && newLeft.length !== 0)) {
            sortedArray.push(newLeft[0])
            newLeft.shift()
        }
        if (newLeft[0] > newRight[0] || (newLeft.length === 0 && newRight.length !== 0)) {
            sortedArray.push(newRight[0])
            newRight.shift()
        }
        if (newLeft[0] === newRight[0] && (newLeft.length !== 0 && newRight.length !== 0)) {
            sortedArray.push(newLeft[0])
            newLeft.shift()
        }
    }

    return sortedArray
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log('next')
console.log(mergeSort([105, 79, 100, 110]))