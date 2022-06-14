var message = (function greet(){
                    return "Hello"
              })()
console.log(message, typeof message)

var getMessage = (function confirm(message){
    return "Hello"
})()

console.log(getMessage)

var getFullName = (function(firstName, lastname){
    return firstName + " " + lastname
})("Scott", "Desatnick")


console.log(getFullName)