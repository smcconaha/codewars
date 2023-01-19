/*Complete the method which returns the number which is most frequent in the given input array. 
If there is a tie for most frequent number, return the largest number among them.
Note: no empty arrays will be given.*/

function highestRank(arr){
    arrNew = [];
    const countedArr = arr.reduce((allValues, value) => {
      const currCount = allValues[value] ?? 0;
      console.log(currCount)
      return {
        ...allValues,
        [value]: currCount + 1,
      };
    }, {});
    
    console.log(countedArr);
    
    return Number(Object.keys(countedArr).reduce((a, b) => countedArr[a] > countedArr[b] ? a : b));  
    }