import { isString } from "./helpers.js";

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
