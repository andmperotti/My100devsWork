//Create a dog object that has four properties and three methods
let rylee = {
}
rylee.name = "Rylee";
rylee.age = 9;
rylee.color = "brown";
rylee.breed = "yorkshire terrier";
rylee.wagTail = function(){
    console.log(`${this.name} wags tail`)
}
rylee.licks = function(){
    console.log(`${this.name} licks your hands`)
}
rylee.bark = function(){
    console.log(`${this.name} is barking`)
}

function Dog(name, age, color, breed){
    this.name = name,
    this.age = age,
    this.color = color, 
    this.breed = breed,
    this.wagTail = function(){
        console.log(`$this.name} wags tail`)
    },
    this.licks = function(){
        console.log(`${this.name} licks your hands`)
    },
    this.bark = function(){
        console.log(`${this.name} is barking`)
    }
}
