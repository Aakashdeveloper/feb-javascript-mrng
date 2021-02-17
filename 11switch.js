//multiple condition and multiple Output;(if else)
//one condition multiple output use(switch)
//one condition one output(ternary)

var name = "Eva"

switch(name){
    case 'Aakash':
        console.log('You are user')
        break;
    case 'Eva':
        console.log('You are Admin')
        break;
    default:
        console.log('I Dont know')
}

switch(new Date().getDay()){
    case 0:
        console.log('Today is sunday');
        break;
    case 3:
        console.log('Today is Wednesday');
        break;
    default:
        console.log('Wrong Input');
}