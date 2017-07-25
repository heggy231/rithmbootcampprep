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
 3) boolean - var isAwesome = true;
 4) undefined - var foo; or var setToUndefined = undefined;
 5) null - var empty = null;

 JavaScript is known as a "weakly" typed language. What this means is that when you create variables and assign them to values, you do not have to specify the type of data you are working with. In statically (or strongly) typed languages, like Java and C++, you do need to specify the type.