document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#personName").textContent = data.name
  document.querySelector("#personStatus").textContent = data.status
  document.querySelector("#personOccupation").textContent = data.currentOccupation
  document.querySelector('#coinFlipResult').textContent = data.flipResult
}

//So on the index.html when a user enters a value and clicks the button, invokes this function which saves their entry as 'userName' and then makes a fetch call which hits the /api on the server.js which builds an object depending on the value/query parameter and then returns an object, here we take that object and convert it to json and save as data and use that variable to log to the console and fill 3 elements with data using text.content