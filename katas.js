
function neutralise(s1, s2) {
  // Here be dragons!
  let result="";
  for(let i=0; i< s1.length; i++){
    const char1=s1[i];
    const char2=s2[i];
  if (char1 === char2){
    result+=char1
    }else {
     result+="0";
      }
    
    }
  return result;
  
}
neutralise("+-++--", "++--++");