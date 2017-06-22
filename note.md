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

    