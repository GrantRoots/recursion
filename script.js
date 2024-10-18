#!/usr/bin/node

function fibs(x) {
    let array = []
    let first = 0
    let second = 1

    if (x <= 1) {
        if (x === 1)
        {
            array.push(first)
            return array
        }
        return ''
    }
    array.push(first)
    array.push(second)

    for (let i = 0; i < x - 2; i++) {
        let total = first + second
        array.push(total)
        first = second
        second = total
    }
    return array
}

function fibsRec(n) {
    if (n == 0) return [0]
    if (n == 1) return [0, 1]
    const arr = fibsRec(n - 1)
    return [...arr, arr[n-1] + arr[n-2]]
}
console.log(fibsRec(8))