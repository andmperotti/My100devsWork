//Create a constructor with 4 properties and 3 methods
function Pizza(customerCrust, customerSize, customerSauce, customerToppings){
    this.crust = customerCrust;
    this.size = customerSize;
    this.sauce = customerSauce;
    this.toppings = customerToppings;
    this.order = function(){
        console.log('hey Tony gimme the pizza!')
    };
    this.like = function(){
        console.log("hey Tony that was some good pizza")
    };
    this.hate = function(){
        console.log("hey Tony that pizza could have been better")
    }
}