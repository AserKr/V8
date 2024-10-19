import { isString } from "./helpers.js";
import { reverse } from "./reverse.js";

/**
 * Checks whether a given string is a palindrome, which is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 *
 *
 * @param {string} str The input string to check.
 * @returns {boolean} Returns true if the input string is a palindrome, false otherwise. Returns false if the input is not a string or is an empty string.
 */
export function palindrome(str) {
  // Útfæra
  if (!isString(str) || str.length == 0) {
    return false;
  }

  return reverse(str) === str;
}

/**
 * Test cases for the palindrome function using console assertions.
 */
console.assert(
  palindrome("ramar") === true,
  "palindrome: identifies a valid palindrome"
);
console.assert(
  palindrome("hæh") === true,
  "palindrome: identifies a valid palindrome"
);
console.assert(
  palindrome("hello") === false,
  "palindrome: identifies a non-palindrome"
);
console.assert(
  palindrome("") === false,
  "palindrome: returns false for empty string"
);
console.assert(
  palindrome(12321) === false,
  "palindrome: returns false when input is not a string"
);
