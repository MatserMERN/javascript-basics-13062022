// function Student(name, gender){
//     this.name =name
//     this.gender=gender
// }

//  Student.prototype.age =0

// // Student.prototype.getName = function(){
// //     return this.name
// // }

// var studentObj1 = new Student("Scott", "male")
// studentObj1.__proto__.age = 46
// console.log(studentObj1)

// var studentObj2 = new Student("Dagny", "female")
// console.log(studentObj2)

// console.log(studentObj1.age)


// console.log(Student.prototype)
// console.log(studentObj1.prototype)
// console.log(studentObj1.__proto__)

// console.log(typeof Student.prototype)
// console.log(typeof studentObj1.__proto__)

// console.log(Student.prototype == studentObj1.__proto__)

function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    // this.getFullName = function(){
    //     return this.firstName + " " + this.lastName
    // }
}

Person.prototype.getFullName = function(){
    console.log('with prototype')
    return this.firstName + " " + this.lastName
}

Person.getFullName = function(){
    console.log('without prototype')
    return this.firstName + " " + this.lastName
}

var person1 = new Person("Scott", "Desatnick")
console.log(person1)
person1.getFullName()

var person2 = new Person("Adam", "Colson")
console.log(person2)
person2.getFullName()

var person3 = new Person("Tuan", "Bui")
console.log(person3)
person2.getFullName()

// Person.getFullName() Static Method