
function grow(x){
  let multiple = 1;
for (i=0; i < x.length; i++){
 
  multiple = multiple * x[i]
  console.log(multiple) 
}
 return multiple; 
}
grow([1,2,3,4])