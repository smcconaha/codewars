/*Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"*/

String.prototype.toJadenCase = function () {
    return this.split(' ').map((word) => word.replace(word[0], word[0].toUpperCase())).join(' ')
  };

//similar but cleaner code
String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }