function mergeSort(arr) {
    if (arr.length <= 1) return arr

    const midIndex = parseInt((arr.length - 1) / 2 + 0.5)
    const left = []
    const right = []

    for (let i = 0; i < midIndex; i++) left.push(arr[i])
    for (let i = midIndex; i < arr.length; i++) right.push(arr[i])

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const result = []
    let i = 0
    let j = 0

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }

    while (i < left.length) {
        result.push(left[i])
        i++
    }

    while (j < right.length) {
        result.push(right[j])
        j++
    }

    return result
}

let arr = [20, 10, 40, 50, 30]
arr = mergeSort(arr)
console.log(arr)