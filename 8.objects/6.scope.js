// var person = {
//     firstName: "Scott",
//     lastName: "Desatnick",
//     city: "Boston",
//     age: 45
// }

// // CRUD
// person.email ="scott@ef.com" // CREATE
// person.firstName ="Great Scott" // UPDATE
// delete person.age // DELETE
// console.log(person) // READ

/*
    ? Object.preventExtensions
    ? We can't add new propeties
    ? We can edit and delete the existing properties
*/

// var studentPreventExtensions = {
//     firstName: "Scott",
//     lastName: "Desatnick",
//     city: "Boston",
//     age: 45
// }

// Object.preventExtensions(studentPreventExtensions)

// studentPreventExtensions.email ="scott@ef.com" // CREATE
// studentPreventExtensions.firstName ="Great Scott" // UPDATE
// delete studentPreventExtensions.age // DELETE
// console.log(studentPreventExtensions) // READ

/*
    ? Object.seal
    ? We can edit the propeties
    ? We can't add and delete the properties
*/

// var studentSeal = {
//     firstName: "Scott",
//     lastName: "Desatnick",
//     city: "Boston",
//     age: 45
// }

// Object.seal(studentSeal)

// studentSeal.email ="scott@ef.com" // CREATE
// studentSeal.firstName ="Great Scott" // UPDATE
// delete studentSeal.age // DELETE
// console.log(studentSeal) // READ

/*
    ? Object.freeze
    ? We can edit the propeties
    ? We can't add and delete the properties
*/

var studentFreeze = {
    firstName: "Scott",
    lastName: "Desatnick",
    city: "Boston",
    age: 45,
    address: {
        country: "USA"
    }
}

Object.freeze(studentFreeze)
Object.freeze(studentFreeze.address)

studentFreeze.email ="scott@ef.com" // CREATE
studentFreeze.firstName ="Great Scott" // UPDATE
delete studentFreeze.age // DELETE

studentFreeze.address.country="Bharat"
console.log(studentFreeze) // READ