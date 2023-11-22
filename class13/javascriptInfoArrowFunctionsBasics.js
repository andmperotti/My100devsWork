//https://javascript.info/arrow-functions-basics
//tasks:

/*
Rewrite with arrow functions
Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
*/

let ask = (question, yes, no)=>{
	if(confirm(question)){
		yes()
	}else{
		no();
	}
}

ask(
	"Do you agree",
	()=>alert("you agreed."),
	()=>alert("You canceled the execution.")
	);

//I got the part right it wanted me to do, which is passing in anonymous functions when invoking the ask function, but we could have used an arrow function to create an expression on the even higher function. It's not hoisted so I see no problem in using a function expression vs a function declaration.