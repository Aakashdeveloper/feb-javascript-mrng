> localStorage
    > Presistent Storage
    > we have to remove manully
    > save wrt to browser

localStorage.setItem('tripid',3433)
undefined
localStorage.getItem('tripid')
"3433"
localStorage.removeItem('tripid')
undefined
localStorage.setItem('tripid',3433)
undefined
localStorage.removeItem('tripid')
undefined
localStorage.removeItem('tripid')
undefined
localStorage.setItem('tripid',3433)
undefined

> sessionStorage
    # Non Presistent Storage
    # remove as soon as you close tab/remove manully
    # save wrt to tab

sessionStorage.setItem("accessid","4r44eer")
undefined
sessionStorage.getItem("accessid")
"4r44eer"
sessionStorage.removeItem("accessid")

>Cookies
    # Save wrt to website
    # Expire in time

document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.1952476216.1613357395; _gat_gtag_UA_131256843_1=1"
document.cookie="city=London"
"city=London"
document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.1952476216.1613357395; city=London"
document.cookie="mydata=test; expires=Tue, 16 Feb 2021 01:00:00 UTC"