/*Write a function that takes an integer as input, and returns the number of bits that are equal to one in 
the binary representation of that number. You can guarantee that input is non-negative.
Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case*/

var countBits = function(n) {
    if (n === 0) {
      return 0;
    } else {
      let count = 0;
      n = (n.toString(2));
      for (let number of n) {
        count += Number(number);
      }
    return(count);
    } 
  };

/*A more efficient function*/
countBits = n => n.toString(2).split('0').join('').length;
/*converting to binary with .toString then converts to array with 0 separator and converts back to string with
join and returns the length*/