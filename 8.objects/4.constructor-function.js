function Student(firstName, lastName){
    this.fName = firstName
    this.lName = lastName
    this.getFullName = function(){
        return this.fName + ' ' + this.lName
    }
}

var stuObj =  new Student("Scott", "Desatnick")

console.log(stuObj)
console.log(stuObj.getFullName())