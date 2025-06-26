function getAge(inputString){
// return the girl's correct age as an integer. Happy coding :)
  for(let i=0; i<inputString.length; i++){
    const char=inputString[i];
  if(char > '0' && char <= '9'){
    return Number(char)
  }
    }
  return 0;
}
console.log(getAge('4 years old'))

        Best Practices0
        Clever0
    0
    Fork
    Compare with your solution
    Link

