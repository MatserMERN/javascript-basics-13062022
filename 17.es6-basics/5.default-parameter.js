 // ES5
// function say(message){
//     message = typeof message !== 'undefined' ? message : "Hi"
//     console.log(message)
// }

// say("Hello")

//ES6
function say(message="hi" , city="Boston"){
    console.log(message, city)
}

say("Hello", "Newyork")