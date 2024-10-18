// # È Palidroma?

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

const userWord = "Anna"; // prompt("Enter the word to check");
isPalindrome(userWord)
  ? console.log(`\'${userWord}\' is Palindrome`)
  : console.log(`\'${userWord}\' isn't Palindrome`);

// # Pari o Dispari

function randomIntegerInRange(min, max) {
  return Math.floor(Math.random * (max - min + 1)) + min;
}

const userChoice = "Even"; // prompt('"Even" or "Odd" ?');
const userNumber = 2; // parseInt(prompt('Choose a number from 1 to 5'));
const pcNumber = randomIntegerInRange(1, 5);
evenOrOddWinner(userChoice, userNumber, pcNumber)
  ? console.log(
      `Opponent number: ${pcNumber} \n Your number: ${userNumber} \n Sum: ${
        pcNumber + userNumber
      } \n You Won!`
    )
  : console.log(
      `Opponent number: ${pcNumber} \n Your number: ${userNumber} \n Sum: ${
        pcNumber + userNumber
      } \n You Lost!`
    );
