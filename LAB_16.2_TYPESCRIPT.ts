
// ---------------------------------------------------------------------------------------------------
// -------------------------------------- TALLEST MOUNTAIN -------------------------------------------
// ---------------------------------------------------------------------------------------------------
interface Mountain{
    name:string;
    height:number;
}

let mountains:Mountain[] = [
    {"name":"Kilimanjaro", "height": 19341},
    {"name":"Everest", "height": 29029},
    {"name":"Denali", "height": 20310},
]

function findNameOfTallestMountain(mountains:Mountain[]):string{
    let mountainName:string = '';
    let tallestMountain:number = 0;
    for(let m of mountains){
        if(m.height > tallestMountain){
            tallestMountain = m.height
            mountainName = m.name
        }
    }
    return mountainName
}   

let outputTallenstMountain = findNameOfTallestMountain(mountains)
console.log(outputTallenstMountain)


// ---------------------------------------------------------------------------------------------------
// -------------------------------------------- PRODUCTS ---------------------------------------------
// ---------------------------------------------------------------------------------------------------

interface Product{
    name:string;
    price:number;
}

let coffeeDrinks:Product[] = [
    {"name":"Latte", "price": 4.99},
    {"name":"Iced Coffee", "price": 3.99},
    {"name":"Hot Coffee", "price": 2.99},
]

function calcAverageProductPrice(coffeeDrinks:Product[]):number{
    let sum:number = 0;
    let average:number = 0;
    for (let c of coffeeDrinks){
        sum += c.price;
    }
    average = sum/coffeeDrinks.length
    return average
}

let outputAveragePrice = calcAverageProductPrice(coffeeDrinks)
console.log(`Average Price: ${outputAveragePrice}`);


// ---------------------------------------------------------------------------------------------------
// --------------------------------------- INVENTORY VALUE -------------------------------------------
// ---------------------------------------------------------------------------------------------------

interface InventoryItem{
    product:Product;
    quantity:number;
}

let productInventory:Product[] = [
    {"name":"motor", "price": 10.00},
    {"name":"sensor", "price": 12.50},
    {"name":"LED", "price": 1.00},
]

let inventory:InventoryItem[] = [
    {"product":productInventory[0],"quantity":10},
    {"product":productInventory[1],"quantity":4},
    {"product":productInventory[2],"quantity":20}
]

function calcInventoryValue(item:InventoryItem[]):number{
    let inventoryValue = 0;
    for (let i of item){
        inventoryValue += (i.product.price * i.quantity)
    }
    return inventoryValue
}

let outputInventoryValue = calcInventoryValue(inventory)
console.log(`Inventory Value: ${outputInventoryValue}`);