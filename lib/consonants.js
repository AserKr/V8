import { isString } from "./helpers.js";

export function consonants(str) {
  // Útfæra
  const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

  let n = 0;
  if (!isString(str)) {
    return n;
  }

  let wordcons = str.toLowerCase().split("");

  for (let i = 0; i < wordcons.length; i++) {
    if (CONSONANTS.includes(wordcons[i])) {
      n++;
    }
  }

  return n;
}

console.assert(
  consonants("Jæja strákar") === 7,
  "consonants: counts consonants in a sentence"
);
console.assert(
  consonants("bbb") === 3,
  "consonants: counts consonants in a string of consonants"
);
console.assert(
  consonants("aeiou") === 0,
  "consonants: returns 0 when there are no consonants"
);
console.assert(consonants("") === 0, "consonants: returns 0 for empty string");
console.assert(
  consonants(12345) === 0,
  "consonants: returns 0 when input is not a string"
);
console.assert(
  consonants("aaaaaaaaaaaaaaaaaabcdfghjklmnpqrstvwxzaaaaaaaaaaaaaaaaa") === 20,
  "consonants: recognizes all of the consonants"
);
