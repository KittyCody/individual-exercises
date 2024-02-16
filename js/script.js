let username = prompt("What is your name ?");
let message = `Hello, ${username} !`;
let emoji = "\u{1F92A}";
message += emoji;
const h2 = document.querySelector("h2");
h2.textContent = message;
let userAge = prompt("What is your year of birth ?");
const userYear = parseInt(userAge);
const actualYear = new Date().getFullYear();
if (isNaN(userYear) || userYear > 2024 || userYear < 1920) {
  alert("Would you type a valid year ?");
} else {
  const monthOfBirth = prompt(
    "What is your birth month? Type a number from 1-12;"
  );
  const monthOfBirthNumber = parseInt(monthOfBirth);
  let actuelMonth = new Date().getMonth();
  if (isNaN(monthOfBirth) || monthOfBirth < 1 || monthOfBirth > 12) {
    alert("Would you type a correct number ?");
  }
  let age = actualYear - userYear;
  if (actuelMonth > monthOfBirthNumber) {
    console.log(`You are ${age} old !`);
  }
  const h3 = document.querySelector("h3");
  h3.textContent = age;
}
