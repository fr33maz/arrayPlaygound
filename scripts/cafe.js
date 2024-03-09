let orders = [];
let order1 = {
    table: 1, dishes: [{name: "Кава", price: 30}, {name: "Чізкейк", price: 50},], status: "в обробці"
};
let order2 = {
    table: 2, dishes: [{name: "Лате", price: 40}, {name: "Тірамісу", price: 60}], status: "готується"
};
let order3 = {
    table: 3, dishes: [{name: "Чай", price: 20}, {name: "Чізкейк", price: 50},], status: "в обробці"
};
let order4 = {
    table: 4, dishes: [{name: "Кава", price: 30}, {name: "Медовик", price: 70},], status: "в обробці"
};
let order5 = {
    table: 5, dishes: [{name: "Кава", price: 30}, {name: "Наполеон", price: 80},], status: "в обробці"
};

addOrder(order1)
addOrder(order2)
addOrder(order3)
addOrder(order4)
addOrder(order5)
console.log("Ваш заказ коштує:", getTotalAmount(3), "гривень");
console.log(orders);
cancelOrder(3);
console.log(orders);
changeOrderStatus(4, "готується")
console.log(orders);

function getTotalAmount(tableNumber) {
    return orders[orders.findIndex(elem => elem.table === tableNumber)]
        .dishes.reduce((acc, elem) => acc + elem.price, 0)
}

function addOrder(order) {
    orders.push(order)
    orders.sort((a, b) => a.table > b.table ? 1 : -1)
}

function cancelOrder(tableNumber) {
    let table = orders.findIndex(elem => elem.table === tableNumber);
    if (table > 0) {
        orders.splice(table, 1);
    } else {
        console.log(`unable to find ${tableNumber}`)
    }
}

function changeOrderStatus(tableNumber, newStatus) {
    if (orders.findIndex(elem => elem.table === tableNumber) > 0) {
        orders.map(elem => {
            if (elem.table === tableNumber) {
                let order = {...elem, status: newStatus};
                cancelOrder(tableNumber);
                addOrder(order)
            }
        })
    } else {
        console.log(`unable to find table number: ${tableNumber}`)
    }
}