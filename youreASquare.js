//Given an integral number, determine if it's a square number:

var isSquare = function(n){
    let sqrRoot = Math.sqrt(n)
    return sqrRoot - Math.floor(sqrRoot) !== 0 ? false : true;
  }

// More compact solution

function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }