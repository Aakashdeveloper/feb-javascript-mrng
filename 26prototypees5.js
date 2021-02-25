function human(name){
    this.name=name;
    this.city="London"
}

function robot(name){
    this.name=name;
    this.legs=2;
    this.age=10
}

var john = new human('John')

john
human {name: "John", city: "London"}

human.prototype = new robot()
robot {name: undefined, legs: 2, age: 10}

var alvin = new human('Alvin')

alvin
human {name: "Alvin", city: "London"}

alvin.legs
2
alvin.age
10