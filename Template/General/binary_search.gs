// input : l=list, length=list_length, value=traget_value
// output : index of target value 
// if target is not in list, return -1

function binary_search(l, length, value){
  var low = 0;
  var high = length - 1;
  while (low <= high){
    let mid = Math.floor((low + high) / 2);
    //console.log(low, high, mid);
    if (Number(l[mid]) == value){
      return mid;
    }
    else if (Number(l[mid]) < value){
      low = mid + 1;
    }
    else{
      high = mid -1;
    }
  }
  return -1;
}