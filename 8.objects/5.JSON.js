var todo =  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: "false"
}

var student = {
    firstName: "Scott",
    lstName: "Desatnick"
}

var studentString = JSON.stringify(student)

console.log(studentString, typeof studentString)

var studentObject = JSON.parse(studentString)

console.log(studentObject, typeof studentObject)