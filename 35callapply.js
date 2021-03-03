var person={
    fullName:function(){
        return this.firstname+" "+this.lastname
    }
}

var person1={
    firstname:'John',
    lastname:'Dave'
}

person.fullName.call(person1)
"John Dave"
person.fullName.apply(person1)
"John Dave"

var person={
    fullName:function(city,country){
        return this.firstname+" "+this.lastname+" "+city+" "+country
    }
}

person.fullName.call(person1,['Delhi','India'])
"John Dave Delhi,India undefined"
person.fullName.apply(person1,['Delhi','India'])
"John Dave Delhi India"
person.fullName.call(person1,'Delhi','India')
"John Dave Delhi India"