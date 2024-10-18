function isPalindrome(userWord) {
  userWord = userWord.toLowerCase();

  const userWordArray = [];
  const userReversedWordArray = [];
  for (let i = 0; i < userWord.length; i++) {
    const char = userWord.charAt(i);
    userWordArray.push(char);
    userReversedWordArray.unshift(char);
  }

  let isUserWordPalindrome = true;
  for (let i = 0; i < userWordArray.length; i++) {
    userWordArray[i] !== userReversedWordArray[i]
      ? (isUserWordPalindrome = false)
      : null;
  }

  return isUserWordPalindrome;
}

const userWord = prompt("Enter the word to check");
isPalindrome(userWord)
  ? console.log(`\'${userWord}\' is Palindrome`)
  : console.log(`\'${userWord}\' isn't Palindrome`);
