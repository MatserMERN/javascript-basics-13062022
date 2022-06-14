function one(){
    return function two(){
        return function three(){
            return "Welcome to nested functions"
        }
    }
}

console.log(one()()())

var functionOne = one()
console.log(functionOne)

var functionTwo = functionOne()
console.log(functionTwo)

var functionThree = functionTwo()

console.log(functionThree)

function display(){

    var test = function(){
       console.log( "Tested Successfully")
    }

    test()
}

display()