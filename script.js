var numbers = [0,1,2,3,4,5,6,7,8,9]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var special = ["!","@","#","$","%","^","&","*",]

function getPasswordOptions() {
  var length = parseInt (
    prompt ('How many characters would you like your password to have?'),
    10
  );

  if (Number.isNaN (length)) {
    alert ('Password length must be a number');
    return null;
  }

  if (length < 8) {
    alert('Password length must be at least 8 characters long');
    return null;
  }

  if (length > 128) {
    alert('Password length must be less than 128 characters long');
    return null;
  }
  var hasNumbers = confirm(
    'Click OK to confirm including numeric characters.'
  );
  var hasUppercase = confirm(
    'Click OK to confirm including uppercase characters.'
  );
  var hasLowercase = confirm(
    'Click OK to confirm including lowercase characters.'
  );
  var hasSpecial = confirm( 
    'Click OK to confirm special characters.'
  );
  if (
    hasNumbers == false &&
    hasUppercase == false &&
    hasLowercase == false &&
    hasSpecial == false 
  ) {
    alert('Must have at least one character type');
    return null;
  }
  var passwordOptions = {
    length: length,
    hasNumbers: hasNumbers,
    hasUppercase: hasUppercase,
    hasLowercase: hasLowercase,
    hasSpecial: hasSpecial
  };

  return passwordOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randELement = arr[randIndex];

  return randELement;
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possible = [];
  var guaranteed = [];
  if (!options) return null;

  if (options.hasNumbers) {
    possible = possible.concat(numbers);
    guaranteed.push(getRandom(numbers));
  }
  
  if (options.hasUppercase) {
    possible = possible.concat(uppercase);
    guaranteed.push(getRandom(uppercase));
  }

  if (options.hasLowercase) {
    possible = possible.concat(lowercase);
    guaranteed.push(getRandom(lowercase));
  }

  if (options.hasSpecial) {
    possible = possible.concat(special);
    guaranteed.push(getRandom(special));
  }

  for (var i = 0; i < options.length; i++) {
  var possible = getRandom(possible)

  result.push(possible);
  }

  for (var i = 0; i < guaranteed.length; i++) {
   result[i] = guaranteed[i];
  }

  return result.join('');
}

  var generateBtn = document.querySelector("#generate");

  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }

  generateBtn.addEventListener("click", writePassword);