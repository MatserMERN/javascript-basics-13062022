// try {
//     // code that may or may not throws error
// }
// catch {
//     // code to be executed if an error occurs
// }
// finally {
//     // code to be executed regardless of an error occurs or not
// }
//var output = getMessage("Hello", "Scott")

try {
    var output = getMessage("Hello", "Scott")
} catch(ex) {
    console.log(ex)
    console.log(ex.name)
    console.log(ex.message)
}

try {
    eval("alert('Hey you'")
} catch(ex) {
    console.log(ex)
    console.log(ex.name)
    console.log(ex.message)
}

try {
    var studentCount = 2 // getStudent(101).count()
    if(studentCount >1){
        throw {
            id: 101,
            message: "Duplicate records found"
        }
    } 
} catch(ex){
    console.log(ex)
}