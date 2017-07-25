## Variable types primitive: 
# string - var greeting = "hello";
# number - var favoriteNum = 33;
# boolean - var isAwesome = true;
# undefined - var foo; or var setToUndefined = undefined; (nothing is returned, no value is saved, like consol.log() its only job is to log the value.)
# null - var empty = null; (user purposely left the value of the variable to be empty until further information is given)

## Converting to a number
# Parse (converting) the number string as number numeral use: pareInt or parseFloat

    parseInt("3.14"); // 3
    parseFloat("3.14"); // 3.14
    parseInt("2.3alkweflakwe"); // 2
    parseFloat("2.3alkweflakwe"); // 2.3
    parseInt("w2.3alkweflakwe"); // NaN (not a number)
    parseFloat("w2.3alkweflakwe"); // NaN (not a number)

    # shorthand for parsing is the unary operator +:
        +"2"; // 2
        +"2.3alkweflakwe"; // NaN 
        +"w2.3alkweflakwe"; // NaN

## Converting to boolean: !!
    var greeting = "hi"
    var nothing = 0;

    !!greeting; // true
    !!nothing; // false

# JS begin
CMD+L to jump to address bar
about:blank is good site to start your web browser

#{ Variables and Primitives. }
https://www.rithmschool.com/courses/javascript/introduction-to-javascript-variables-and-primitives

// declaring variable
var firstName = "Matt";
var lastName = "Lane";

// + operator to combine words made up of characters, or strings, together. In JavaScript, when you combine two strings with the + operator, you get a new string which is a combination of the two. You can think of this as adding the strings together; a more formal name for it is concatenation.

var fullName = firstName + " " + lastName;

# Primitive Data Types in JavaScript
JavaScript has 6 primitive data types, but we'll only talk about 5 of them. Here's what they look like:

 1) string - var greeting = "hello";
 2) number - var favoriteNum = 33;
 3) boolean - var isAwesome = true; (t/f)
 4) undefined - var foo; or var setToUndefined = undefined; // var declared no value assigned
 5) null - var empty = null;

# 'weakly' typed language: No need to specify the type of data you are working with
 JavaScript is known as a "weakly" typed language. What this means is that when you create variables and assign them to values, you do not have to specify the type of data you are working with. In statically (or strongly) typed languages, like Java and C++, you do need to specify the type.

# backslash = escape character
 var phrase = 'Matt said, "I haven\'t been to Chile", the other day.';

 Also notice that there is a backslash before the single quote in haven't. The backslash is called an escape character and it tells JavaScript that the single quote in the string should not be used to end the string.

 # undefined

Any variable that is created in JavaScript that is not assigned a value is undefined:

var noValue;  // The value here will be undefined

also, You can also explicitly set a variable to undefined:

var favoriteFood = "Candy";
// Changed your mind
var favoriteFood = undefined;

# null: Null is not the same as undefined. It signifies an intentional absence of data.

var secondEmailAddress = null; // intentionally value set to null

It is important to remember that null and undefined are different types in JavaScript! This can be a confusing feature of JavaScript, even for people who know other programming languages. The distinction can seem somewhat arbitrary when you're first learning the language, but as you get more comfortable the distinction will become clearer. For now, you don't need to worry about it too much; if you're interested, you can read some discussion about the differences here (https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript) and here (https://www.quora.com/What-is-the-rationale-for-JavaScript-supporting-both-null-and-undefined).

# typeof Figuring out a variable's type in JavaScript

typeof ""; - "string"
typeof 5; - "number"
typeof false; - "boolean"
typeof Symbol(); - "symbol"
typeof undefined; - "undefined"
typeof null; // hmmm, this is not what we expect, it returns "object"!

# Converting between types
# converting to a string: toString

- toString method will convert any value which is not undefined or null into a string.

var num = 5;
var bool = true;

num.toString(); // "5";
bool.toString(); // "true";

# Convert to a number: parseInt | parseFloat | Number | unary operator 
convert a value to a number. One way is to parse the number, using parseInt or parseFloat

parseInt("2"); // 2
parseFloat("2"); // 2
parseInt("3.14"); // 3
parseFloat("3.14"); // 3.14 decimal is saved since it is float
parseInt("2.3alkweflakwe"); // 2
parseFloat("2.3alkweflakwe"); // 2.3
parseInt("w2.3alkweflakwe"); // NaN (not a number)
parseFloat("w2.3alkweflakwe"); // NaN (not a number)

Both of these functions parse from left to right. If they see numbers, they'll continue parsing until they find a non-numerical character, and will either return an integer or a float, depending on which function was used. That's why parseInt("2.3alkweflakwe") returns a valid integer, but parseInt("w2.3alkweflakwe") does not.

Number function. This doesn't parse, it simply tries to convert the entire string directly to a number. Sometimes this can lead to slightly different behavior compared to the parsing functions:

Number("2"); // 2
Number("3.14"); // 3.14
Number("2.3alkweflakwe"); // NaN different from parseInt or parseFloat since it converts directly to num.
Number("w2.3alkweflakwe"); // NaN

- unary operator is short cut of Number()
+"2"; // 2
+"3.14"; // 3.14
+"2.3alkweflakwe"; // NaN 
+"w2.3alkweflakwe"; // NaN 

# Converting to a boolean: !!

var greeting = "hi";
var nothing = 0;

!!greeting; // true
!!nothing; // false

Exercises

1. Create the following variables
- name, which is a string set to your current name
- dayOfBirth, which is a number set to the day of your birth month

var name = Cutie;
var dayOfBirth = 7;


2. See what happens when you have multiple variables of the same name. Which one takes precedence?
the last variable assignment take the precedence

3. Write some JavaScript that prompt's the user for their favorite color. Once the user has submitted a favorite color, log that color to the console along with a friendly message.

var userColor = prompt('Enter your favorite color');
console.log('Thank you.  Your favorite color is ' + userColor);
// output: Thank you.  Your favorite color is yellow

Or) I could have alert box on the window also.
var userColor = prompt('Enter your favorite color');
alert('Thank you.  Your favorite color is ' + userColor);

4. Create a string that contains both single quotes and double quotes.

console.log('I have been a \"Magician\" who likes to play fair.')
// output: I have been a "Magician" who likes to play fair.
// note: leaning to left is escape character and leaning to right is back slash.

5. What is the difference between null and undefined?

null is variable intented to be left null and undefined is variable gets this when forgot to assigned but declared.  typeOf null; // obj vs. typeof undefined // undefined

6. What is NaN in JavaScript? What is the typeof NaN?
NaN is Not a Number.  NaN is typeOf number.
typeof NaN;
"number"

7. You can declare a variable by typing var thing;. What is the value of thing?
thing value is undefined

# { Boolean Logic. }
https://www.rithmschool.com/courses/javascript/introduction-to-javascript-boolean-logic

- Objectives:
By the end of this chapter, you should be able to:

- Write conditional logic using boolean operators
- List all of the falsey values in JavaScript
- Use if/else and switch statements to include conditional logic in your JavaScript code
- Explain the difference between == and === in JavaScript
- Convert between data types explicitly in JavaScript