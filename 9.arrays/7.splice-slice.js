// Add Elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,0, "Lemon", "Kiwi")
console.log(fruits)

// Remove Elements

var fruitsOne = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruitsOne.splice(2,2)
console.log(fruitsOne)

// Slice
var fruitsTwo = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruitsTwo.slice(1, 4);
console.log(citrus)