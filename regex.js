// import fetch from "node-fetch";
// const pets = [
//   "cat: Smith, Meowsalot",
//   "young dog: Jones, Barksalot",
//   "rabbit: Doe, Fluffy",
// ];
// ---------------------------------------------------------
// const petPattern = /([a-z\s]+):\s([a-z]+),\s([a-z]+)/i;

// const petUpdated = pets.map((pet) => {
//   return pet.replace(petPattern, "$3 $2 type: $1");
// });

// let container = document.querySelector(".container");
// let htmlElement = document.createElement("ul");
// petUpdated.forEach((pet) => {
//   let item = document.createElement("li");
//   item.innerText = pet;
//   htmlElement.append(item);
// });

// container.append(htmlElement);

//--------------------------------------------------------
// const usernameField = document.querySelector("#username-field");
// const usernameRules = document.querySelector(".username-rules");
// const usernameSuccess = document.querySelector(".username-success");

// usernameField.addEventListener("input", () =>
//   usernameChangeHandler(usernameField.value)
// );

// // Create a regular expression here that does the following
// // 1. Can only contain letters and the 26 letters of the alphabet
// // 2. Must begin with a letter, not a number
// // 3. Must be atleast 8 characters long, and not more than 30 characters
// const userNamePattern = /^[a-z][a-z0-9]{7,29}$/i;
// function usernameChangeHandler(userInput) {
//   // Use your regular expression here to test if userInput is valid or not
//   // If it is valid call the showGood function, if not, call the showBad function
//   if (userNamePattern.test(userInput)) {
//     showGood();
//   } else {
//     showBad();
//   }
// }

// function showGood() {
//   usernameSuccess.classList.remove("hidden");
//   usernameRules.classList.add("hidden");
// }

// function showBad() {
//   usernameSuccess.classList.add("hidden");
//   usernameRules.classList.remove("hidden");
// }

//-------------------------------------------------------------------------------
// const story =
//   "There are a lot of phone numbers. One is 5555555555, and another is 123-123-1234. Yet another is 321.321.4321. Another is 555 555 5555. Did you know another phone number is 1 555 555 5555 and my friend has a number of (555) 123 1234. My other friend has a number of 555 555-5555 and another has 1.987.654.3210.";

// document.querySelector("#app").insertAdjacentHTML("beforeend", story);

// const phonePattern = /1?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})/g;

// let results = story.match(phonePattern);
// console.log(results);
// if (!results) results = [];
// const resultUniform = results.map((result) => {
//   return result.replace(phonePattern, "($1) $2-$3");
// });
// console.log(resultUniform);
// document.querySelector("#app").insertAdjacentHTML(
//   "beforeend",
//   `
// <hr>
// <p>There are ${results.length} phone numbers in this string of text.</p>
// <ul>
//     ${resultUniform
//       .map((result) => {
//         return `<li>${result}</li>`;
//       })
//       .join("")}
// </ul>
// `
// );

const emailRegex = /^[a-zA-Z\.]+[0-9]+[@][a-z]+[\.][a-z]+/;

console.log(emailRegex.test("thang.pham1412@gmail.com"));

function checkPassword(password, password_repeat) {
  const regex = /[A-Z]+[a-z]+[\d]+[\w\d&$%§-]/;
  if (password === password_repeat) {
    if (password.length >= 8) {
      return regex.test(password);
    } else {
      console.log("pass less than 8 chars");
      return false;
    }
  } else {
    console.log("not matched");
    return false;
  }
}

// console.log(checkPassword("kg4N%sPrX$H", "kg4N%sPrX$H"));
