DOM
document object model

id
tagname
classname

document.getElementsByTagName('h1')
HTMLCollection [h1]
document.getElementsByTagName('h1')[0]
<h1>​I'm AAKASH HANDA​</h1>​
document.getElementsByTagName('h1')[0].innerText
"I'm AAKASH HANDA"
document.getElementsByTagName('h1')[0].innerText="I m from nareshit"
"I m from nareshit"
document.getElementsByTagName('h1')[0].style.color="red"
"red"
document.getElementsByTagName('h1')[0].style.visibility="hidden"
"hidden"
document.getElementsByTagName('h1')[0].style.visibility="visible"
"visible"

document.getElementsByClassName('scroll')
HTMLCollection(5) [a.scroll, a.scroll, a.scroll, a.scroll, a.scroll]
document.getElementsByClassName('scroll')[0].innerText="Tech"
"Tech"