RegExp
Regular Expression
^$

var a = "hi"
^([a-z])$

a.match("^([a-z])$")

var a = "hi"
undefined
a.match("^([a-z])$")
null
var a = "h"
undefined
a.match("^([a-z])$")
(2) ["h", "h", index: 0, input: "h", groups: undefined]
var a = "hi"
undefined
a.match("^([a-z]{2})$")
(2) ["hi", "hi", index: 0, input: "hi", groups: undefined]
var a = "hii"
undefined
a.match("^([a-z]{2})$")
null
a.match("^([a-z]{2,5})$")
(2) ["hii", "hii", index: 0, input: "hii", groups: undefined]
var a= "Hii"
undefined
a.match("^([a-z]{2,5})$")
null
a.match("^([A-Za-z]{2,5})$")
(2) ["Hii", "Hii", index: 0, input: "Hii", groups: undefined]
var a= "hIi"
undefined
a.match("^([A-Za-z]{2,5})$")
(2) ["hIi", "hIi", index: 0, input: "hIi", groups: undefined]


var a = "6Ia"
a.match("^([0-5A-Ha-z]{2,5})$")
null
var a = "4aB"
a.match("^([0-5A-Ha-z]{2,5})$")
(2) ["4aB", "4aB", index: 0, input: "4aB", groups: undefined]

var a = "4aB$"
a.match("^([0-5A-Ha-z]{2,5})$")
null
var a = "4aB$"
a.match("^([0-5A-Ha-z$]{2,5})$")
(2) ["4aB$", "4aB$", index: 0, input: "4aB$", groups: undefined]

var num = 837847979
num.match("^([0-9]{10})$")

var num = 837847979
num.match("^([0-9]{10})$")
VM232:2 Uncaught TypeError: num.match is not a function

num.toString()
"837847979"

num.toString().match("^([0-9]{10})$")
null
var num = 8378479790
num.toString().match("^([0-9]{10})$")
(2) ["8378479790", "8378479790", index: 0, input: "8378479790", groups: undefined]


var email = "a@a.com";
email.match("^([a-zA-Z0-9$]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]

var email = "a@.com";
email.match("^([a-zA-Z0-9$]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null

var email = "a@a.";
email.match("^([a-zA-Z0-9$]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null