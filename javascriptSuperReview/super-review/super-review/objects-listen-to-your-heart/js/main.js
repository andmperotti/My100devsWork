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