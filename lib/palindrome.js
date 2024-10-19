import { isString } from "./helpers.js";
import { reverse } from "./reverse.js";
export function palindrome(str) {
  // Útfæra
  if (!isString(str) || str.length == 0) {
    return false;
  }

  return reverse(str) === str;
}
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
