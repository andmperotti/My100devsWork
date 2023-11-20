//https://javascript.info/variables excercises at bottom of page

/*
Working with variables
importance: 2
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).
*/

let admin;
let name;

name = 'John';
admin = name;

console.log(admin);


/*
Giving the right name
importance: 3
Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name that variable?
*/

let humanPlanet = 'Earth';
let visitorName = 'Drew';


/*
Uppercase const?
importance: 4
Examine the following code:

const birthday = '18.04.1982';

const age = someCode(birthday);
Here we have a constant birthday for the date, and also the age constant.

The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.

Would it be right to use upper case for birthday? For age? Or even for both?

const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

const AGE = someCode(BIRTHDAY); // make age uppercase?
*/

// BIRTHDAY is all capitals because it designates a variable for a value we knew before writing the code, thus it is correct.
//AGE however shouldn't be all captials because although it uses BIRTHDAY which is a constanct value we knew before writing the program, the functions return value will be different every day you run it.