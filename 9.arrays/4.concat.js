var fruits = ["Orange", "Apple", "Mango", "Guava"]

var vegetables = ["Potato", "Tomato", "Egg Plant", "Drumstick"]

var mixedOne = fruits.concat(vegetables)

console.log(mixedOne)

var mixedTwo = vegetables.concat(fruits)

console.log(mixedTwo)

// var mixed = fruits + vegetables

// console.log(mixed , typeof mixed)

/*
    ? join() - Convert an array into string
*/
var movies =["Avatar", "Good Will Hunting", "Martian", "Good Luck"]

var movieString = movies.join(",")

console.log(movieString)

/*
    ? split() - Convert a string into an array
*/

var fullName ="Scott Desatnick"

var names = fullName.split(" ")

console.log(names)