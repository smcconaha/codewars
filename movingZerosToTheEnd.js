/*Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]*/


function moveZeros(arr) {
    let count = 0;
    let zeroArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        arr.splice(i, 1);
        i--;
        count++;
      }
    }
    for (let i = 0; i < count; i++) {
      zeroArr.push(0);
    }
    return arr.concat(zeroArr)
  }

  //more compact solution
  var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
  }