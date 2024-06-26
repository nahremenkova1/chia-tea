
/**
 * String.toLowerCase wrapper
 */
function lowerCase(str) {
  return str.toLowerCase();
}

/**
 *  String.toUpperCase wrapper
 */
function upperCase(str) {
  return str.toUpperCase();
}

/**
 * Add space between camelCase text
 */
function spaceCamelCase(str) {
  str = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2");
  str = str.toLowerCase();
  return str;
}

/**
 * Replaces all accented characters with normal characters
 */
function replaceAccented(str) {
  if (str.search(/[\xC0-\xFF]/g) > -1) {
    str = str
      .replace(/[\xC0-\xC5]/g, "A")
      .replace(/[\xC6]/g, "AE")
      .replace(/[\xC7]/g, "C")
      .replace(/[\xC8-\xCB]/g, "E")
      .replace(/[\xCC-\xCF]/g, "I")
      .replace(/[\xD0]/g, "D")
      .replace(/[\xD1]/g, "N")
      .replace(/[\xD2-\xD6\xD8]/g, "O")
      .replace(/[\xD9-\xDC]/g, "U")
      .replace(/[\xDD]/g, "Y")
      .replace(/[\xDE]/g, "P")
      .replace(/[\xE0-\xE5]/g, "a")
      .replace(/[\xE6]/g, "ae")
      .replace(/[\xE7]/g, "c")
      .replace(/[\xE8-\xEB]/g, "e")
      .replace(/[\xEC-\xEF]/g, "i")
      .replace(/[\xF1]/g, "n")
      .replace(/[\xF2-\xF6\xF8]/g, "o")
      .replace(/[\xF9-\xFC]/g, "u")
      .replace(/[\xFE]/g, "p")
      .replace(/[\xFD\xFF]/g, "y");
  }

  return str;
}

/**
 * Remove characters that are not words.
 */
function removeNonWordChar(str) {
  return str.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, "");
}

/**
* Reverse String
*/
const reverseString = (str) => {
    return str.split('').reverse().join('');
}

/**
* Check identical String
*/
const isIdenticalString = (strOne, strTwo) => {
    return strOne === strTwo;
}

/**
* Capitalize First Letter
*/
const capitalizeFirstLetter = (word) => {
    const firstLetter = word.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = word.slice(1)
    return `${firstLetterCap}${remainingLetters}`;
}

/**
 * Convert string to camelCase text.
 */
function camelCase(str) {
  str = replaceAccented(str);
  str = removeNonWordChar(str)
    .replace(/\-/g, " ")
    .replace(/\s[a-z]/g, upperCase)
    .replace(/\s+/g, "") 
    .replace(/^[A-Z]/g, lowerCase);
  return str;
}

/**
 * UPPERCASE first char of each sentence and lowercase other chars.
 */
function sentenceCase(str) {
  return lowerCase(str).replace(/(^\w)|\.\s+(\w)/gm, upperCase);
}

module.exports = {
  reverseString,
  isIdenticalString,
  capitalizeFirstLetter,
  lowerCase,
  upperCase,
  camelCase,
  sentenceCase,
  replaceAccented,
  removeNonWordChar,
  spaceCamelCase
};
