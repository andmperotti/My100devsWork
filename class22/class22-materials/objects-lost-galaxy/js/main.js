//Create a mouse object that has four properties and three methods
let mouse = {
    name: 'sqeaky',
    color: 'brown', 
    age: 3,
    weight: 1,
    run: ()=>console.log(`${mouse.name} runs`),
    eat: ()=> console.log(`${mouse.name} eats`),
    poop: ()=>console.log(`Uh Oh ${mouse.name} poops`)
}

function Mouse(brand, color, buttons){
    this.brand = brand;
    this.color = color; 
    this.buttons = buttons;
}
let drewsMouse = new Mouse('logitech', 'black', 7)