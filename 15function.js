function
method
arrow function
generators
IFFI

////////
var a = 10
var b = 20
a+b
30

function add(a,b){
    return a+b
}
add(1,2)


function isEven(userInput){
    var output;
    if(userInput%2==0){
        output=`${userInput} is even`
    }else{
        output=`${userInput} is odd`
    }
    return output
}
undefined
isEven(10)
"10 is even"
isEven(11)
"11 is odd"
isEven('j')
"j is odd"


var a = "hi"
undefined
isNaN(a)
true
var a = 10
undefined
isNaN(a)
false

function isEven(userInput){
    var output = ''
    //if(isNaN(userInput)==false)
    if(!isNaN(userInput)){
        if(userInput%2==0){
            output=`${userInput} is even`
        }else{
            output=`${userInput} is odd`
        }
    }else{
        output=`Invalid Input`
    }
    
    return output
}