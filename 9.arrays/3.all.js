var data = [
            1,
            "Scott",
            true,
            null, 
            undefined,
            {
                name: 'Scott'
            },
            function(name){
                return name
            },
            ["Red", "Blue", "Yellow"]
]

console.log(data)

// Access the function 
// pass object name as parameter to the function
// finally print name

console.log(data[6](data[5].name))

// Access the function 
// pass object name as parameter to the function
// Access array value Blue
// Finally print "Scott Likes Blue"

console.log(data[6](data[5].name) + " Likes " + data[7][1])