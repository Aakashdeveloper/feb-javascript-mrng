<
>
=
>=
!=

=  (assignment)
== (compare the data)
=== (compare the data & datatype)

var a = 10
var b = "10"

a == b
true
(here we compare the data  and both side value is same)
a === b
false
(here we compare the data & datatype on side 10 is number and other "10" is string)

var a = 1
var b = 2
a==b
false
a===b
false

! negation
var a = true
!a
false

var b = false
!b
true

truthy 
> any number except 0,string, true

falsy
> 0, null,undefined,"",false


var a = 1
!a
false

var b = 0
!b
true

var a = ""
!a
true

var a = "Hi"
!a
false


var a = "Hi"
undefined
!!a
true
!!false === false
true
!!true === true
true


10>15
false
5>4
true
5<4
false
10>=11
false

10 != "10"
false
(as 10 == "10"is true but we are saying it is not equal )

10 !== "10"
true

(as 10 === "10"is false but we are saying same )

comparison operator will always give output as boolean