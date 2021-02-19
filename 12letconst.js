var > we can redeclare and reassign
let > we cannot redeclare but can reassign
const > we cannot redeclare nor reassign

var a = 10

var a => decalre
a =10 => assignment

> var a = 10
undefined
> a
10
> a=11
11
> a
11
> var a = 12
undefined
> a
12
> let b = 10
undefined
> b 
10
> let b = 11
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 11
11

> const c = 10
undefined
> c 
10
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c =11
Uncaught TypeError: Assignment to constant variable.
> 


