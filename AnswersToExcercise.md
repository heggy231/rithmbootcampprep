{ JavaScript History and Setup. }
What is the difference between JavaScript and ECMAScript?
While JavaScript and ECMAScript is the same one language, they are different by ECMAScipt is Specification of JavaScript language and JavaScript is ECMAScript Spec's implementation of it.
 
Who is Brendan Eich?
Mr. Eich is the creator of JavaScript who managed to create the JS in 10 days and was an employee of Netscape.
 
How do you hide and show the Chrome console?
To hide/show the console press Option + Command + j on a Mac (or Control + Shift + J on Windows and Linux). Another way to get to the console is to right click on the web page, select Inspect, and then move to the tab called Console.
 
Create a simple page with a script tag. Inside of the script tag declare a couple of variables and then log their values to the console.
 
ex4answer.html file ----------
 
<!DOCTYPE html>
<html>
<head>
<title>JavaScript Test Site</title>
<!--JavaScript and HTML in 2 Separate Files-->
<script src="first.js">
   // alert("Hello, World!");
 
</script>
</head>
<body>
 
<p>Create a simple page with a script tag. Inside of the script tag declare a couple of variables and then log their values to the console.</p>
 
</body>
</html>
 
first.js file -------------------
 
var a = 5;
var b = 10;
console.log("Sum of 5 + 10 is ", a+b);
prompt("Sum of 5 + 10 is ", a+b);
confirm("Do you think 5 + 10 is ", a+b, "?");
 
Research prompt and confirm - what do they do?
- prompt() and confirm (): both are window object (BOM) which changes the browser's behavior of current page.
- prompt(): method diplays a dialog box that prompts the user to enter an input.
- confirm(): method displays a dialog box with a specified message, along with an OK and a Cancel button.
{ Variables and Primitives. }
Exercises
Create the following variables
name, which is a string set to your current name 
 
var name = "Heggy";
dayOfBirth, which is a number set to the day of your birth month 
 
dayOfBirth = 7;
2. See what happens when you have multiple variables of the same name. Which one takes precedence? 
The last assigned value takes the precedence of previous variable assignment.
 
3. Write some JavaScript that prompt 's the user for their favorite color. Once the user has submitted a favorite color, log that color to the console along with a friendly message.
 
answer: repl.it
function tellMeYourNumber () { 
var favoriteNumber = prompt("What's your favorite number?");
console.log("You have a great taste for picking out favorite number. I love your favorite number, " + favoriteNumber);
}
tellMeYourNumber();
 
4. Create a string that contains both single quotes and double quotes. 
 
var line = '"I am here for you," said her husband of 15 years. [Excerpt from Howl\'s moving castle]'
 
5. What is the difference between null and undefined?
null is typeof object which programmer explictily assigns to until there is value available to assign, undefined is error mesage when programmer forgets to declare a variable.  Any variable that is declared but no value assigned or there is nothing to return when method or function is called also results undefined. 
 
6. What is NaN in JavaScript? What is the typeof NaN?
NaN means not a number, primitive type: number.
7. You can declare a variable by typing var thing;. What is the value of thing?
 
 
