const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

function simpleCalculate(a, b, operation) {
  return operation(a, b);
}

const selectedOperation = "add";
console.log(simpleCalculate(6, 3, operations[selectedOperation]));
