function isPalindrome(word) {
  // Write your algorithm here
  // Clean the input word by converting to lowercase and removing non-alphabetic characters
  const cleanedWord = word.toLowerCase().replace(/[^a-z]/g, '');

/* 
  Add your pseudocode here
*/
  // Initialize pointers for the start and end of the cleaned word
  let left = 0;
  let right = cleanedWord.length - 1;

  // Compare characters from the start and end, moving towards the center
  while (left < right) {
    // If characters at the pointers don't match, it's not a palindrome
    if (cleanedWord[left] !== cleanedWord[right]) {
      return false;
    }
    // Move the pointers inward
    left++;
    right--;
  }
  // If the loop completes without returning false, it's a palindrome
  return true;
}

/*
  Add written explanation of your solution here
  Pseudocode:
  1. Clean the input word by converting to lowercase and removing non-alphabetic characters.
  2. Initialize left pointer to the start of the cleaned word and right pointer to the end.
  3. Loop while left pointer is less than right pointer:
    a. If characters at left and right pointers are not equal, return false (not a palindrome).
    b. Increment left pointer and decrement right pointer.
  4. If the loop completes without returning false, return true (it's a palindrome).
  Written Explanation:
  The function cleans the input word by converting it to lowercase and removing non-alphabetic characters.
  It then uses two pointers (left and right) that start from the beginning and end of the cleaned word.
  The function compares characters at these pointers and moves them towards the center of the word.
  If the characters ever don't match, it's not a palindrome, and the function returns false.
  If the loop completes without finding any mismatch, the word is a palindrome, and the function returns true.
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