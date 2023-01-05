function duplicateCount(text){
    //convert string to lower case
    //split string into list or array
    let newArr = text.toLowerCase().split('');
    //loop with filter (element, index, array)
    return newArr.filter((val, index, arr) => {
      return arr.indexOf(val) !== index && arr.lastIndexOf(val) === index;
    }).length;
  }

/*Alternative solution using Regex*/
function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }