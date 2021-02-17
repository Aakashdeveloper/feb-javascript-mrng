Date()
"Wed Feb 17 2021 08:19:56 GMT+0530 (India Standard Time)"
var a = new Date();
undefined
a
Wed Feb 17 2021 08:21:21 GMT+0530 (India Standard Time)
a.getDate()
17
a.getDay()
3
a.getMonth()
1
a.getFullYear()
2021

> month start with 0 where 0 is jan and 11 is dec
> day start with 0 as sunday and 1 as monday


var date = new Date()
var month = date.toLocaleString('default',{month:'long'})

month
"February"