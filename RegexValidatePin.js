//ATM machines allow 4 or 6 digit PIN codes
//and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//If the function is passed a valid PIN string, return true, else return false.

/**/


function validatePIN(pin) {
  const fourDigits = /\b^\d{4}\b/g;
  const sixDigits = /\b^\d{6}\b/g;
  if (pin.match(fourDigits) || pin.match(sixDigits)) {
    return true;
  } else {
    return false;
  }
}

console.log(validatePIN('1234'));
