
function positiveSum(arr) {
  sum =0;
  for(let i=0; i<arr.length; i++){
    if(arr[i] >= 0){
      sum += arr[i];
      }
    
  }
  return sum;
  
}
console.log(positiveSum([1,-4,12]));