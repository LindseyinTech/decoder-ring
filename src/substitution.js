const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    //if no alphabet provided, return false
    if (!alphabet) {
      return false;
    }
    //if alphabet is not exactly 26 characters, return false
    if (alphabet.length !== 26) {
      return false;
    }
    //if alphabet is not unique, return false
    for (let m = 0; m < alphabet.length; m++) {
      if (alphabet.lastIndexOf(alphabet[m]) !== m) {
        return false;
      }
    }
    //defining variables
    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    input = input.toLowerCase();
    let output = "";
    //if encoding, loop through the input, ignore spaces, use input character to find the index value in standard alphabet
    //return that index value in the substitution alphabet
    if (encode == true) {
      for (let j of input) {
        if (j == " ") {
          output += " ";
        } else {
          let indexValue = standardAlphabet.indexOf(j);
          output += alphabet[indexValue];
        }
      }
    }
    //if decoding, loop through the input, ignore spaces, use input character to find the index value in substitution alphabet
    //return that index value in the standard alphabet
    else {
      for (let i of input) {
        if (i == " ") {
          output += " ";
        } else {
          let indexValue = alphabet.indexOf(i);
          output += standardAlphabet[indexValue];
        }
      }
    }
    return output;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
