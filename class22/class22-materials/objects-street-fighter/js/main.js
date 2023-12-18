//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(fightingStyle, race, color, name){
    this.style = fightingStyle;
    this.nationality = race;
    this.clothingColor = color;
    this.name = name;
    this.specialMove = ()=>console.log(`${this.name} does their special move`);
    this.saySlogan = ()=>console.log(`${this.name} says their special slogan`);
    this.finishingMove = ()=>console.log(`${this.name} does their finishing move as their ${this.race} fans cheer, and as their ${this.color} outfit wobbles in the air showing off their ${this.style}`);  
}