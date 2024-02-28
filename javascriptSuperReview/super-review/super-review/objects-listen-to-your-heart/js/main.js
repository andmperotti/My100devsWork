//Create a stopwatch object that has four properties and three methods
let stopwatch = {
    brand: 'nike',
    color: 'black and yellow',
    display: 'black and white',
    size: 'large', 
    start(){console.log("Running!")},
    stop(){console.log("Stop Now!")},
    delay(){console.log("I'll excercise tomorrow.")}
}
console.log(stopwatch)
stopwatch.start()
stopwatch.stop()
stopwatch.delay()
console.log(stopwatch.brand)
console.log(stopwatch.color)
console.log(stopwatch.display)
console.log(stopwatch.size)

//ways to copy
let drewsStopwatch = {...stopwatch}
console.log(drewsStopwatch)

// let jarrodsStopwatch = structuredClone(drewsStopwatch)
// console.log(jarrodsStopwatch)
//structuredClone cannot copy methods