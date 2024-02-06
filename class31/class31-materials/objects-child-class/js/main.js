//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a noise.`)
    }
}

class giraffe extends Animal{
    constructor(name, height){
        super(name);
        this.height = height
    }
    smacksHead(){
        console.log(`${this.name} swings their head 20 feet down and smacks you`)
    }
}
