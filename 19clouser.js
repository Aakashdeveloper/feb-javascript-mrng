// local Scope
// global Scope
/*
var a = 10
function add(){
    var b = 20
    return a+b
}

console.log(add())
console.log("a>>>",a)
console.log("b>>>",b)

*/

var a = 10 
for(i=0;i<5;i++){
    let b = 20
    console.log(a+b+i)
}

console.log("a>>>",a)
console.log("b>>>",b)


mul(5)(4)(3)

function mul(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}

mul(5,4,3)
function mul(a,b,c){
    return a+b+c
}