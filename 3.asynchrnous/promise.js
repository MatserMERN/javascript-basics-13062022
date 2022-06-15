// function printNumbers(){
//     return new Promise(function(resolve, reject){
//            setTimeout(function(){
//                 resolve(2)
//             }, 3000)
//     })
// }

// console.log(1)
// printNumbers()
// .then(function(data){
//     console.log(data)
//     console.log(3)
//     console.log(4)
// }).catch(function(ex){
//     console.log(ex)
// })



// function getData(){
//     return new Promise(function(resolve, reject){
//           var data = [{value:1}]
//           if(data.length >0){
//               resolve(data)
//           } else {
//               reject("No data")
//           }
        
//     })
// }

// getData()
// .then(function(data){
//     data.push({value:2})
//     return data
// }).then(function(data){
//     console.log(data)
// })
//     .catch(function(ex){
//     console.log(ex)
// })

function getStudents(){
    return new Promise(function(resolve, reject){
        var students = ["Scott", "Adam", "Tuan"]
        if(students.length > 0){
            setTimeout(function(){
                resolve(students)
            }, 3000)
            
        } else {
            reject("No Data available for students")
        }
    })
}

// Students data ia available
// Print "We have got student data"

getStudents()
.then(function(data){
    console.log(data)
    console.log('We have got student data' , data)
})
.catch(function(ex){
    console.log(ex)
})