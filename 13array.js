Array is collection of homogenious data & hetrogenious
var a = ['a','weg','gf34t'] > array of strings 
var b = [1,43,35,36,463] > array of Number
var c = [true,false,false,true] > array of Boolean

var d = [33,534,"35","#5","ge",34,true,234] 

var city = ['Delhi','London','Amsterdam','Paris']
typeof(city)
"object"
city.length
4
city[0]
"Delhi"
city[1]
"London"
city[city.length-1]
"Paris"

var city = ['Delhi','London','Amsterdam','Paris']
undefined
city.push("Dubai")
5
city
(5) ["Delhi", "London", "Amsterdam", "Paris", "Dubai"]
city.push("Mumbai")
6
city
(6) ["Delhi", "London", "Amsterdam", "Paris", "Dubai", "Mumbai"]
var city = ["Delhi", "London", "Amsterdam", "Paris", "Dubai", "Mumbai"]
city.pop()
"Mumbai"

var city = ["Delhi", "London", "Amsterdam", "Paris", "Dubai", "Mumbai"]
city.pop(2)
"Mumbai"
var city = ["Delhi", "London", "Amsterdam", "Paris", "Dubai", "Mumbai"]
city.pop(3)
"Mumbai"
city.pop(3)
"Dubai"
city.pop(5)
"Paris"
city.pop(32)
"Amsterdam"
city
(2) ["Delhi", "London"]

var city = ["Delhi", "London", "Amsterdam", "Paris", "Dubai", "Mumbai"]

undefined
city.shift()
"Delhi"
city.shift(32)
"London"
city.unshift("Helsinki")
5
city
(5) ["Helsinki", "Amsterdam", "Paris", "Dubai", "Mumbai"]


push > add value at the end of array
unshift > add value at the begining of the array
pop> remove the last value
shift> remove the first value

var city = ["Delhi", "London", "Amsterdam", "Paris", "Dubai", "Mumbai"]
undefined
city.slice(1)
(5) ["London", "Amsterdam", "Paris", "Dubai", "Mumbai"]
city.slice(2,4)
(2) ["Amsterdam", "Paris"]
city.slice(2,5)
(3) ["Amsterdam", "Paris", "Dubai"]


var city = ["Delhi", "London", "Amsterdam", "Paris", "Dubai", "Mumbai"]
city.splice(2,0,'Hongkong','Mumbai')
[]
city
(8) ["Delhi", "London", "Hongkong", "Mumbai", "Amsterdam", "Paris", "Dubai", "Mumbai"]
city.splice(3,2)
(2) ["Mumbai", "Amsterdam"]
city
(6) ["Delhi", "London", "Hongkong", "Paris", "Dubai", "Mumbai"]
city.slice(3,1,'Pune','Boston')
[]
city
(6) ["Delhi", "London", "Hongkong", "Paris", "Dubai", "Mumbai"]
city.splice(3,1,'Pune','Boston')
["Paris"]
city
(7) ["Delhi", "London", "Hongkong", "Pune", "Boston", "Dubai", "Mumbai"]


var a = ['a','b','c']
var b = [1,2,3]
undefined
a+b
"a,b,c1,2,3"
a.concat(b)
(6) ["a", "b", "c", 1, 2, 3]
var c = [3,4,5]
undefined
a.concat(c,b)
(9) ["a", "b", "c", 3, 4, 5, 1, 2, 3]
c.concat(a,b)
(9) [3, 4, 5, "a", "b", "c", 1, 2, 3]

var city = ["Delhi", "London", "Hongkong",['Red','Yellow',['Bmw','Audi','Merc'],'Green'], "Pune", "Boston", "Dubai", "Mumbai"]
city.length
8
city[3]
(4) ["Red", "Yellow", Array(3), "Green"]
city[3][1]
"Yellow"
city[3][2]
(3) ["Bmw", "Audi", "Merc"]
city[3][2][2]
"Merc"

var city = ["Delhi", "London", "Hongkong",['Red','Yellow',['Bmw','Audi','Merc'],'Green'], "Pune", "Boston", "Dubai", "Mumbai"]

city.flat()
(11) ["Delhi", "London", "Hongkong", "Red", "Yellow", Array(3), "Green", "Pune", "Boston", "Dubai", "Mumbai"]
city.flat(2)
(13) ["Delhi", "London", "Hongkong", "Red", "Yellow", "Bmw", "Audi", "Merc", "Green", "Pune", "Boston", "Dubai", "Mumbai"]

var a = [1,'a',true,'A','c',3,false,'B']
undefined
a.sort()
(8) [1, 3, "A", "B", "a", "c", false, true]
var a = [1,'a',true,'A','c',3,false,'B','Z','q']
undefined
a.sort()
(10) [1, 3, "A", "B", "Z", "a", "c", false, "q", true]

a.reverse()
(10) [true, "q", false, "c", "a", "Z", "B", "A", 3, 1]
a.indexOf('c')
3
a.indexOf(3)
8
a.indexOf(10)
-1
a.indexOf('f')
-1

var a = "hi"
var b = ["hi"]

Array.isArray(a)
false
Array.isArray(b)
true
