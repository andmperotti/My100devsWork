//Create an event on the button with the id value of clickMe, which invokes the makeReq function
document.querySelector('#clickMe').addEventListener('click', makeReq)

//Declaration of the function, which is an asynchronous function
async function makeReq(){
  //create a variable which holds the user input value
  const userName = document.querySelector("#userName").value;
  //create a variable which holds the return promise object from the fetch'd api using some kind of url, also await means to wait for the result of this promise before proceeding
  const res = await fetch(`/api?student=${userName}`)
  //make another variable which turns the above variables promise into json data, await is used again so our code is in limbo until this is done.
  const data = await res.json()

  //log the json data formatted data to the console
  console.log(data);
  //use 3 keys from the data object to change text in 3 dom elements
  document.querySelector("#personName").textContent = data.name
  document.querySelector("#personStatus").textContent = data.status
  document.querySelector("#personOccupation").textContent = data.currentOccupation
}