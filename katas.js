
function reverseWords(strs) {
  // Go for it
  
  const words=strs.split(' ')
  const arrstring=words.map(word =>word.split('').reverse('').join(''))
  
  return arrstring.join(' ')
}
console.log(reverseWords('This is an example!'))