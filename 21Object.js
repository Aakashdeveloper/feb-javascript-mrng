var moviename = "Avengers";
var movierating = 4.5
var movielang = "Eng"

var moviename1 = "Jab We Met";
var movierating1 = 4.7
var movielang1 = "Hindi"


var movies = {
    name:'Avengers',
    rating:4.5,
    lang:'Eng'
}
undefined
typeof(movies)
"object"
movies.name
"Avengers"
movies.rating
4.5
movies.lang
"Eng"
movies.rating= 4.3
4.3
movies
{name: "Avengers", rating: 4.3, lang: "Eng"}
movies.year="2018"
"2018"
movies
{name: "Avengers", rating: 4.3, lang: "Eng", year: "2018"}
delete movies.lang
true
movies
{name: "Avengers", rating: 4.3, year: "2018"}

var movies = {
    name:'Avengers',
    rating:4.5,
    lang:'Eng'
}
undefined
movies['name']
"Avengers"
movies['lang']
"Eng"
movies['year']="2018"
"2018"
movies
{name: "Avengers", rating: 4.5, lang: "Eng", year: "2018"}
delete movies['rating']
true

//////////////
var calc={
    sum:function(a,b){return a+b},
    sub:(a,b) => {return a+b}
}
undefined
calc.sum(1,2)
3
calc.sub(4,2)
6


var dbQuery = {
    find:(table)=> {return `Select * from ${table}`},
    insert:(table,data) => {return `Insert into ${table} name,city Values (${data.name}, ${data.city})`}
}
undefined
dbQuery.find('Emp')
"Select * from Emp"
dbQuery.insert('Emp',{name:'John',city:'Delhi'})
"Insert into Emp name,city Values (John, Delhi)"