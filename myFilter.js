const arr = [1, 2, 3, 4, 5, 6];
const callback = (n) => n > 2;
function myFilter(array, callback) {
  let newArr = [];
  for (const el of array) {
    if (callback(el)) {
      newArr.push(el);
    }
  }
  return newArr;
}
console.log(myFilter(arr, callback));
