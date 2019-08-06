/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Implement regular expression matching with the following special characters:

   . (period) which matches any single character
   * (asterisk) which matches zero or more of the preceding element

That is, implement a function that takes in a string and a valid regular expression and returns whether or not the string matches the regular expression.

For example, given the regular expression "ra." and the string "ray", your function should return true. The same regular expression on the string "raymond" should return false.

Given the regular expression ".*at" and the string "chat", your function should return true. The same regular expression on the string "chats" should return false.
*/

const compare = (yourString, dictionary) => {
  yourString = yourString.replace('.', '[a-z]{1}')
  yourString = yourString.replace('*', '[a-z]*')
  let regex = new RegExp(yourString)
  console.log('REG = ', regex);
  console.log('dict = ',dictionary)
  let output = dictionary.match(regex)
  if (dictionary === output[0]) {
    return [output[0], true];
  } else {return [output[0], false]}
}

let testString1 = 'ra.'
let testComp1 = 'raymond'
let testString2 = '.*at'
let testComp2 = 'chat'

console.log(compare(testString1, testComp1))
console.log(compare(testString2, testComp2))

$(document).ready(function() {
  
  $('#output-section-1').text(1);
});
