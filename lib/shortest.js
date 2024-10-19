import { isString } from "./helpers.js";

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
