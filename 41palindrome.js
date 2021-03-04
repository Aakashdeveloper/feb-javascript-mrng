var palindrome = (data) => {
    var rem,temp,final=0;
    temp=data;
    while(data>0){
        rem = data%10
        data = parseInt(data/10)
        final = final*10+rem
    }
    if(final==temp){
        console.log(`Number ${temp} is palindrome`)
    }else{
        console.log(`Number ${temp} is not a palindrome`)
    }
}

palindrome(1343)
Number 1343 is not a palindrome

palindrome(13431)
VM146:10 Number 13431 is palindrome

