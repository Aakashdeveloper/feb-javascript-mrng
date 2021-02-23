/*function sayhi(){
    console.log(`Hi to Func`)
}

sayhi()
*/
///iffi
(function(){
    console.log(`Hi to Func`)
}())

// generator
function loop(userInput){
    for(i=0;i<userInput;i++){
        console.log(i)
    }
}

function * loop(userInput){
    for(i=0;i<userInput;i++){
        yield i
    }
}

var data = loop(5)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: undefined, done: true}








