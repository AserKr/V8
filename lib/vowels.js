import { isString } from "./helpers.js";

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
