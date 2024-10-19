import { isString } from "./helpers.js";

/**
 * Finds the shortest word in a given string. If the input is not a string or is empty, it returns appropriate values.
 *
 * @param {string} str The input string to analyze.
 * @returns {string|null} The shortest word in the input string. Returns an empty string if the input is empty and null if the input is not a string.
 */
export function shortest(str) {
  // Útfæra

  let n = "";
  if (!isString(str)) {
    return null;
  } else if (str.length === 0) {
    return n;
  } else {
    let words = str.split(" ");
    n = words[0];

    for (let word of words) {
      if (word.length < n.length) {
        n = word;
      }
    }

    return n;
  }
}

/**
 * Test cases for the shortest function using console assertions.
 */
console.assert(
  shortest("Aser goes to HÍ") === "to",
  "shortest: returns the shortest word from a sentence"
);
console.assert(
  shortest("bb bab ccsdsc") === "bb",
  "shortest: returns the shortest word from random strings"
);
console.assert(
  shortest("") === "",
  "shortest: returns empty string for empty input"
);
console.assert(
  shortest(12345) === null,
  "shortest: returns null when input is not a string"
);
