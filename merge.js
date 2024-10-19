function mergeSort(array) {
    //if = 1 then reuturn
    if (array.length < 2) {
        return array
        // then compare this number to the other sorted half
    }
    //split array
    newArrayLeft = array.slice(0, Math.round(array.length / 2))
    newArrayRight = array.slice(Math.round(array.length / 2), array.length)
    console.log(newArrayRight, 'newarrayright')

    let newLeft = mergeSort(newArrayLeft) // returns 2
    console.log(newLeft, "newleft")
    let newRight = mergeSort(newArrayRight) // returns 1
    console.log(newRight, 'newRight')

    // mergeSort([2, 1, 0, 3])
    //     mergeSort([0, 3])
    //         mergeSort([0]) // returns newLeft = 0
    //         mergeSort([3]) // returns newRight = 3
    //     mergeSort([2, 1,])
    //         mergeSort([2]) //returns newLeft = 2
    //         mergeSort([1]) // returns newRight = 1
        


    //dont use .sort and compare value by value
    // let sortedArray = array.sort((newLeft, newRight) => newLeft - newRight)

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
    }

    console.log(sortedArray, 'sortedArray')
    return sortedArray

    //array = [2, 1, 0, 3]
}
console.log(mergeSort([2, 1, 0, 3]))

// console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
// console.log('next')
// console.log(mergeSort([105, 79, 100, 110]))