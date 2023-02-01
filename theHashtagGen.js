/*Create hashtag generator:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.*/

function generateHashtag (str) {
    //if after removing blank spaces, length of string === 0 then return false
    if (str.trim().length === 0) {
      return false
    } else {
        //else split string into array
        //loop through array and capitalize first letter of each word
        //combine array and remove spaces
        //add hashtag to beginning of string
        //if length is greater than 140 then return false
      let hashString = "#" + str.split(' ').map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join("");
      if (hashString.length > 140) {
        return false
      } else {
        return hashString
      }
    }