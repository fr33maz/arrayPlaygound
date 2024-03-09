//Задача: У вас є масив чисел. Створіть новий масив, який містить тільки парні числа з вихідного масиву.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumbersArray = numbers.filter(elem => elem % 2 === 0)
console.log(oddNumbersArray)