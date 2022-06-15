// private methods
// var Module = (function(){
//     var privateMethod = function(){

//     }

//     var publicMethod = function(){

//     }
// })()

// console.log(Module)

// Public Methods
// var Module = (function(){
//     var privateMethod = function(){

//     }
//     return {
//         publicMethod : function(){

//         }
//     }
// })()

// console.log(Module)

// Anonymous Object Literal
// var Module = (function(){
//     var privateMethod = function(){

//     }
    
//     return {
//         publicMethodOne : function(){

//         },
//         publicMethodTwo : function(){

//         },
//         publicMethodThree : function(){

//         }
//     }
// })()

// console.log(Module)

// // Locally Scoped Object Literal
// var Module = (function(){
//     var privateMethod = function(){

//     }

//     var myObj = {}

//     myObj.name ="myObj"
    
//     myObj.someMethod = function(){
        
//     }
//     myObj.anotherMethod = function(){

//     }

//     return myObj
// })()

// console.log(Module)

// Stacked Locally Scoped Object Literal
// var Module = (function(){
//     var privateMethod = function(){

//     }

//     var myObj = {
//         someMethod : function(){

//         },
//         anotherMethod : function(){

//         }
//     }

//     return myObj
// })()

// console.log(Module)

// Revealing Module Pattern
// var Module = (function(){
//     var name ="Some Name"

//     var email ="some@email.com"

//     var privateMethod = function(){

//     }

//     var someMethod = function(){

//     }

//     var anotherMethod = function(){

//     }

//     return {
//         someMethod : someMethod,
//         anotherMethod: anotherMethod
//     }
// })()

// console.log(Module)

// Accessing Private Methods

var Module = (function(){

    var privateMethod = function(message){
        console.log(message)
    }

    var publicMethod = function(text){
        privateMethod(text)
    }

    return {
        publicMethod : publicMethod
    }

})()

Module.publicMethod("Calling private Method")