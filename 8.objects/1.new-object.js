var person = new Object()

person["firstName"]="Scott"
person["lastName"] ="Desatnick"

var cityName = "city"
person[cityName] = "Boston"

person.email = "Scott@ef.com"

person.address = new Object()

person.address.street = "1st Main"
person.address.country = "USA"

Object.defineProperty(person, "age", {
    value: 45,
    writable: false
})

person.age =100

console.log(person)
console.log(person["firstName"])
console.log(person.firstName)
console.log(person["lastName"])
console.log(person["cityName"])
console.log(person["city"])
console.log(person[cityName])
console.log(person.email)

console.log(person.address.street)
console.log(person.address.country)

console.log(person.age)