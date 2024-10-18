// # È Palidroma?

/**
 *
 * Returns true if the string is palidrome, false otherwise
 *
 * @param {string} userWord a string to be checked
 * @returns {boolean}
 */
function isPalindrome(str) {
  str = str.toLowerCase();

  const strToArray = [];
  const ReversedStrToArray = [];
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    strToArray.push(char);
    ReversedStrToArray.unshift(char);
  }

  let isStrPalindrome = true;
  for (let i = 0; i < strToArray.length; i++) {
    strToArray[i] !== ReversedStrToArray[i] ? (isStrPalindrome = false) : null;
  }

  return isStrPalindrome;
}

const userWord = prompt("Enter the word to check");
isPalindrome(userWord)
  ? console.log(`\'${userWord}\' is Palindrome`)
  : console.log(`\'${userWord}\' isn't Palindrome`);

// # Pari o Dispari

/**
 *
 * Returns a random integer value between "min" and "max"
 *
 * @param {number} min minimum of the range
 * @param {number} max maximum of the range
 * @returns {number}
 */
function randomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *
 * Returns true is the first player has won, false otherwise.
 *
 * @param {string} evenOrOdd win condition of the game. Expected value "Even" or "Odd"
 * @param {number} firstPlayer number choosen from the first player
 * @param {number} secondPlayer number choosen from the second player
 * @returns {boolean}
 */
function evenOrOddWinner(evenOrOdd, firstPlayer, secondPlayer) {
  const sum = firstPlayer + secondPlayer;
  const winConditions =
    (evenOrOdd === "Even" && !(sum % 2)) || (evenOrOdd === "Odd" && sum % 2);
  return winConditions;
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
