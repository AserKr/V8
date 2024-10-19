import { isString } from "./helpers.js";

/**
 * Counts the number of vowels in a given string.
 * Vowels considered: a, e, i, o, u, y, á, é, ý, ú, í, ó, ö, æ
 *
 * @param {string} str The input string to analyze.
 * @returns {number} The number of vowels found in the string. Returns 0 if the input is not a string.
 */
export function vowels(str) {
  // Útfæra
  let n = 0;
  const VOWELS = "aeiouyáéýúíóöæ".split("");

  if (!isString(str)) {
    return n;
  }

  let wordvowels = str.toLowerCase().split("");

  for (let i = 0; i < wordvowels.length; i++) {
    if (VOWELS.includes(wordvowels[i])) {
      n++;
    }
  }

  return n;
}

/**
 * Test cases for the vowels function using console assertions.
 */
console.assert(
  vowels("Jæja strákar") === 4,
  "vowels: counts vowels in a sentence"
);
console.assert(vowels("aaa") === 3, "vowels: counts vowels in a string");
console.assert(
  vowels("bcdfgssszzz") === 0,
  "vowels: returns 0 when there are no vowels"
);
console.assert(vowels("") === 0, "vowels: returns 0 for empty string");
console.assert(
  vowels(12345) === 0,
  "vowels: returns 0 when input is not a string"
);
console.assert(
  vowels("zzzzzzzzzaeiouyáéýúíóöæzzzzzzzzzz") === 14,
  "vowels: recognizes all of the icelandic vowels"
);
