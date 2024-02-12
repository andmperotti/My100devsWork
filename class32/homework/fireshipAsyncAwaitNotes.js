// // browser and node js are always running a single threaded event loop to run your code
// // first round it'll run all your synchronous code, but might que up async events to be called back later
// // heres a function to run but first i need to go get some data from the network
// // event loop "ok ill keep doing my thing while you do your thing in a seperate thread pool"
// // then somtime in the future your function will finish and let the event loop know its ready to be called back 

// // now interesting things happen:
// // if its a macro tasks like settimeout or setinterval, itll be executed on the next event loop
// // but
// // if its a micro task like a fulfilled promise
// // it will be called back before the start of the next event loop


// //lets code some examples to show the above

// //console log that's synchrounouse:
// console.log(`Synchronous 1`)

// //then a setTimeout but give it a time delay of 0 milliseconds
// setTimeout(_=>console.log('Timeout 2'), 0)
// //then a promise that will resolve right away
// Promise.resolve().then(_=>console.log('Promise '))
// //then one more synchrounous line of code:
// console.log('Synchronous 4')
// console.log('')
// //event loop executed the first console.log right away because they're on the main thread
// //que'd setTimeout for a future task
// //the promise is qued to be run in the micro task que
// //final console.log gets executed right away

// //the promise executed first because of the priority of the micro task queue




// //looking at promises
// const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')
// //fetch is a browser based api but exists in node, via a 'fetch library'
// //the return of a fetch is a promise from an api endpoint's response
// //feth()ing data from a remote server is always going to be async 
// //so we can que up the promise: and provide it with a callback to json
// promise
//   .then(res=>res.json())
//   //mapping to json ^, is also a promise so we can chain plain js code
//   .then(user=>console.log(user.title))
//   .catch(err=>console.log (err))

// console.log('Synchronous')
// console.log('')
// //here the console.log line was executed first, then the response of the json conversion promise, which came from the original promise fetch response

// //using catch we can capture any errors from the entire async code, added above
// //if the code was callback based, we'd have to have a separate error handler for EACH async operation

// //so again, when using a catch(), if an error happens, it byspasses all of the remaining then calls and goes to the catch callback




// //when you start making promises thats when you're more likely to screw things up

// const tick = Date.now();
// const log = v=>console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`)

// //he made a loop that iterated a billion times and used the above 2 variables to keep track of the time between before running it and after, that while loop was synchrounous
// //this was to demonstrated that the script is essentially frozen while that code is running

// //if we wrap this task (while loop) into a promise, then we can get it off the main thread and execute it as a micro task

// const codeBlocker =()=>{
//   return new Promise((resolve, reject)=> {
//     let i = 0;
//     while(i<1000000000){i++}
//     resolve('billion loops done')
//   })
// }
// log('Synchronous 1')
// //it resolves to that value when done
// //the creation of the promise and the while loop is still on the main thread
// //its only the resolving of the value thats happening as a microtask
// codeBlocker().then(log)
// log('Synchronous 2')
// //first log happens right away
// //second should be logged as well but theres a 475ms delay because the while loop is on the main thread and the log doesn't happen until that while loop is done running



// //so refactor code to invoke Promise.resolve() and run the while loop inside that resovle promise callback, this guarantees the while loop will run after all the synchronous code in the current macro task is completed.

// const tick = Date.now();
// const log = v=>console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`)
// const codeBlocker =()=>{
//   return Promise.resolve().then(v=>{
//     let i = 0;
//     while(i<1000000000){i++}
//     return `billion loops done`
//   })
// }
// log('Synchronous 1')
// codeBlocker().then(log)
// log('Synchronous 2')
// //so now we get the logs right away, and the promise resolves after a while






//async await just boils down to syntactic sugar, to make your async code read like synchronous code




// //a function prefaced with async will be a promise
// const getFruit = async()=>{}
// //returns a promise of nothing
// //but whatever is eventually inside that function, this would be a promise of that value






// const getFruit = async()=>{
//   const fruits = {
//     pineapple: '🍍',
//     peach: '🍑',
//     strawberry: '🍓'
//   }
//   return fruits[name]
// }
// //here the running of the function will resolve to the emoji of the fruit key 
// //if we didn't use the async keyword we could: return Promise.resolve(fruits[name]) a promise that resolves to this value

// //so again when you use the async value the magic that happens is that it takes the return value and automatically resolves is as a promise.
// //it also sets up context to use the await keyword


