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
  var charArray = [];
  var checkUpperCase = false;
  var checkLowerCase = false;
  var checkNumbers = false;
  var checkSpecialChars = false;

  // create a character type function
  function charType() {
    alert("You must pick at least one of the following character types: ");
    checkUpperCase = confirm("Click OK to include uppercase characters");
    checkLowerCase = confirm("Click OK to include lowercase characters");
    checkNumbers = confirm("Click OK to include numbers");
    checkSpecialChars = confirm("Click OK to include special characters");
  }

  // force the user to pick at least one of the following options
  while (
    !checkUpperCase &&
    !checkLowerCase &&
    !checkNumbers &&
    !checkSpecialChars
  ) {
    charType();
  }

  // concatenate the chosen character types and store them in an array
  // if (checkUpperCase) {
  //   charArray = charArray.concat(upperCaseChar);
  // }
  // if (checkLowerCase) {
  //   charArray = charArray.concat(lowerCaseChar);
  // }
  // if (checkNumbers) {
  //   charArray = charArray.concat(numberChar);
  // }
  // if (checkSpecialChars) {
  //   charArray = charArray.concat(specialChar);
  // }
  function addToArray(check, typeOfCharacter) {
    if (check) {
      return charArray = charArray.concat(typeOfCharacter);
    }
  } 
  addToArray(checkUpperCase, upperCaseChar);
  addToArray(checkLowerCase, lowerCaseChar);
  addToArray(checkNumbers, numberChar);
  addToArray(checkSpecialChars, specialChar);

  // create a function that picks a random item from an array
  function randomItem(item) {
    return item[Math.floor(Math.random() * item.length)];
  }

  var password = "";

  // for the length of the password, pick the items from the character array at random
  for (i = 0; i < passwordLength; i++) {
    password += randomItem(charArray);
  }
  
  // print password content to the page
  randomPasswordEl.textContent = password;
}
