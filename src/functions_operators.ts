// // const adding = (a: number, b: number = 1) => a + b;

// // console.log(adding(5));

// // const printOutput: (a: number | string) => void = (output) =>
// //   console.log(output);

// // const button = document.querySelector("button");

// // if (button) {
// //   button.addEventListener("click", (event) => console.log(event));
// // }

// const hobbies = ["Sports", "Cooking"];
// const activeHobbies = ["Hiking"];

// activeHobbies.push(...hobbies);

// console.log(activeHobbies);

// const persona = {
//   name: "Max",
//   age: 30,
// };

// const copiedPerson = { ...persona };
// console.log("Persona:");
// console.log(persona);
// console.log("CopiedPersona:");
// console.log(copiedPerson);

// const personaTwo = {
//   name: "Piotr",
//   age: 31,
// };

// const personaTwoCopy = { ...personaTwo };
// console.log("PersonaTwoCopy");
// console.log(personaTwoCopy);

// personaTwo.name = "Kudlaty";
// console.log(personaTwo);
// console.log(personaTwoCopy);

// const adding = (...numbers: number[]) => {
//   return numbers.reduce((curResult, curValue) => {
//     return curResult + curValue;
//   }, 0);
// };

// const addedNumbers = adding(5, 10, 2, 3.7);
// console.log(addedNumbers);

// const [hobby1, hobby2, ...remainingHobbies] = hobbies
// // const button = document.querySelector("button")!;

// // button.addEventListener("click", () => {
// //   console.log("Clicked!");
// // });

// // let userInput: unknown;
// // let userName: string;

// // userInput = 5;
// // userInput = "Max";
// // console.log(userInput);

// // if (typeof userInput === "string") {
// //   userName = userInput;
// // }

// // function generateError(message: string, code: number) {
// //   throw { message: message, errorCode: code };
// // }

// // generateError("An error occured!", 500);
