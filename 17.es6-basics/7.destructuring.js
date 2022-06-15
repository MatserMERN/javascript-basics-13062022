// Array Destructuring

let arr = ["Scott", "Adam", "Tuan"]

let [name1, name2, name3] = arr

console.log(name1) // arr[0]
console.log(name2) // arr[1]
console.log(name3) // arr[2]

// split

let [firstName, lastName] =  "Scott Desatnick".split(" ")
console.log(firstName)
console.log(lastName)

let [fName, lName] = ["Scott", "Jr.", "Desatnick"]

console.log(fName)
//console.log(mName)
console.log(lName)

// Object Destructuring

let user = {
    name: "Scott",
    age: 45
}

let {name, age} = user

console.log(name)
console.log(age)

let options ={
    title: 'Menu',
    width: 100,
    height: 200
}

let {title, width, height} = options

console.log(title)
console.log(width)
console.log(height)

// console.log(options.title)
// console.log(options.width)
// console.log(options.height)