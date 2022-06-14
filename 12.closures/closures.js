function greet(message){
    var city ="Boston"
    return function(name){
        console.log(message.greet + ' ' + name + ", are you from " + city + "?")
    }
}

var sayHello = greet({greet: "hello"})
console.log(sayHello)

var wishMe = sayHello("Scott")