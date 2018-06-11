function split(wholeArray) {

    /* your code here to define the firstHalf and secondHalf arrays */
    let firstHalf = wholeArray.slice(0,(wholeArray.length)/2)
    let secondHalf = wholeArray.slice((wholeArray.length)/2)
    return [firstHalf, secondHalf];

  }

function merge(arr1,arr2){
  let newArr = []
  if(arr1[0] > arr2[0]){
  newArr.push(arr2[0]);
  } else {
    newArr.push(arr1[0]);
  }

  return newArr;
} 