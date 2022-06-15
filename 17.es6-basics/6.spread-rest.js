/*
    ? Spread operator (...) - Unpacks elements from an array
    ? Rest operator   (...) - packs elements into an array
*/

// Spread
const add = [1,3,5]
const combined = [2,4,6, ...add]
console.log(combined)

// Rest
function display(a,b,c, ...args){
    console.log(args)
} 

display(1,2,3,4,5)

// Constructing array literal
let initialChars = ['A', 'B']
let chars = [...initialChars, 'C', 'D']
console.log(chars)

// Concatinating Arrays

let numbers = [1,2]
let moreNumbers =[3,4]
let allNumbers = [...numbers, ...moreNumbers]

console.log(allNumbers) // [1,2,3,4]

// Copying an array
let scores = [80, 70, 90]
let copiedScores = [...scores]
console.log(copiedScores)

// Spread Operator with String 
let charsOne = ['A', ...'BCDEF', 'G']
console.log(charsOne)