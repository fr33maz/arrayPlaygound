//Задача: У вас є масив цін на товари. Збільште всі ціни на 10%.

let prices = [100, 200, 300, 400, 500];

prices = prices.map(value => Math.floor(value * 1.1));
console.log(prices);