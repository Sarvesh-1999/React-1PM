let obj1 = {
  username: "",
  email: "",
  password: "",
};

let obj2 = {
  ...obj1,
  Username: "John Doe",
};

console.log(obj2);

// let x = "password";

// let obj = {
//   [x]: "John Doe",
// };

// // console.log(obj); // { x : "John Doe" }

// ["username", "email", "password"].forEach((ele) => {
//   let newObj = {
//     ele: "NA",
//   };

//   console.log(newObj);
// });
