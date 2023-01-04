var upperCaseChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowerCaseChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChar = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// when button is pressed, show content in paragraph element
var randomPasswordEl = document.querySelector("#random-password");

// create a function that is executed when the 'generate password button' is clicked
function generatePassword() {
  var passwordLength = 0;

  // prompt the user for password length (>= 10 || <= 64)
  var lengthPrompt = prompt(
    "Choose a password length between 10 and 64 characters"
  );

  // create a function that converts the string to a number and store it in the 'passwordLength' variable
  function changeToNum() {
    passwordLength = parseInt(lengthPrompt);
  }

  changeToNum();

  // check whether user input fits the criteria
  while (isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64) {
    lengthPrompt = prompt(
      "Wrong Input! Please try again! Pick a length between 10 and 64 characters:"
    );
    changeToNum();
  }
  // tell the user how many characters they have picked
  alert(`Your password will have ${passwordLength} characters`);
  // ask the user which character type to include (lowercase, uppercase, numeric and/or special characters
  // - make the user pick at least one)
  // concatenate the chosen character types and store them in an array
  // create a function that picks a random item from an array
  // for the length of the password, pick the items from the character array at random
}
