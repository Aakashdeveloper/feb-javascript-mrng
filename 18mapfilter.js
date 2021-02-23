> map is ues to iterate over the Array
> it always return same length of output as input Array
> it is use to apply logics(sum,mul,divide), return html with data binding

var a = [4,5,3,8,9,43,65,87]

a.map((data)=> {console.log(data)})

a.map((data)=> {return(data)})

a.map((data)=> {return(data)})
(8) [4, 5, 3, 8, 9, 43, 65, 87]
a.map((data)=> {return(data*2)})
(8) [8, 10, 6, 16, 18, 86, 130, 174]
a.map((data)=> {return(`<p>${data}</p>`)})
(8) ["<p>4</p>", "<p>5</p>", "<p>3</p>", "<p>8</p>", "<p>9</p>", "<p>43</p>", "<p>65</p>", "<p>87</p>"]

>  filter is use to filter out the IDBCursorWithValue;
> it may or may not return same length of output Array
> it only return those value for which output is true

var b = [20,34,32,26,67,21,19,32]
b.filter((data)=> {return(data>25)})
(5) [34, 32, 26, 67, 32]
var b = [20,34,32,26,67,21,19,32]
b.map((data)=> {return(data>25)})
(8) [false, true, true, true, true, false, false, true]


var a = [0,1,2,3]
a.map((data)=> {return data*2})
[0, 2, 4, 6]

a.filter((data)=> {return data*2})
 [1, 2, 3]