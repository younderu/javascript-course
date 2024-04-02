(function (window) {
  let sorting = {};

  function removeEmptyElements(arr) {
    prevLen = arr.length;
    arr = arr.filter((element) => typeof element !== "undefined");
    currLen = arr.length;
    if (prevLen > currLen) {
      console.log(
        "You are working with sparse array. Undefined elements will be deleted"
      );
    }
    return arr;
  }

  sorting.bubbleSort = function (arr, m = "ASC") {
    arr = removeEmptyElements(arr);

    let swaps = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (
          (m.toUpperCase() === "ASC" && arr[j] > arr[j + 1]) ||
          (m.toUpperCase() === "DESC" && arr[j] < arr[j + 1])
        ) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swaps++;
        }
      }
    }
    console.log(`Bubble sort swaps - ${swaps}`);
    return arr;
  };

  sorting.selectionSort = function (arr, m = "ASC") {
    arr = removeEmptyElements(arr);

    let len = arr.length;
    let swaps = 0;

    for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
        if (
          (m.toUpperCase() === "ASC" && arr[min] > arr[j]) ||
          (m.toUpperCase() === "DESC" && arr[min] < arr[j])
        ) {
          min = j;
        }
      }

      if (min !== i) {
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
        swaps++;
      }
    }
    console.log(`Selection sort swaps - ${swaps}`);
    return arr;
  };

  sorting.insertionSort = function (arr, m = "ASC") {
    arr = removeEmptyElements(arr);

    let len = arr.length;
    let swaps = 0;

    for (let i = 1; i < len; i++) {
      key = arr[i];
      let j = i - 1;
      while (
        j >= 0 &&
        ((m.toUpperCase() === "ASC" && key < arr[j]) ||
          (m.toUpperCase() === "DESC" && key > arr[j]))
      ) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
      swaps++;
    }
    console.log(`Insertion sort swaps - ${swaps}`);
    return arr;
  };

  sorting.shellSort = function (arr, m = "ASC") {
    arr = removeEmptyElements(arr);

    let len = arr.length;
    let swaps = 0;

    for (
      let interval = Math.floor(len / 2);
      interval > 0;
      interval = Math.floor(interval / 2)
    ) {
      for (let i = interval; i < len; i += 1) {
        let temp = arr[i];
        let j = i;
        for (
          ;
          j >= interval &&
          ((m.toUpperCase() === "ASC" && arr[j - interval] > temp) ||
            (m.toUpperCase() === "DESC" && arr[j - interval] < temp));
          j -= interval
        ) {
          arr[j] = arr[j - interval];
          swaps++;
        }
        arr[j] = temp;
      }
    }

    console.log(`Shell sort swaps - ${swaps}`);
    return arr;
  };

  function partition(arr, low, high, m) {
    let pivot = arr[high];
    let i = low - 1;
    let swaps = 0;

    for (let j = low; j < high; j++) {
      if (
        (m.toUpperCase() === "ASC" && arr[j] <= pivot) ||
        (m.toUpperCase() === "DESC" && arr[j] >= pivot)
      ) {
        i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        swaps++;
      }
    }

    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    swaps++;

    return { index: i + 1, swaps: swaps };
  }

  function quickSortRecursive(arr, low, high, m = "ASC", totalSwaps = 0) {
    if (high > low) {
      let { index, swaps } = partition(arr, low, high, m);
      quickSortRecursive(arr, low, index - 1, m, totalSwaps);
      quickSortRecursive(arr, index + 1, high, m, totalSwaps);
      totalSwaps += swaps;
    }
    if (low === 0 && high === arr.length - 1) {
      console.log(`Quick sort swaps: ${totalSwaps}`);
    }
    return arr;
  }

  sorting.quickSort = function (arr, m = "ASC") {
    arr = removeEmptyElements(arr);
    let arr1 = quickSortRecursive(arr, 0, arr.length - 1, m);
    return arr1;
  };
  window.sorting = sorting;
})(window);
