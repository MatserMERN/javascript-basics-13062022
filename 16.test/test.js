// console.log(multiply(2)(3)(4)) // 24

// function multiply(x){
//     return function(y){
//         return function(z){
//             return x*y*z
//         }
//     }
// }


// var a =10
// var b = a
//     a = 20
// console.log(a)
// console.log(b)

// // 20 , 10
// // 20, 20

// var a = [1,2]
// var b = a
// a.push(3)
// console.log(a)
// console.log(b)

// // [1,2,3]

// var a = [1,2]
// var b = a
// a =[1,2,3]
// console.log(a)
// console.log(b)

// var name = 1 + 2 + "Scott" + 3 + 4

// console.log(name)

// error
// 12Scott34
// NaN
// 3Scott7
// 3Scott34

// var output = (function(x){
//     delete x
//     return x
// })(0)

// console.log(output)

// // 0
// // undefined

// var output = (function(x){
//     delete x
//     return x
// })({a:1})

// console.log(output)

// // undefined

// var output = (function(x){
//     delete x.a
//     return x
// })({a:1})

// console.log(output)

// How to empty an array
//var array = ['a', 'b', 'c', 'd', 'e', 'f']

// Method1
// array.forEach(function(){
//     array.pop()
//     array.pop()
//     array.pop()
// })

// Method2
//array =[]

//Method3
//array.length =0

//Method4
//array.splice(0,array.length)

//Method5
// var length =array.length
// for(var i=0; i<length; i++){
//     array.pop()
// }

//console.log(array)

// ternary operator 

// var a =11

// var message = a>10 ? "A is huge Number" : "A is small number"

// console.log(message)

// console.log(isEven(3)) // false
// console.log(isEven(6)) // true
// console.log(isEven(7)) // false

// function isEven(a){
//     if(a%2===1){
//         return false
//     } else {
//         return true
//     }
// }

// function isEven(a){
//     return (a%2==1) ? false : true
// }

// function isEven(a){
//     return a%2===0
// }


// console.log(getExtension("resume.doc")) // doc
// console.log(getExtension("hyderabad.pdf")) // pdf
// console.log(getExtension("notepad")) // false

// // function getExtension(filename){
// //     var docs = filename.split(".")
// //     if(docs.length >1){
// //         return docs[1]
// //     } else {
// //         return false
// //     }
// // }

// function getExtension(filename){
//     return filename.split(".").length>1 ? filename.split(".")[1] 
//                                         : false
// }

// function one(){
//     return {
//         value:1
//     }
// }

// function two(){
//     return 
//     {
//         value:1
//     }
// }

// console.log(one())
// console.log(two())


//  var a =10

// console.log(a)

function sample(){
    'use strict'
     var a =1
     console.log(this)
     return 1
}

sample()

// var a =2
// sample()
// console.log(a)