//the real power of an async function is when you combine it with await keyword to pause the execution of the function


//here we'll get multiple fruits and combine them as a single value


// const makeSmoothie = async()=>{
//   //instead of chaining together multile then()'s, we can can use a promise to resolve to the value of a variable
//   const a = await getFruit('pineapple');
//   //await, pretty much says pause the execution of this function until the getFruit() resolves to a value, and the here we can use it as 'a'
//   const b = await getFruit('strawberry');
//   //then we'll return them as an array
//   return [a,b]

// }

// //one of the most annoying things with promises is that it's kind of difficult to share resolved values between mulitplie steps in the promise chain
// //but async await solves this problem

// //he says the above code is a joke, right now we're waiting to get a pineapple, then waiting to get a strawberry, but we could get them both at the same time
// //you only need to awawit one thing after another if the second value is dependant on the first value; ie: getting a user id before retrieveing some data about that user from the data base

// //lets imagine we're making this calls from a remote api and theres a second delay:
// const getFruit = async(name)=>{
//   const fruits = {
//     pineapple: '🍍',
//     peach: '🍑',
//     strawberry: '🍓'
//   }
//   await delay(1000);

//   return fruits[name]
// }
// //this would retrieve the array after 2005ms
// //but the whole point of the event loop is to avoid blocking code like this


// //so instead we can use Promise.all([a,b])
// const makeSmoothie = async()=>{
//   const a = await getFruit('pineapple')
//   const b = await getFruit('strawberry')

//   return Promise.all([a,b])
// }
// makeSmoothie().then(log)

// //so because an async function always returns a  promise and instead of having one after the other, we can add both promises to promise.all()^, which tells all promises in the array to run concurrently and to have the resolved values be at that index in the array
// //you dont want to accidently pause a function unnecessarily

// //SO, instead of awaiting a bunch of promises, add them to an array and then await that Promise.all() call, and this improves the speed of this function.


// //another benefit of async await is error handling;
// //instead of chaining a catch callback to our promise chain, we can wrap our code in a try catch block, which offers more flexiility with errors that might occur across multiple promises:

// const badSmoothie = async()=>{
//   try{

//     const a = getFruit('pineapple')
//     const b = getFruit('strawberry')
//     const smoothie = await Promise.all([a,b])

//     throw 'broken!'

//     return smoothie
//   }catch(err){

//   }
// }

// //so here throw and error amidst our statements, and it gets caught down below in the catch block

// //usually you'll want to log the error, then catch and throw another, or catch and return a value, and that dictates the control flow of the consumer of this promise
// //if you return a value, its basically liek ignoring the error and providing some replacement value, so the consumer of the promise won't get an error but instead they'll get resolved value inside the then callback
// //if we throw an error in the catch block it'll break the consumers promise chain and be  handled by their catch callback





//tricks:
const fruits = ['peach', 'pineapple', 'strawberry']
//here we have an array of id's
//we want to retrieve all these id's from the database
// const smoothie = fruit.map(v=>getFruit(v))
//convet them to an array of promises using map
//resolve them all concurrently using Promise.all()

//you could do this:
const smoothie = fruit.map(async v=>{
  const emoji = await getFruit(v)
  log(emoji)
  return emoji
})
//you need to be careful using async or await in a map or for each loop, because it won't actually pause the function in this context
//so normally we'd expect this to loop to stop if we do await getFruit() but instead it'll run all these promises condcurrently, which is probably not the behavior you wanted/expecting
//if you want to runa  loop and have everyt iteration in that loop await a promise, you need to use a traditional for loop
//so you can write an async function  and inside the for loop inside the function, use the await keyword inside that loop. When you write code like this:


cons fruitLoop = async()=>{
  for(const f of fruits){
    const emoji = await getFruit(f);
    log(emoji)
  }
}
fruitLoop();

//it will pause each step of the loop until that promise is resolved
//but more often than not you'll probably want to run everything concurrently and antoher thing you can do is use the await keyword directly inside a for loop
const fruitLoop = async()=>{
  for await(const emoji of smoothie ){

  }
}
//if you have a promise that resolves into an array, you can use the await keyword directly in your loop, so you can say for await in your code which will await the array of items in your loop to resolve and loop over them immediately after
//you can also use the await keyword directly inside conditionals, on the left side of the conditional we can await the resolved value from a promise and check if its equal to the value of some other value
if(awai getFruit('peach') === '🍑'){
  console.log('looks peachy!')
}

//