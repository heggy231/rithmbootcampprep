// Basic Code Solution:
// sumAll ([10,3]);
// option 1
funcion sumAll (arr) {
    var lower = 0
    var upper = 0;
    if(arr[0] < arr[1]){
        lower = arr[0];
        upper = arr[1];
    } else {
        lower = arr[1];
        upper = arr[0];
    }

    var temp = 0;
    for(var i = lower; i <= upper; i++){
        temp += i;
    }
    return temp;
}
sumAll([10,3]); // 52


// option 2: use Math.min and Math.max
function sumAll (arr) {
    var lower = Math.min(arr[0], arr[1]);
    var upper = Math.max(arr[0], arr[1]);
    var temp = 0; 
        for (var i = lower; i<= upper; i++){
            temp += i;
        }
    return temp;
}
sumAll([10,3]); // 52

/* 
Option 3: use .sort() difference function, Arithmetic progressions.
 http://www.s-cool.co.uk/a-level/maths/sequences-and-series/revise-it/arithmetic-and-geometric-progressions
Arithmetic Sequence: Sequence of numbers with each term has constant value difference between any two consecutive term (common difference).  
Ex) 2, 8, 14, 20, 26; common difference: 6. 
sum of arithmetic series = n(a+l)(1/2), where n = no of terms, a = first term and l = last term.
*/

function sumAll (arr) {
    // use sort naitive compare function used with function expression
    // sort the arr ascending
    // noted both sortedArr and arr gets sorted here
    var sortedArr = arr.sort(function (a,b){
        return a - b;
    });
    // ES6 arrow function (one-liner)
    // var sortedArr = arr.sort((a,b) => a-b);
    var firstNum = arr[0];
    var lastNum = arr[1];
// (lastNum - firstNum + 1) = n term
    var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
    return sum;
}

/*
Advanced Code Solution:
Code Explanation:

Creating a variable sum to store the sum of the elements.
Starting iteration of the loop from min element of given array and stopping when it reaches the max element.
Using a spread operator (...arr) allows passing the actual array to the function instead of one-by-one elements.
Relevant Links

Hint: Spread Operator
Hint: Using Spread Operator in Math.max()14
*/
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}

sumAll([1, 4]);