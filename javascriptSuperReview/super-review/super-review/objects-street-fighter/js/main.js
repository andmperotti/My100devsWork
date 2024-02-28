//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(name, size, fightingStyle, specialMoveName){
    this.fighterName = name;
    this.fighterSize = size;
    this.fighterFightingStyle = fightingStyle;
    this.fighterSpecialMoveName = specialMoveName;
    this.attack = function(){console.log(`${this.fighterName} attacks!`)};
    this.dodge = ()=>{console.log(`${this.fighterName} dodges the attack!`)};
    this.declareVictory= ()=>{console.log(`${this.fighterName} uses their special the ${this.fighterSpecialMoveName}!`)};
}
let drew = new StreetFighter('drevvska', 'average', 'ground and pound', 'tickler')
console.log(drew)
drew.attack()
drew.dodge()
drew.declareVictory()