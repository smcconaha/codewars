/*A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because 
it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
Ignore numbers and punctuation.*/

function isPangram(string){
    //create array of alphabet
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    console.log(alpha.length)
    //convert string to lowercase
    //loop through the alpha array and check that each letter is accounted for in the string
    //using index of, if the array does not returb an index for the alpha[i] then false
    //else it is true
    let lowerCase = string.toLowerCase()
    for (let i = 0; i < alpha.length; i++) {
  //     console.log(lowerCase.indexOf(alpha[i]))
      if (lowerCase.indexOf(alpha[i]) < 0) {
        return false
      }
    }
    return true
  }

//Better solution

function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }