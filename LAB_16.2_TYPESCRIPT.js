var mountains = [
    { "name": "Kilimanjaro", "height": 19341 },
    { "name": "Everest", "height": 29029 },
    { "name": "Denali", "height": 20310 },
];
function findNameOfTallestMountain(mountains) {
    var mountainName = '';
    var tallestMountain = 0;
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var m = mountains_1[_i];
        if (m.height > tallestMountain) {
            tallestMountain = m.height;
            mountainName = m.name;
        }
    }
    return mountainName;
}
var outputTallenstMountain = findNameOfTallestMountain(mountains);
console.log(outputTallenstMountain);
var coffeeDrinks = [
    { "name": "Latte", "price": 4.99 },
    { "name": "Iced Coffee", "price": 3.99 },
    { "name": "Hot Coffee", "price": 2.99 },
];
function calcAverageProductPrice(coffeeDrinks) {
    var sum = 0;
    var average = 0;
    for (var _i = 0, coffeeDrinks_1 = coffeeDrinks; _i < coffeeDrinks_1.length; _i++) {
        var c = coffeeDrinks_1[_i];
        sum += c.price;
    }
    average = sum / coffeeDrinks.length;
    return average;
}
var outputAveragePrice = calcAverageProductPrice(coffeeDrinks);
console.log("Average Price: " + outputAveragePrice);
var productInventory = [
    { "name": "motor", "price": 10.00 },
    { "name": "sensor", "price": 12.50 },
    { "name": "LED", "price": 1.00 },
];
var inventory = [
    { "product": productInventory[0], "quantity": 10 },
    { "product": productInventory[1], "quantity": 4 },
    { "product": productInventory[2], "quantity": 20 }
];
function calcInventoryValue(item) {
    var inventoryValue = 0;
    for (var _i = 0, item_1 = item; _i < item_1.length; _i++) {
        var i = item_1[_i];
        inventoryValue += (i.product.price * i.quantity);
    }
    return inventoryValue;
}
var outputInventoryValue = calcInventoryValue(inventory);
console.log("Inventory Value: " + outputInventoryValue);
