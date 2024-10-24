/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

/**
 * Import statements for the functions needed in this file
 */
import { splitOnWhitespace } from "./lib/helpers.js";
import { longest as longestFunction } from "./lib/longest.js";
import { shortest as shortestFunction } from "./lib/shortest.js";
import { vowels as vowelsFunction } from "./lib/vowels.js";
import { consonants as consonantsFunction } from "./lib/consonants.js";
import { reverse as reverseFunction } from "./lib/reverse.js";
import { palindrome as palindromeFunction } from "./lib/palindrome.js";

/**
 *
 * Queries DOM elements for interaction in the listeners below.
 */
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

/**
 * Handles the form submission event and Prevents default form behavior and logs the textarea value.
 *
 *
 * @param {Event} event The submit event triggered by the form.
 */
function submitHandler(event) {
  event.preventDefault();
  const { target } = event;
  const textareaElement = target.querySelector("textarea");
  console.log("textareaElement has", textareaElement.value);
}

/**
 * Adds an event listener to the form for handling submission.
 */
formElement.addEventListener("submit", submitHandler);

/**
 * Adds an event listener to the textarea element to handle input changes.
 * Updates the text elements based on the user's input.
 * - Shows/hides the container based on whether text is present, shows it when there is at least 1 string in the textarea element.
 * - Displays the longest and shortest words, the count of vowels and consonants, and whether the text is a palindrome.
 * - Reverses the input text.
 *
 * @param {Event} event The input event triggered when the user types in the textarea.
 */
textareaElement.addEventListener("input", (event) => {
  const text = event.target.value.trim();

  codeElement.textContent = text;

  if (splitOnWhitespace(text).length > 0) {
    container.classList.remove("hidden");
  } else {
    container.classList.add("hidden");
  }

  longestElement.textContent = longestFunction(text);
  shortestElement.textContent = shortestFunction(text);
  vowelsElement.textContent = vowelsFunction(text);
  consonantsElement.textContent = consonantsFunction(text);
  palindromeElement.textContent = palindromeFunction(text) ? "" : "ekki";
  reverseElement.textContent = reverseFunction(text);
});


formElement.addEventListener("reset", () => {
  container.classList.add("hidden")
})