//Задача: У вас є масив речень. Створіть новий масив, де кожен елемент буде першим словом з відповідного речення.

const sentences = ["Я люблю JavaScript", "Масиви це весело", "Програмування це круто"];

let newStringSentence = sentences.map(elem => elem.split(" ")[0]);
console.log(newStringSentence)

