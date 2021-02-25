class geo{
    constructor(){
        this.lat=43.22,
        this.long=32.11
    }
}

class language1 extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name = name;
        this.country=country;
    }

    greet=()=>{
        return `Say Hi`
    }
}

