// => fat arrow

// var add = function(x,y){
//     return x + y
// }

// var add = (x,y) =>{
//     return x + y
// }

/*
    * Both are same
    ? (x,y) => {return x + y}
    ? (x,y) =>  x + y
*/

//var add = (x,y) => {return x + y}

// var add = (x,y) => x + y

// console.log(add(10,20))

// sort an array

let numbers = [4,2,6]

// numbers.sort(function(a,b){
//     return a-b
// })

numbers.sort((a,b) => a-b)
console.log(numbers)

/*
  ? (name) => name.length
  ?  name => name.length
*/

let names = ["Scott", "Adam", "Tuan"]
let lengths = names.map(name =>name.length)
console.log(lengths)

// With No parameters

// let logDoc = function(){
//     console.log(window.document)
// }

let logDoc = () => console.log(window.document)

logDoc()

// Line break

// let multiply = (x,y)
// => x*y   // This will give a syntax error


let multiply = (x,y) => 
x*y   
console.log(multiply(5,4))

// Object Literal

// let setColor = function(color){
//     return {value: color}
// }

// let backGroundColor = setColor('Green')

// console.log(backGroundColor)

//let setColor = (color) => { return {value: color}}
let setColor = (color) =>  ({value: color})

let backGroundColor = setColor('Green')

console.log(backGroundColor)