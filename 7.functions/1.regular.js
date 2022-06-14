function display(){
    // return 1
    // return "Scott"
    // return true
    //return null
    // return undefined
    // return {}
     return function(){
        return "hello"
     }
    // return []
}

var test = display()
console.log(test)

function getName(firstName, lastname){
    return firstName + ' ' + lastname
}

console.log(getName("Scott", "Desatnick"))
console.log(getName("Adam", "Colson"))
console.log(getName("Tuan", "Bui"))


/*
    ? Function overloading is not possible in javascript
*/

function getDetails(name, email, city) {
    console.log(' Function with 3 params Executed')
    return "Name: " + name + ' ' + ", Email : " + email + ", City: " + city
}

function getDetails(name, email) {
    console.log(' Function with 2 params Executed')
    return "Name: " + name + ' ' + ", Email : " + email
}

function getDetails(name) {
    console.log(' Function with 1 params Executed')
    return "Name: " + name 
}

function getDetails() {
    console.log(' Function with no params Executed')
    return ""  
}

console.log(getDetails("Scott", "Scott@ef.com", "Boston"))
console.log(getDetails("Adam", "Adam@ef.com"))