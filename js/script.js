/**
 * Arrow Functions: Understanding const myFunction = () => { ... }.
 * Destructuring: Extracting values from objects and arrays effortlessly.
 * Template Literals: Using backticks (`) for string interpolation.
 * Array Methods: Mastering .map(), .filter(), and .reduce() is non-negotiable, as these are used constantly to render lists in React.
 * Spread & Rest Operators: Using ... to copy objects or combine arrays.
 */

// const func1 = () => {
//   console.log("I am Arrow function");
// };
// func1();

// //! explicit return :- using "return" keyword
// // NOTE : In explicit return {} is mandatory
// const func2 = () => {
//   return "I am Arrow Function 2";
// };
// console.log(func2());

// //! implicit return : without using "return" keyword
// // NOTE : In implicit return {} is not required
// const func3 = () => "I am Arrow function 3";
// console.log(func3());

// //! another way of implicit
// const func4 = () => ({ name: "John" });
// console.log(func4());

// //! Template Literals : using backticks ``
// // string interpolation : ${}

// let fname = "John";
// let lname = "Doe";

// let str = `Heyy !!
// I am ${fname} ${lname}
// `;

// console.log(str);

// //! OBJECT DESTRUCTURING
// const user = {
//   id: 1,
//   firstName: "Henry",
//   lastName: "Doe",
//   age: 20,
// };

// const { firstName , age } = user;
// console.log(firstName , age);

//! MODULES IN JAVASCRIPT
/**
 * Modules are simple functions that can be shared with different js files
 * There are 2 types of modules
 * 1) Named
 * 2) Default
 */

import { add as addition, substract } from "./functions.js";
import mul from "./functions.js";

addition(10, 20);
substract(30, 5);
mul(5, 2);
