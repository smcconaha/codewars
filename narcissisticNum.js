/*A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each 
raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153*/

function narcissistic(value) {
    //convert string into array of numbers
    //loop through the string
    //raise each number to the power of the length of the array
    //sum the values of those numbers
    //if the sum = original value then return true
    //else return false
    let sum = 0;
    let valueString = value.toString()
    for (let num of valueString.split('')) {
        sum += Math.pow(Number(num), valueString.length)
    }
    return sum === value ? true : false;
    }

//Alternatively

function narcissistic( value ) {
    return ('' + value).split('').reduce(function(p, c){
      return p + Math.pow(c, ('' + value).length)
      }, 0) == value;
  }