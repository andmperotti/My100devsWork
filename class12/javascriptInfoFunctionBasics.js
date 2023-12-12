//https://javascript.info/function-basics

/*
Is "else" required?
importance: 4
The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
Is there any difference in the behavior of these two variants?
*/

//I think it does act the same, because if age is not greater than 18 that conditionals body doesn't get accessed and the program continues looking down the functions statements.... I see the solution agrees with me.



/*
Rewrite the function using '?' or '||'
importance: 4
The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR ||
*/

function checkAge(age){
  return age>18 ? true : confirm('Did parents allow you?')
}

function checkAge(age){
  return age>18 || return confirm('Did parents allow you?')
}

//I was close, just needed to enclose age>18 inside parentheses. OH they are not required but do exist for better readability, so something to learn anyway. Oh I actually included a return keyword when I didn't need to because the comaprison output would be passed to the return keyword; instead of how I coded it.



/*
Function min(a, b)
importance: 1
Write a function min(a,b) which returns the least of two numbers a and b.

For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

function min(a,b){
  if(a<b){
    return a
  }else{
    return b
  }
}

//now that I clicked the solution and saw the ternary operator before the entire equation let me write the code using ternary:
function minTernary(a,b){
  return a<b ? a:b;
}



/*
Function pow(x,n)
importance: 4
Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

Run the demo

P.S. In this task the function should support only natural values of n: integers up from 1.
*/

/*html file for this^ */

<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>pow excercise</title>

    <!-- external CSS link -->
    <link rel="stylesheet" href="testing.css">
  </head>
  <body>
    <form>
      <label>Base Value:
        <input type='number' id='base-number' min="1"></label>
      <label>Number of times to multiple Base by itself:
        <input type="number" id="power-number" min="1"></label>
      <button name="submit" id='calculate-button'>Calculate</button>
    </form>
    <h1 id="h1-result">Result:</h1>

    <script type="text/javascript" src="testing.js"></script>
  </body>
</html>


/*css file*/

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}







/* Box Model Hack */
* {
  box-sizing: border-box;
}

/* Clear fix hack */
.clearfix:after {
     content: ".";
     display: block;
     clear: both;
     visibility: hidden;
     line-height: 0;
     height: 0;
}

.clear {
  clear: both;
}

/******************************************
/* BASE STYLES
/*******************************************/
input{
  display: block;
}
/******************************************
/* LAYOUT
/*******************************************/


/******************************************
/* ADDITIONAL STYLES
/*******************************************/


/* javascript file for it*/
const base = document.querySelector('#base-number')
const multi = document.querySelector("#power-number")
const btn = document.querySelector("#calculate-button")
const result = document.querySelector("#h1-result")

function pow(x,n){
  return Math.pow(x,n);
};

btn.addEventListener('click', e=>{
  e.preventDefault();
  console.log(base.value, multi.value)
  result.innerText = `Result: ${pow(base.value, multi.value)}`
  base.value = '';a
  multi.value = '';
})

//I cheated somehwat because I knew before this there was a pow function from the Math object.
//Also I did more work by using elements to do this , whereas they just wrote prompt and alerts, which can't be styled.



