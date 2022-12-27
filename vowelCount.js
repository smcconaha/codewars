/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
    let count = 0;
    let vowelArr = ["a", "e", "i", "o", "u"];
    
    for (letter of str) {
      if (vowelArr.includes(letter)) {
        count++
      }
    }
    return count;
  }
  
  /*Create count to track vowel count
  Create array of vowels
  Loop through the provided string
  IF letter from the string is included in the vowel array
  THEN increase the vowel count by one*/

//ALTERNATIVE SOLUTION

function getCount(str) {
    return ((str || '').match(/[aeiou]/ig)||[]).length;
  }

/*The || after for str after return prevents break given null param
'ig' are regexp flags, i is case insensitive and g is the global flag
if 'str.match(/[aeiou]/ig)' returns a value then that value is used and
'||[]' is essentially ignored...if it returns null then '[]' empty array
is returned

*/