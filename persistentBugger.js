/*Write a function, persistence, that takes in a positive parameter num and returns 
its multiplicative persistence, which is the number of times you must multiply the 
digits in num until you reach a single digit.

For example (Input --> Output):*/

function persistence(num) {
    //if length of the number is 1 then return 0
    let count = 0;
    //else while length of the number is > 1
    while(num.toString().length > 1){
      //number updated to convert number to string in order to split into array
      //use reduce to multiply accumulator x current value
      num = num.toString().split('').reduce((accumulator,currentValue)=>accumulator *= +currentValue,1)
  
      count++
    }
    return count
  }