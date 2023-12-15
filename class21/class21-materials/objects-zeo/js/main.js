//Create a stopwatch object that has four properties and three methods
let stopwatch = {
    shape: 'round', 
    color: "black",
    manufacturer: "nike", 
    lanyard: true,
    getTime : ()=>{
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    },
    displayTime: ()=>{
        console.log(getTime())
    },
    startCounter: ()=>{
        let now = new Date();
        let startTime = `${now.getHours}:${now.getMinutes()}`
    },
    start: ()=>{
        console.log('start')
    },
    stop: ()=>{
        console.log("stop")
    }
}