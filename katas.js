
function stray(numbers) {
  const first = numbers[0];
  for ( let i = 0; i< numbers.length; i++) {
    if(numbers[i]!== first){
      return numbers[i];
      
    }
  }
  return first;
  
}
console.log(stray([1,4,1,1,1]));