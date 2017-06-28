/*
start with basic
Return index of greatest value in an array
*/

var arr = [0, 21, 22, 7];

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    return maxIndex;
}

/*
Basic Difficulty

Given the daily values of a stock, write a program that will find how you can gain the most with a single buy-sell trade.
--------------------------------------
You may assume .....
--------------------------------------
- Your function should be called bestDays and take one array of integers as an input.
- Daily stock values will be represented in an array of integers (arr[]) representing the stock price at the beginning or "opening bell" of each day.
    - You may use the following as a test array, from day 0 through day 7: {17, 11, 60, 25, 150, 75, 31, 120}. In this case, purchasing on day one and selling on day four would yield the most profit.
    - bestDays analyses historical data and returns when one should have bought and sold to maximize profit, it is not designed to predict the future. If you do manage to write a program that accurately predicts future stock market trends, congratulations, you'll be very very rich.
- You are required to buy and sell only once.
- For the sake of this exercise, you will only ever be purchasing, owning, or selling one share.
- bestDays should return the day on which one should buy a share, followed by the day on which one should sell a share, as integers.

https://repl.it/I7MQ/10
*/
function bestDays (arr) {
// simple check for anything is in arr
    if (arr.length === 0) {
        return -1;
    }

    var sell = arr[0];
    var buy = arr[0];
    var sellIndex = 0;
    var buyIndex = 0;

    // find max > sell value (high)
    for (var i = 1; i < arr.length; i++) {
        // iterate thru and set the values to check against
        // max and set the index of the highest for use later
        if (arr[i] > sell) {
            sellIndex = i;
            sell = arr[i];
        }
    }
// we know the sell day, find buy day from 0 index upto sellday index

    for (var j = 0; j < sellIndex; j++)
        if (arr[j] < buy) {
            buyIndex = j;
            buy = arr[j];
        }
    console.log("buy on day: ", buyIndex);
    console.log("sell on day: ", sellIndex);
    return 0;
}

bestDays([90, 170, 250, 300, 30, 525, 685, 90]);
bestDays([17, 11, 60, 25, 150, 75, 31, 120]); // buy day 1 and sell day 4

function bestDays(days){
  let daysCopy = days.map((day)=>{
    return day
  }).sort((a, b)=>{
    return a - b
  })
  return [days.indexOf(daysCopy[0]), days.indexOf(daysCopy[daysCopy.length - 1])]
}

console.log("buy and sell on days " + bestDays([17, 11, 60, 25, 150, 75, 31, 120]) + " respectively")