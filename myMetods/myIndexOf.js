function myIndexOf(arr, item, from = 0) {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}
console.log(myIndexOf([1, 2, 3, 4, 5, 1], 2, 0));
