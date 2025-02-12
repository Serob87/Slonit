function mySlice(arr, start = 0, end = arr.length) {
  let newArr = [];
  if (!arr) return [];
  if (start < 0) {
    start = arr.length + start;
  }
  if (end < 0) {
    end = arr.length + end;
  }

  if (start > arr.length) {
    start = arr.length;
  }
  if (end > arr.length) {
    end = arr.length;
  }
  for (let i = start; i < end; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(mySlice([1, 2, 3, 4], 1, 3));
