//Задача: Перевірте, чи всі числа в масиві є додатніми.
const nums = [1, 2, 3, 4, 5, -6, 7];

console.log(!nums.some(elem => elem < 0));