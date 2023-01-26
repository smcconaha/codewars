/*Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than 
one digit, continue reducing in this way until a single-digit number is produced. 
The input will be a non-negative integer.*/

function digitalRoot(n) {
    //if n is less than 10, we can just return the value
    if (n < 10) {
     return n
   } else {
     //Using recursive function, it stops calling itself when < 10 
     //convert number to string and split the number into an array
     //looping thru array with map and converting to integer from string
     //using reduce to sum the individual indices
       return digitalRoot(n.toString().split('').map(Number).reduce(
          (accumulator, currentValue) => accumulator + currentValue));
     }
  }

//ALSO consider using .from for string conversion