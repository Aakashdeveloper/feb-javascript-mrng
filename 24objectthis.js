/*var firstname = "Michal";
var lastname = "Peter";

var sayHi = {
    firstname:'Zoe',
    lastname:'lisa',
    greet:function(){
        return `Say hi to ${firstname} ${lastname}`
    }
}

console.log(sayHi.greet())
Say hi to Michal Peter*/
/*
var firstname = "Michal";
var lastname = "Peter";

var sayHi = {
    firstname:'Zoe',
    lastname:'lisa',
    greet:function(){
        return `Say hi to ${this.firstname} ${this.lastname}`
    }
}

console.log(sayHi.greet())
Say hi to Zoe lisa

//constructor//
var bob = new Object();
bob.age = 10;
bob.city = "NewYork";
bob.setAge= function(newAge){
    this.age = newAge
}

var bob = new Object();
bob.age = 10;
bob.city = "NewYork";
bob.setAge= function(newAge){
    this.age = newAge
}
ƒ (newAge){
    this.age = newAge
}
bob.age
10
bob.setAge(29)
undefined
bob.age
29*/


var age = 30
var bob = new Object();
bob.age = 10;
bob.city = "NewYork";
bob.setAge= function(newAge){
    this.age = newAge
}

bob.setAge(50)

console.log("bob.age >>>",bob.age)
console.log("age >>>",age)

var tony = new Object();
tony.age = 10;
tony.city = "NewYork";
tony.setAge= function(newAge){
    this.age = newAge
}



var createAge = function(newAge){
    this.age = newAge
}

var bob = new Object();
bob.age = 10;
bob.city = "NewYork";
bob.setAge=createAge

var tony = new Object();
tony.age = 10;
tony.city = "NewYork";
tony.setAge=createAge