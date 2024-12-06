let secretNumber = Math.round(Math.random() * 100);
let max = 100;
let min = 0;
let moves = 0;
function attemptinarySearch(min, max, secretNumber, moves = 1) {
  let attempt = Math.floor((min + max) / 2);

  if (attempt === secretNumber) {
    return `Угадал число ${attempt} за ${moves} ходов`;
  }

  moves++;
  if (attempt > secretNumber) {
    console.log(`Компьютер 1: пробую число ${attempt}. Компьютер 2: Больше`);
    return attemptinarySearch(min, attempt - 1, secretNumber, moves);
  } else {
    console.log(`Компьютер 1: пробую число ${attempt}. Компьютер 2: Меньше`);
    return attemptinarySearch(attempt + 1, max, secretNumber, moves);
  }
}

console.log(attemptinarySearch(min, max, secretNumber));
