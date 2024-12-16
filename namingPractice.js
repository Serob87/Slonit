let sumOfMostValuableCustomers = [10000, 20000, 30000];

function totalAmountOfMostValuableCustomers(arrOfBuyers) {
  let totalSum = 0;
  arrOfBuyers.forEach((buyer) => {
    totalSum += buyer;
  });
  return totalSum;
}

console.log(totalAmountOfMostValuableCustomers(sumOfMostValuableCustomers));
