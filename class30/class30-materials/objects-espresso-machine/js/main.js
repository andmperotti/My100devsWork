//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class espressoMachine{
    constructor(a,b,c,d){
        this.brand = a;
        this.size = b;
        this.recyclable = c;
        this.cleannable = d;
    }
    makeDrink(){console.log(`Here's your drink`)}
    cleanMachine(){console.log(`machine is now clean`)}
    smackMachine(){console.log(`Stupid machine work, smacks it`)}
}