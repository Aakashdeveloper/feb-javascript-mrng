//es5
function language(name,country){
    this.name = name;
    this.country=country;
    this.greet=function(){
        return `Say hi to ${country}`
    }
}

var Hindi = new language("Hindi","India")
Hindi
language {name: "Hindi", country: "India", greet: ƒ}
Hindi.greet()
"Say hi to India"

//es6
class language1{
    constructor(name,country){
        this.name = name;
        this.country=country;
    }

    greet=()=>{
        return `Say Hi`
    }
}

var English = new language1('English','UK')
undefined
English
language1 {name: "English", country: "UK", greet: ƒ}
English.greet()
    
"Say Hi"