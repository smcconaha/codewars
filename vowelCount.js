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