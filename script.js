// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

var confirmLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmNumbers;
var confirmSpecialChar;

function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to have?"));

  while(confirmLength <= 7 || confirmLength >= 129) {
    alert("Password length must be between 8-128 characters. Try again");
    var confirmLength = (prompt("How many characters would you like your password to have?"));
    }

 
  var confirmLowerCase = confirm("Would you like to include lowercase characters");
  var confirmUpperCase = confirm("Would you like to include uppercase characters");    
  var confirmNumbers = confirm("Would you like to include numeric characters");
  var confirmSpecialChar = confirm("Would you like to include special characters");
    while(confirmLowerCase === false && confirmUpperCase === false && confirmSpecialChar === false && confirmNumbers === false) {
      alert("You must choose at least one parameter");
      var confirmLowerCase = confirm("Would you like to include lowercase characters");
      var confirmUpperCase = confirm("Would you like to include uppercase characters");    
      var confirmNumbers = confirm("Would you like to include numeric characters");
      var confirmSpecialChar = confirm("Would you like to include special characters");   
  } 
    var passwordCharacters = []
      
  if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(lowerCase)
  }

  if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(upperCase)
  }
  
  if (confirmNumbers) {
  passwordCharacters = passwordCharacters.concat(numbers)
  }

  if (confirmSpecialChar) {
  passwordCharacters = passwordCharacters.concat(specialChar)
  }

   console.log(passwordCharacters)

   var randomPassword = ""
  
    for (var i = 0; i < confirmLength; i++) {
     randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
     console.log(randomPassword)
   }
   return randomPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
