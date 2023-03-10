/*Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). Strings 
passed in will consist of only letters and spaces. Spaces will be included only when more 
than one word is present.*/

function spinWords(string){
    //given string
    //convert string to array
    //return string reversed for words with five letters or more
    let revWord = '';
    let newString = [];
    string = string.split(' ');
    for (let word of string) {
      if (word.length > 4) {
        revWord = word.split('').reverse();
        revWord = revWord.join('');
        newString.push(revWord)
      } else {
        newString.push(word)
      } //end of if statement
  //     newString += revWord;
      console.log(newString.toString())
    } //end of for loop
    if (newString.length === 1) {
      return newString.toString();
    } else {
      return newString.join(' ');
    }
  }

  //BETTER SOLUTION

  function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }

  /*splitting original string by ' ', so converting to ordered list of substrings
  so we have an array then mapping over each item in the array and applying the
  function which is a ternary on length.  This will split the word into a smaller
  array if length is greater than 4 and reverse the order then combine back into a
  string with join*/