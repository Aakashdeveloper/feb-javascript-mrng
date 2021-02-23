for
while loop
do while loop
for of
for in (objects)
///////

for> generate series of value or iterate

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ["Delhi", "London", "Hongkong"]
for(i=0;i<city.length;i++){ 
    console.log(city[i])
}


var city = ["Delhi", "London", "Hongkong",['Red','Yellow','Green'], "Pune", "Boston","Mumbai"]

for(i=0;i<city.length;i++){ 
    console.log(city[i])
}

Delhi
VM204:4 London
VM204:4 Hongkong
VM204:4 (3) ["Red", "Yellow", "Green"]
VM204:4 Pune
VM204:4 Boston
VM204:4 Mumbai
undefined



for(i=0;i<city.length;i++){ 
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
    
}

Delhi
VM215:7 London
VM215:7 Hongkong
VM215:4 Red
VM215:4 Yellow
VM215:4 Green
VM215:7 Pune
VM215:7 Boston
VM215:7 Mumbai


//////////////
while
////////////
var i = 10;
while(i<5){
    console.log(i);
    i++
}

/////////////
Do while
///////////
var i = 10;
do{
    console.log(i);
    i++
}
while(i<5)

//////////////
for of 
//////////

var city = ["Delhi", "London", "Hongkong"]

for(mycity of city){
    console.log(mycity)
}


var city = ["Delhi", "London", "Hongkong",['Red','Yellow','Green'], "Pune", "Boston","Mumbai"];
for(mycity of city){
    if(Array.isArray(mycity)){
        for(colors of mycity){
            console.log(colors)
        }
    }else{
        console.log(mycity)
    }
}


