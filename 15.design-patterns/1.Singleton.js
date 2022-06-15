// function DBServer(){
//     console.log('Connection is created')
// }

// var dBServerObj1 = new DBServer()
// console.log(dBServerObj1)
// var dBServerObj2 = new DBServer()
// console.log(dBServerObj2)
// var dBServerObj3 = new DBServer()
// console.log(dBServerObj3)
// var dBServerObj4 = new DBServer()
// console.log(dBServerObj4)

var DBServer = (function(){
    
    var connection = null

    var createConnection = function(){
        var obj = Object.create(null)
        console.log('DB Connection Object is created')
        return obj
    }

    var getConnection = function(){
        if(!connection) {
            connection = createConnection()
        }
        return connection
    }

    return {
        getConnection : getConnection
    }

})()

console.log(DBServer.getConnection())
console.log(DBServer.getConnection())
console.log(DBServer.getConnection())
console.log(DBServer.getConnection())

// console.log(DBServer.createConnection())
// console.log(DBServer.createConnection())
// console.log(DBServer.createConnection())
// console.log(DBServer.createConnection())
