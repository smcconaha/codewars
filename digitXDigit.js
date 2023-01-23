/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-35)
Note: The function accepts an integer and returns an integer.
Happy Coding!*/

function squareDigits(num){
    const squareArr = []
    //loop through the number, square the value and push to new array
    //first convert integer into array of digits
    const newNum = Array.from(String(num), Number);
    //next loop through array and raise the input by the second power
    newNum.forEach((digit) => {
    squareArr.push(Math.pow(digit, 2));
    });
    //convert results back to a number from array of digits
    return Number(squareArr.join(''));
  }