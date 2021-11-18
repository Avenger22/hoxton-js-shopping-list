let shoppingListItems = [
    { name: "Milk", price: 1.20}, 
    { name: "Cocoa", price: 2.00},
    { name: "Salad", price: 2.00}, 
    { name: "Carrots", price: 2.0},
    { name: "Tomatoes", price: 2.50}, 
    { name: "Ready meals", price: 5.00}
]

let shoppingListItemsAvailable = ["Lettuce", "Beets", "Peas"]

alert("Welcome to our shopping lists program !!!")
console.log("Welcome !!!")

let listItem = prompt("Enter a new item in the list you can choose from new items like : \n Lettuce \n Beets \n Peas : ")
confirm("Would you like to confirm this ?")

//HERE WE CONTORL FOR THE USER INPUT IF HE ENTERED A NUMBER AND NOT A STRING
let productNotFound = null;

if ((Number(listItem))) {
    alert("Please user enter a string not a number")
    listItem = prompt("Please enter again this time a string : ")

    if ((Number(listItem))) {
        alert("Sorry User we terminate the program you are trolling us.")
        throw new Error("This user is trolling entering numbers in place of strings")
    }
}

//LOOP FOR AVAILABLE LISTS
while (productNotFound = shoppingListItemsAvailable.indexOf(listItem) === -1) {
    alert("Please enter an string item within the available list : ")
    listItem = prompt("Enter a new item in the list you can choose from new items like : \n Lettuce \n Beets \n Peas : ")
    confirm("Would you like to confirm this ?")
    productNotFound = shoppingListItemsAvailable.indexOf(listItem) === -1
}

//HERE WE CONTROL FOR USER INPUT IF HE ENTERED A STRING AND NOT A NUMBER
let listItemPrice = Number(prompt("Enter the price of the new item in the list : "))
confirm("Would you like to confirm this ?")

if (Number.isNaN(listItemPrice)) {
    alert("Please user enter a number not a string")
    listItemPrice = Number(prompt("Please enter again this time a string : "))

    if (Number.isNaN(listItemPrice)) {
        alert("Sorry User we terminate the program you are trolling us.")
        throw new Error("This user is trolling entering string in place of numbers")
    }
}

//Now we add the item and price to object this time that we got from prompt
let objectPush = { name: listItem, price: listItemPrice }
shoppingListItems.push(objectPush)

//Outputing the array items one by one made it better this way
alert("We will now output the items and price in the console so be patient.")

let totalPrice = 0;
for (const element of shoppingListItems) {
    let name = element.name
    let price = element.price
    totalPrice += price
    console.log(`The element with the name : ${name} with price : ${price.toFixed(2)} $ \n`)
}

//outputing TOTAL PRICE AFTER LOOP
console.log(`The Total Price like you entered is : ${totalPrice} $`)
console.log(`The Total Price rounded with 2 decimal is : ${totalPrice.toFixed(2)} $`)