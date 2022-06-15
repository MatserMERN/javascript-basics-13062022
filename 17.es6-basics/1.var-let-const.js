//var - function scoped
// function sample(){
//     var foo ="blue"
//     console.log(foo)

//     if(true){
//         console.log(foo)
//     }
// }

// sample()
// console.log(foo)

// let , const - block scoped
function display(){
    if(true){
        var foo ="hello"
        let bar = "how are you ?"
        const baz = "I am fine"

        console.log(foo)
        console.log(bar)
        console.log(baz)
    }

    console.log(foo)
   // console.log(bar)
   // console.log(baz)
}

// display()

// for(var i=0; i<3; i++){
//     console.log(i)
// }
// console.log(i)

// for(let i=0; i<3; i++){
//     console.log(i)
// }
// console.log(i)



function sample(){
    let foo=1
        foo =100
   // let foo = 101 // Identifier 'foo' has already been declared 
   console.log(foo)

   const bar = 20 // const declarations must be initialized
      //   bar = 30 // TypeError: Assignment to constant variable
console.log(bar)
    
}

sample()

const message ="Hello"
message ="Hey"
console.log(message)

const names = ["Scott", "Adam", "Tuan"]
names.push("Uma")
console.log(names)