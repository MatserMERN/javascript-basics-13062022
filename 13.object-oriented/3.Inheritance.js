function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName
}

function Student(age){
    this.age = age
}

// Inheritance 
Student.prototype = new Person("Scott", "Desatnick")

Student.prototype.getAge = function(){
    return this.age
}

var studentObj = new Student(45)
console.log(studentObj.firstName)
console.log(studentObj.lastName)
console.log(studentObj.age)
console.log(studentObj.getFullName())
console.log(studentObj.getAge())