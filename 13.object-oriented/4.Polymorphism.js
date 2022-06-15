/*
    ? Polymorphism - function existing in several forms
    ! function overloading - same function with different parameters - Not possible in JS
    ? function overriding - same function with or without parameters but differnt behaviour
*/

//Shape

function Shape(){

}

Shape.prototype.draw = function(){
    return "I am a Generic Shape"
}

//Circle

function Circle(){

}

Circle.prototype = new Shape()

Circle.prototype.draw = function(){
    return "I am Circle"
}

//Square

function Square(){

}

Square.prototype = new Shape()

Square.prototype.draw = function(){
    return "I am Square"
}

//Triangle

function Triangle(){

}

Triangle.prototype = new Shape()

// Triangle.prototype.draw = function(){
//     return "I am Triangle"
// }

var shape = new Shape()
console.log(shape.draw())

var circle = new Circle()
console.log(circle.draw())

var square = new Square()
console.log(square.draw())

var triangle = new Triangle()
console.log(triangle.draw())

var shapes = [new Shape(), new Circle(), new Square(), new Triangle()]

shapes.forEach(function(shape){
    console.log(shape.draw())
})