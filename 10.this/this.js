console.log(this)

function sample(){
    console.log(this)
}

sample()

var obj = {
    fname: "Scott",
    getName: function(){
        var self = this
        console.log(self)
        self.fname ="Desatnick"
        console.log(self)

        var updateName = function(){
            self.fname="Great Scott"
            console.log(self)
        }

        updateName()
    }
}

obj.getName()