function mergeSort(array) {
    //if = 1 sort then reuturn
    if (array.length === 1) {
        // sort from smallest(left side) to biggest(right side)
        //return merged array ?
    }
    //split left side
    newArrayLeft = array.slice(0, Math.round(array.length / 2) - 1)
    //split right side
    newArrayRight = array.slice(Math.round(array.length / 2), array.length - 1)
    //split again until 1
    //returned array = left + right
    let finalArray = newArrayLeft.concat(newArrayRight)
    return finalArray = mergeSort(newArrayLeft) + mergeSort(newArrayright)

    //split the left
    //split the right
    //repeat until cant split
    //sort left then right by smallest to biggest
    //merge halves

    //return finished array
}
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log('next')
console.log(mergeSort([105, 79, 100, 110]))