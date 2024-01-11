//Create a pizza object that has four properties and three methods
let pizza = {
    crust: 'thin',
    pepperoni: true,
    pineapples: false,
    sausage: 'always',
    order: function(){
        console.log(`Ordering a pizza with a ${pizza.crust} crust, ${pizza.pepperoni == true? 'with' : 'without'} pepperoni, ${pizza.pineapples == true? 'with': 'without'} pineapples, and ${pizza.sausage ? 'with':'without'} sausage.`)
    },
    eat: function(){
        console.log("I'm eating the pizza")
    },
    burp: function(){
        if(pizza.sausage == true){
            console.log('Oh that sausage is coming back to me')
        }else if(pizza.pepperoni == true){
            console.log('That pepperoni is affecting me')
        }else{
            console.log('Oh that pizza is coming back')
        }
    }

}
function Pizza(pizzaCrust, pizzaSauce, pizzaSize, pizzaDoneness){
    this.crust = pizzaCrust;
    this.sauce = pizzaSauce;
    this.size = pizzaSize;
    this.doneness = pizzaDoneness;
    this.order = function(){
        console.log(`Hello I'd like to order a ${this.crust} crust pizza, with ${this.sauce} amount of sauce, ${this.size} size, and can you cook it a ${this.doneness} level`)
    }
}
let drews = new Pizza('normal', 'heavy', 'extra', 'well')
