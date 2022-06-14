var students = ["Scott", "Adam", "Tuan"]

console.log('******* Using for loop*******')
// for loop
for(var i=0; i<students.length; i++){
    console.log(i, students[i])
}

// forEach
console.log('******* Using forEach*******')
students.forEach(function(value, index){
    console.log( index, value)
})

// map
console.log('******* Using map*******')
students.map(function(value, index){
    console.log( index, value)
})

console.log('******* Using forEach vs map*******')
var studentsOne = students.forEach(function(value, index){
                        return value
                  })

var studentsTwo = students.map(function(value, index){
                        return {
                            id: index,
                            name: value
                        } 
                  })

console.log(studentsOne)
console.log(studentsTwo)

// for.. in
for(var index in students){
    console.log(index)
}

// for.. of
for(var value of students){
    console.log(value)
}
// for with index and value
for([index, value] of Object.entries(students)){
    console.log(index, value)
}