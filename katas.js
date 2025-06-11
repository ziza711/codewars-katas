
function validateHello(greetings) {
 const messages = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']
 const greeting = greetings.toLowerCase();
  for ( i=0; i< messages.length; i++){
     
    if (greeting.includes(messages[i])){
      return true;
  
    }
    }
  return false;
  
 
}

validateHello('hello');