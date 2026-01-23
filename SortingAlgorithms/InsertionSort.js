function insertionSort(arr) {
    for (let j = 1; j < arr.length; j++) {
        let key = arr[j];
        let i = j - 1;

        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i];
            i--;
        }

        arr[i + 1] = key;
    }

    console.log(arr);
}

let arr = [20, 10, 40, 50, 30];
insertionSort(arr);