// function display(){
//     return "Hello"
// }

var display = function(){
    return "Welcome to the world of functions"
}

console.log(display, typeof display)
console.log(display(), typeof display())

var add = function(a,b){
    return a + b
}

console.log(add(10, 20))

var test = function(){
    console.log('Test is invoked')
}

test()


var getData = function fetchData(){
    return "Here is your data"
}

console.log(getData.fetchData()) // Error
console.log(fetchData) // Error
