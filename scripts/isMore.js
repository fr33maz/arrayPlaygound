//Задача: Перевірте, чи є в масиві чисел хоча б одне число більше 100.
const numbers = [45, 80, 32, 100, 105];

console.log(numbers.some(elem => elem > 100));
