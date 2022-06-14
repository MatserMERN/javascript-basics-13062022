var person1 = {firstName: "Scott", lastName: "Desatnick"}
var person2 = {firstName: "Adam", lastName: "Colson"}
var person3 = {firstName: "Tuan", lastName: "Bui"}

function display(message, city){
    return message + " to " + city + ', Mr. ' + this.firstName + ' ' + this.lastName 
}

//  var displayBind = display.bind(true) // avoid primitive values
// console.log(displayBind("Welcome", "Boston"))

var displayBind = display.bind(person1,"Welcome", "Boston")
console.log(displayBind())

 var displayCall = display.call(person2, "Welcome", "Newyork")
 console.log(displayCall)

 var displayApply = display.apply(person3, ["Welcome", "Hanoi"])
console.log(displayApply)


var obj = {
    fname: "Scott",
    getName: function(){
        console.log(this)
        this.fname ="Desatnick"
        console.log(this)

        var updateName = function(){
            this.fname="Great Scott"
            console.log(this)
        }

          // updateName.bind(this)()
         // updateName.call(this)
        //  updateName.apply(this)

        updateName.bind(obj)()
    }
}

obj.getName()