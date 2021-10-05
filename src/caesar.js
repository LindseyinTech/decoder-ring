/* PROMPT
caesar()
The caesar() function in the src/caesar.js file has three parameters:

input refers to the inputted text to be encoded or decoded.
shift refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e. "A" becomes "D") whereas a negative number means shifting to the left (i.e. "M" becomes "K").
encode refers to whether you should encode or decode the message. By default it is set to true.
When building the function, keep the following constraints and rules in mind:

If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.
Spaces should be maintained throughout, as should other non-alphabetic symbols.
Capital letters can be ignored.
If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it should wrap around to the front of the alphabet (e.g. "z" becomes "c").
Examples
caesar("thinkful", 3); //> 'wklqnixo'
caesar("thinkful", -3); //> 'qefkhcri'
caesar("wklqnixo", 3, false); //> 'thinkful'

caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

caesar("thinkful"); //> false
caesar("thinkful", 99); //> false
caesar("thinkful", -26); //> false*/

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //guard statement covering shift values
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    //if encode = false change the shift value
    if (encode === false) {
      shift = -shift;
    }
    //setting an empty return string to set our decoder to
    let output = "";
    input = input.toLowerCase();
    //loop through each letter
    for (let i of input) {
      //convert each string index to a number
      let convertedToNumbers = i.charCodeAt();
      //check if the converted index is a letter, if it is continue to shift
      if (convertedToNumbers >= 97 && convertedToNumbers <= 122) {
        convertedToNumbers += shift;
        //if shift causes letter to go past z, wrap to a
        if (convertedToNumbers > 122) {
          convertedToNumbers -= 26;
        }
        //if negative shift causes letter to go below a, wrap to z
        else if (convertedToNumbers < 97) {
          convertedToNumbers += 26;
        }
      }
      //converting numbers to letters and adding to empty output string
      output += String.fromCharCode(convertedToNumbers);
    }
    return output;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
