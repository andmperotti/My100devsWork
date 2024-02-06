// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }







// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

class Contractor{
    constructor(name, role){
        this._name = name;
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    sayHello(){
        console.log(`Hello my name is ${this.name} and I'm a ${this.role} at 100devs`)
    }
}

class Front extends Contractor{
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech //somewhat polymorphic
    }
    get tech(){
        return this._tech
    }
    sayHello(){ //polymorphism; overwriting sayHello
        console.log(`Hello my name's ${this.name}, my role at 100devs is ${this.role}, and I'm a specialist in ${this.tech}`)
    }
}

class Back extends Contractor{
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech //somewhat polymorphic
    }
    get tech(){
        return this._tech
    }
    sayHello(){ //polymorphism; overwriting sayHello
        console.log(`Hello my name's ${this.name}, my role at 100devs is ${this.role}, and I'm a specialist in ${this.tech}`)
    }
}

let bob = new Contractor('Bob','Front-end')
let simba = new Front('Simba','Front-end','React')
let machi = new Back('The Machine','Back-end','Node')

let agency = [bob,simba,machi]

for(person of agency){
    person.sayHello()
}


//encapsulation is grouping together information and actions into an object; properties and methods
//abstraction would be to hide the non essentials to the user, so I believe here it's referring to having constants and those are accessed with getters and changed with setters however we don't use them in this code. Yes the properties were abstracted so instanceName.name cannot access and therefore change a value it shouldn't.
//inheritance is taking conctractor and creating front and back by using contractor at the superclass and inheritting specific properties and methods, although we didn't inherit any methods
//polymorphism refers to making the subclasses specific to their types, so front is a type and it's different that contractor so the say hello method is different than the superclasses sayhello function, same goes for the back's sayhello function.

console.log(machi.name)
machi.name = 'drew'
console.log(machi.name)
//in regards to abstraction, we have a getter but not a setter therefore trying to change the value name points to in the machi instance will not work.


//Not sure why Leon used this._name for example in the methods after we had getters, it's accessible using this.name now that the getter exists.