const data = [1, 2, 3, 0, 9, 8, 7, 6, 5];
const sortedData = data.slice().sort();

Array.prototype.swap = function (idx1, idx2) {
    const tmp = this[idx1];
    this[idx1] = this[idx2];
    this[idx2] = tmp;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    let i = left;
    let j = right;
    let pivot = Math.ceil((left + right) / 2);
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            arr.swap(i++, j--);
        }
    }
    if (left < j) {
        quickSort(arr, left, j);
    }
    if (i < right) {
        quickSort(arr, i, right);
    }
    return arr;
};
assert.deepStrictEqual(quickSort(data.slice()), sortedData);

const quick3Sort = (arr) => {
    return arr;
};
//assert.deepStrictEqual(quick3Sort(data.slice()), sortedData);

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const m = Math.ceil(arr.length / 2);
    const left = mergeSort(arr.splice(0, m));
    const right = mergeSort(arr.splice(0));

    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }

    while (left.length > 0) {
        arr.push(left.shift());
    }

    while (right.length > 0) {
        arr.push(right.shift());
    }

    return arr;
};
assert.deepStrictEqual(mergeSort(data.slice()), sortedData);

const timSort = (arr) => {
    return arr;
};
//assert.deepStrictEqual(timSort(data.slice()), sortedData);

const heapSort = (arr) => {
    let n = arr.length;
    let i = Math.ceil(n / 2);
    let heap, child, t;
    while (true) {
        if (i > 0) {
            t = arr[--i];
        } else {
            if (--n <= 0) {
                return arr;
            }
            t = arr[n];
            arr[n] = arr[0];
        }
        heap = i;
        child = i * 2 + 1;
        while (child < n) {
            if (child + 1 < n && arr[child + 1] > arr[child]) {
                child++;
            }
            if (arr[child] > t) {
                arr[heap] = arr[child];
                heap = child;
                child = heap * 2 + 1;
            } else {
                break;
            }
        }
        arr[heap] = t;
    }
};
assert.deepStrictEqual(heapSort(data.slice()), sortedData);

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for (let k = arr.length - 1; k > i; k--) {
            if (arr[k] < arr[k - 1]) {
                arr.swap(k, k - 1);
                swapped = true;
            }
        }
        if (!swapped) {
            return arr;
        }
    }
};
assert.deepStrictEqual(bubbleSort(data.slice()), sortedData);

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let k = i; k > 0 && arr[k] < arr[k - 1]; k--) {
            arr.swap(k, k - 1);
        }
    }
    return arr;
};
assert.deepStrictEqual(insertionSort(data.slice()), sortedData);

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[k] < arr[j]) {
                j = k;
            }
        }
        arr.swap(i, j);
    }
    return arr;
};
assert.deepStrictEqual(selectionSort(data.slice()), sortedData);

const treeSort = (arr) => {
    return arr;
};
//assert.deepStrictEqual(treeSort(data.slice()), sortedData);

const shellSort = (arr) => {
    let h = 1;
    while (h < arr.length) {
        h = 3 * h + 1;
    }

    while (h > 0) {
        h = Math.floor(h / 3);

        for (let k = h; k < arr.length; k++) {
            const temp = arr[k];
            for (j = k; j >= h && arr[j - h] > temp; j -= h) {
                arr[j] = arr[j - h];
            }
            arr[j] = temp;
        }
    }

    return arr;
};
assert.deepStrictEqual(shellSort(data.slice()), sortedData);

const bucketSort = (arr) => {
    return arr;
};
//assert.deepStrictEqual(bucketSort(data.slice()), sortedData);

const radixSort = (arr) => {
    return arr;
};
//assert.deepStrictEqual(radixSort(data.slice()), sortedData);

const coutingSort = (arr) => {
    return arr;
};
//assert.deepStrictEqual(coutingSort(data.slice()), sortedData);

const cubeSort = (arr) => {
    return arr;
};
//assert.deepStrictEqual(cubeSort(data.slice()), sortedData);
