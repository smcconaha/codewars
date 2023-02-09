/*In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.*/

//REMEMBER that not converting to lowercase causes issues with the UTF conversion
function alphabetPosition(text) {
    //what is the conversion from alpha to numeric?
    //charCodeAt is the UTF-16 code unit, starts A at 65
    let numericConv = [];
    let i = -1;
    const textLower = text.toLowerCase()
    for (let letter of textLower) {
      i++;
      if (letter.match(/[a-z]/i)) {
        numericConv.push(letter.charCodeAt(0) - 96)
      }
    }
    return numericConv.join(' ');
  }