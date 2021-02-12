var city = "LoNdon"
city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"

var city = "LoNdon"
city.length
6
city[0]
"L"
city[1]
"o"
city[city.length-1]
"n"

var city = "  Amsterdam "
city.length
12
city.trim()
"Amsterdam"

var city = "  Amsterdam . "
city.trim()
"Amsterdam ."

JavaScript is case sensitive
var color="Red"
var color1="red"
undefined
color == color1
false
color === color1
false
color.toLowerCase()==color1.toLowerCase()
true


var city = "LoNdon"
undefined
city.charAt(0)
"L"
city.charAt(4)
"o"
city.charAt(10)
""
city.charAt(2)
"N"

var city = "loNdOn"

var city = "loNdOn"
undefined
city.slice(1)
"oNdOn"
city.slice(2)
"NdOn"
city.slice(3)
"dOn"
city.slice(1,3)
"oN"
city.slice(1,4)
"oNd"

var city = "loNdOn"
undefined
city.charAt(0).toUpperCase()
"L"
city.slice(1).toLowerCase()
"ondon"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"London"


var city  = "Amsterdam"

slice(start,end?)
substring(start,end?)
substr(start,length)

city.slice(1)
"msterdam"
city.substring(1)
"msterdam"
city.substr(1)
"msterdam"
city.slice(1,4)
"mst"
city.substring(1,4)
"mst"
city.substr(1,4)
"mste"

var city  = "Amsterdam"
undefined
city.slice(-1)
"m"
city.substring(-1)
"Amsterdam"
city.substring(-2)
"Amsterdam"
city.slice(-2)
"am"
city.slice(-1,-2)
""
city.substring(-1,-2)
""
city.substring(1,-2)
"A"
city.substring(1,-3)
"A"
city.substring(2,-3)
"Am"
city.substring(-3,2)
"Am"
city.slice(1,-2)
"msterd"
city.slice(-2,1)
""
city.slice(-2,-3)
""


var a = "i am learning javascript"
a.replace('javascript','JS')
"i am learning JS"
var a = "Js i am learning javascript"
undefined
var a = "javascript i am learning javascript"
undefined
a.replace('javascript','js')
"js i am learning javascript"
a.replace(/javascript/g,'js')
"js i am learning js"


var city = "  Amsterdam . "
var city = "  Amsterdam . "
undefined
city.replace(' ','')
" Amsterdam . "
city.replace(/ /g,'')
"Amsterdam."

var a = "Hi "
var b = "JavaScript"
var c=" Code"
undefined
a.concat(b)
"Hi JavaScript"
a.concat(b,c)
"Hi JavaScript Code"
c.concat(a,b)
" CodeHi JavaScript"

var a = "Hi"
undefined
a.fixed(1)
"<tt>Hi</tt>"
a.fixed()
"<tt>Hi</tt>"
a.fixed(7867678)
"<tt>Hi</tt>"
a.strike()
"<strike>Hi</strike>"
a.bold()
"<b>Hi</b>"
a.repeat(4)
"HiHiHiHi"