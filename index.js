function isPalindrome(word) {
  const cleanedWord = word.toLowerCase().replace(/[^a-z]/g, '');

  let left = 0;
  let right = cleanedWord.length - 1;

  while (left < right) {
    if (cleanedWord[left] !== cleanedWord[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

