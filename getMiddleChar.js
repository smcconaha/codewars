/*You are going to be given a word. Your job is to return the middle character of the word. 
If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.*/

function getMiddle(s) {
  let middle = s.length / 2
  return (s.length % 2 === 0) ? s[middle-1]+s[middle] : s[Math.floor(middle)]
}

//Alternative solution

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
