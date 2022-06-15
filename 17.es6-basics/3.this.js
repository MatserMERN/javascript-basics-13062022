// var employee = {
//     id:1,
//     greet: function(){
//         console.log(this.id)
//     }
// }

// employee.greet()

// use Settimeout

// var employee = {
//     id:1,
//     greet: function(){
//         setTimeout(function(){
//             console.log(this)
//             console.log(this.id)
//         }, 2000)
//     }
// }

// employee.greet()

// self variable

// var employee = {
//     id:1,
//     greet: function(){
//         var self = this
//         setTimeout(function(){
//             console.log(self)
//             console.log(self.id)
//         }, 2000)
//     }
// }

// employee.greet()

// bind 
// var employee = {
//     id:1,
//     greet: function(){
//         setTimeout(function(){
//             console.log(this)
//             console.log(this.id)
//         }.bind(this), 2000)
//     }
// }

// employee.greet()

// fat arrow function

var employee = {
    id:1,
    greet: function(){
        setTimeout(() =>{
            console.log(this)
            console.log(this.id)
        }, 2000)
    }
}

employee.greet()

