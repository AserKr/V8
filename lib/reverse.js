import { isString } from "./helpers.js";

/**
 * Reverses the characters in a given string.
 *
 * @param {string} str The input string to reverse.
 * @returns {string|null} The reversed string. Returns an empty string if the input is empty, or null if the input is not a string.
 */
export function reverse(str) {
  // Útfæra

  let n = "";
  if (!isString(str)) {
    return null;
  } else if (str.length === 0) {
    return n;
  } else {
    n = str.split("").reverse().join("");
    return n;
  }
}

/**
 * Test cases for the reverse function using console assertions.
 */
console.assert(
  reverse("hæ") === "æh",
  "reverse: reverse the direction of a simple string"
);
console.assert(
  reverse("Noccothebest123") === "321tsebehtoccoN",
  "reverse: reverse the direction of a more difficult string"
);
console.assert(
  reverse(123) === null,
  "reverse: reverse the direction of an integer, returns null"
);
console.assert(
  reverse("") === "",
  "reverse: reverse the direction of an empty string, returns the empty string"
);
