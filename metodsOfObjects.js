const obj = { name: "Vasya", friends: 5, likes: 19, projects: 7 };
function theSumOfNumFields(obj) {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }
  return sum;
}
console.log(theSumOfNumFields(obj));

function sortNumFields(obj) {
  let arr = [];
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      arr.push(key);
    }
  }
  return arr.sort((a, b) => obj[b] - obj[a]);
}
console.log(sortNumFields(obj));
