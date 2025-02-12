function myIncludes(arr, item, from = 0) {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}
console.log(myIncludes([1, 2, 3, 4, 5], 2,1));
