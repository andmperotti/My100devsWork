//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods
function TonyHawkSkater(name, hairColor, skatingStyle, voiceLine){
    this.name = name,
    this.hairColor = hairColor,
    this.skatingStyle = skatingStyle,
    this.voiceLine = voiceLine,
    this.describeSkater = function(){
        console.log(`${this.name} has a hair color of ${this.hairColor}, and skates ${this.skatingStyle}`)
    },
    this.sayVoiceline = function(){
        console.log(`${this.name} yells their voice line slogan, '${this.voiceLine}'.`)
    },
    this.doKickflip = function(){
        console.log(`${this.name} does a kickflip`)
    }
}