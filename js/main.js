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
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function evenOrOddWinner(evenOrOdd, firstPlayer, secondPlayer) {
  const sum = firstPlayer + secondPlayer;
  const winConditions =
    (evenOrOdd === "Even" && !(sum % 2)) || (evenOrOdd === "Odd" && sum % 2);
  return winConditions ? true : false;
}

const userChoice = prompt('"Even" or "Odd" ?');
const userNumber = parseInt(prompt("Choose a number from 1 to 5"));
const pcNumber = randomIntegerInRange(1, 5);
evenOrOddWinner(userChoice, userNumber, pcNumber)
  ? console.log(
      `Choice: ${userChoice} \n Your Number: ${userNumber} \n Opponent Number: ${pcNumber} \n Sum: ${
        pcNumber + userNumber
      } \n You Won!`
    )
  : console.log(
      `Choice: ${userChoice} \n Your Number: ${userNumber} \n Opponent Number: ${pcNumber} \n Sum: ${
        pcNumber + userNumber
      } \n You Lost!`
    );
