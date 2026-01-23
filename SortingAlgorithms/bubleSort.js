function bubleSort(arr) {
    let temp

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - 1; j++) {


            if (arr[j] > arr[j + 1]) {

                temp = arr[j]

                arr[j] = arr[j + 1]

                arr[j + 1] = temp

            }
        }
    }

    console.log(arr)
}

let arr = [20, 10, 40, 50, 30]
bubleSort(arr)
