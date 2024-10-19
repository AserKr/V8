import { splitOnWhitespace } from "./lib/helpers.js";
import { longest as longestFunction } from "./lib/longest.js";
import { shortest as shortestFunction } from "./lib/shortest.js";
import { vowels as vowelsFunction } from "./lib/vowels.js";
import { consonants as consonantsFunction } from "./lib/consonants.js";
import { reverse as reverseFunction } from "./lib/reverse.js";
import { palindrome as palindromeFunction } from "./lib/palindrome.js";

const textareaElement = document.querySelector("textarea");
const formElement = document.querySelector("form");
const codeElement = document.querySelector("code .input");
const container = document.querySelector(".hidden");
const longestElement = document.querySelector(".longest");
const shortestElement = document.querySelector(".shortest");
const vowelsElement = document.querySelector(".vowels");
const consonantsElement = document.querySelector(".consonants");
const reverseElement = document.querySelector(".reversed");
const palindromeElement = document.querySelector(".palindrome");

function submitHandler(event) {
  event.preventDefault();
  console.log("submit", event);
}
formElement.addEventListener("submit", submitHandler);

textareaElement.addEventListener("input", (event) => {
  const text = event.target.value.trim();

  codeElement.textContent = text;

  if (splitOnWhitespace(text).length > 0) {
    container.classList.remove("hidden");
  } else {
    container.classList.add("hidden");
  }

  // Update content based on current input
  longestElement.textContent = longestFunction(text);
  shortestElement.textContent = shortestFunction(text);
  vowelsElement.textContent = vowelsFunction(text);
  consonantsElement.textContent = consonantsFunction(text);
  palindromeElement.textContent = palindromeFunction(text) ? "" : "ekki";
  reverseElement.textContent = reverseFunction(text);
});
