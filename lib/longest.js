import { isString } from "./helpers.js";

/**
 * Finds the longest word in a given string. If the input is not a string or is empty, it returns appropriate values.
 *
 * @param {string} str The input string to analyze.
 * @returns {string|null} The longest word in the input string. Returns an empty string if the input is empty and null if the input is not a string.
 */

export function longest(str) {
  // Útfæra

  let n = "";
  if (!isString(str)) {
    return null;
  } else if (str.length === 0) {
    return n;
  } else {
    let words = str.split(" ");

    for (let word of words) {
      if (word.length > n.length) {
        n = word;
      }
    }

    return n;
  }
}

/**
 * Test cases for the longest function using console assertions.
 */
console.assert(
  longest("Aser is a software engineering student") === "engineering",
  "longest: returns the longest word from a sentence"
);
console.assert(
  longest("a bb ccc") === "ccc",
  "longest: returns the longest word from random strings"
);
console.assert(
  longest("") === "",
  "longest: returns empty string for empty input"
);
console.assert(
  longest(12345) === null,
  "longest: returns null when input is not a string"
);
