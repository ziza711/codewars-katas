
function basicOp(operation, value1, value2){
  //Code
  switch (operation){
    case'+':
     return value1 + value2;
    case'-':
     return value1 - value2
    case'*':
     return value1 * value2
    case'/':
     return value1 / value2
    default:
    return "invalid operation"
  }
  
}
  console.log(basicOp('/',49,7));