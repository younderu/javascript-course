arr = [
  -5119, 2744, 2443, 8240, 3565, -5413, 9176, -2614, -8977, 4268, 5963, -3921,
  -5585, 5307, -3091, -3616, -7849, -9311, 9048, -1150, 2201, 1657, -8868,
  -7570, -4017, -9300, 7854, 8222, 2557, -1047, 6019, -4520, 9479, 3243, -5939,
  -1012, -6433, 7418, -2746, 3428, 8909, 8233, 4627, 4301, 8685, 9237, -2992,
  6227, -8469, 4917, 1104, -8585, 3115, 2346, 7197, 4993, -3475, 1752, -2935,
  -8774, -2518, -1997, -9749, -5351, 6594, -1776, 8321, 9437, 3858, -1332, 6371,
  -2463, 7293, -8374, 9742, 9175, -7037, -4648, 4969, 9842, -6174, -7718, -8627,
  -7998, -2855, -1867, 5355, -5072, -8221, 4383, 4849, -7953, 7325, -8471, 8963,
  -6782, 8224, 6619, -4488, -8051, 6076, -7746,
];

let arr1 = [-469,undefined,3592,undefined,1639,-710,7930,-950,7697,undefined,2259,undefined,2097,4713,-55,-426,undefined,8546,
  undefined,961,undefined,8414,-718,2294,-301,undefined,5468,0,4297,-478,7854,-266,undefined,4489,-294,2712,undefined,
  2688,undefined,-979,-223,2386,4704,1521,9717,-365,-197,-958,4370,7257,4931,undefined,12,9959,2198,-809,undefined,
  undefined,5670,undefined,2677,undefined,4354,-68,7173,undefined,2952,9390,997,3348,-749,-829,undefined,2958,-271,7981,-477,
  21,undefined,6340,-271,4141,undefined,7754,333,3253,6662,undefined,9515,undefined,7411,undefined,9406,1043,undefined,
  undefined,4352,-274,111,2520,1114,1234,-5678,9876,undefined,345,-876,5432,8765,undefined,-4321,7890,undefined,123,-456,789,undefined,
  -321,654,987,undefined,-2222, 7993,-1111,-9, 621,8532,-179,undefined, 893,-421,3,-100];

console.log(sorting.bubbleSort(arr.slice(), "desc"));
console.log(sorting.selectionSort(arr.slice(), "desc"));
console.log(sorting.insertionSort(arr.slice(), "desc"));
console.log(sorting.shellSort(arr.slice(), "desc"));
console.log(sorting.quickSort(arr.slice(), "desc"));

console.log("/////////////////////////////");

console.log(sorting.bubbleSort(arr1.slice(), "desc"));
console.log(sorting.selectionSort(arr1.slice(), "desc"));
console.log(sorting.insertionSort(arr1.slice(), "desc"));
console.log(sorting.shellSort(arr1.slice(), "desc"));
console.log(sorting.quickSort(arr1.slice(), "desc"));
