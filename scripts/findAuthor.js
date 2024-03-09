//Задача: У вас є масив об'єктів, які представляють книги з полями title (назва)
// та author (автор). Знайдіть першу книгу в масиві, автор якої "Джордж Орвелл".
const books = [
    { title: 'Гаррі Поттер', author: 'Дж.К. Ролінг' },
    { title: '1984', author: 'Джордж Орвелл' },
    { title: 'Хоббіт', author: 'Дж.Р.Р. Толкієн' }
];

let harry = books.find(elem => {
    return elem.author === "Дж.К. Ролінг"
});
console.log(harry)