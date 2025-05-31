

function calculator(a,b,sign){
  // Your code here...
  if(typeof a!=='number' || typeof b!=='number'){
      return 'unknown value'};
  switch(sign){
      case'+':
      return a+b;
      break
      case'-':
      return a-b;
      break
      case'*':
      return a*b;
      break
      case'/':
      return a/b;
      default:
      return 'unknown value';
  }
  return sign;
}
console.log(calculator(2,3,'/'));