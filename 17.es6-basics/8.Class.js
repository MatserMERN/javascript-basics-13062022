class Student {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName(){
        return this.firstName + " " + this.lastName
    }

    getData(){
        return this.getFullName()
    }
}

var student = new Student("Scott", "Desatnick")
console.log(student)
console.log(student.getFullName())
console.log(student.getData())