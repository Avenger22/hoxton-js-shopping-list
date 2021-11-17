let shoppingListItems = ["Milk", "Cocoa", "Salad", "Carrots", "Tomatoes", "Ready meals"]
let shoppingListItemsPrice = [1.20, 2.00, 2.00, 2.00, 2.50, 5.00]
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
    listItemPrice = prompt("Please enter again this time a string : ")

    if (Number.isNaN(listItemPrice)) {
        alert("Sorry User we terminate the program you are trolling us.")
        throw new Error("This user is trolling entering string in place of numbers")
    }
}

//Now we add the item and price to both arrays that we got from prompt
shoppingListItems.push(listItem)
shoppingListItemsPrice.push(listItemPrice)

//Outputing the array items one by one made it better this way
alert("We will now output the items and price in the console so be patient.")

let totalPrice = null;
for (const element of shoppingListItems) {
    let indexOfElement = shoppingListItems.indexOf(element)
    console.log(`The elements are : ${element} and the price is : ${shoppingListItemsPrice[indexOfElement].toFixed(2)}`)
    totalPrice += shoppingListItemsPrice[indexOfElement]
    // alert(`The elements are : ${element}`)
}

//outputing TOTAL PRICE AFTER LOOP
console.log(`The Total Price is : ${totalPrice.toFixed(2)} `)

// for (const element of shoppingListItemsPrice) {
//     console.log(`The elements Price are : ${element.toFixed(2)}`)
//     alert(`The elements Price are : ${element.toFixed(2)}`)
// }





















