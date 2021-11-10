function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("")
  reversedWord.toString()
    if (word === reversedWord) {
      return true 
  } else {
    return false
  }
}

/* 
  // Find a way to test if a word is a palindrome. Does the first half match the last
  half? Will first word match the word backwords, or reverse
*/

/*
  // if the word deeply equals the word in reverse, then isPalindrome 
  returns true. else it will return false. If I split the string, reverse, then
  join it will output what? 
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
