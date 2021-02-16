if(condition)
//do something
else{
//do something
}

var a = 8768687
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 8768687 is odd



var name ="Bhumika"

if(name=="Priya"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="Bhumika"){
    console.log(`Hi ${name} you are Super admin`)
}else if(name=="Hitesh"){
    console.log(`Hi ${name} you are user`)
}else{
    console.log(`Hi ${name} i dont know you`)
}
Hi Bhumika you are Super admin

var role ="Admin";
var name ="Ankit"

if(role=="Admin"){
    if(name=="John"){
        console.log(`Hi ${name} you are admin`)
    }else if(name=="Bhumika"){
        console.log(`Hi ${name} you are Super admin`)
    }else{
        console.log(`Hi ${name} you are not admin`)
    } 
}else{
    if(name=="Aakash"){
        console.log(`Hi ${name} you are user`)
    }else if(name=="Bhumika"){
        console.log(`Hi ${name} you are Super user`)
    }else{
        console.log(`Hi ${name} you are not user`)
    } 
}

var name ="Tina"
if(name=="John"||name=="Tine"){
    console.log(`Hi ${name}`)
}else{
    console.log(`Hi ${name} i dont know you`)
}

var name ="Tina"
var role ="Admin"
if(name=="Tina"&&role=="Admin"){
    console.log(`Hi ${name}`)
}else{
    console.log(`Hi ${name} i dont know you`)
}

var a = 1;
if(a){
    console.log(`Hi`) 
}else{
    console.log(`Bie`)
}

"hi"

var a = 0;
if(a){
    console.log(`Hi`) 
}else{
    console.log(`Bie`)
}

"bie"
var a = -1;
if(a){
    console.log(`Hi`) 
}else{
    console.log(`Bie`)
}

"hi"

///////////
Ternary (single line if else)
/////
var a = 10
a>10?"Hi":"Bie" 
"Bie"

var a = 9
a>10?"Hi":"Bie" 
"Bie"

var a = 11
a>10?"Hi":"Bie" 
"Hi"

var a = 10
a>10?a+1:a-1
"Bie"

var a = 10
a>10?a+1:a-1
9

///wrong
var a = 10
a>10?a+1:a-1?"Hi":"Bie"
"Hi"
var a = 11
a>10?a+1:a-1?"Hi":"Bie"
12
var a = 9
a>10?a+1:a-1?"Hi":"Bie"
"Hi"
