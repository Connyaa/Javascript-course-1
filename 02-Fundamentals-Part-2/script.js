"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 313;


function logger() {
  console.log("My name is Conny");
  }
  
  // calling / running / invoking function
  logger();
  logger();
  logger();
  
  function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
    }
    
    const appleJuice = fruitProcessor(5, 0);
    console.log(appleJuice);
    
    const appleOrangeJuice = fruitProcessor(2, 4);
    console.log(appleOrangeJuice);
    
    
    // function declaration
    function calcAge1(birthYear) {
      return 2024 - birthYear;
      }
      const age1 = calcAge1(1990);
      console.log(age1);
      
      // function expression
      const calcAge2 = function (birthYear) {
        return 2024 - birthYear;
        };
        
        const age2 = calcAge2(1990);
        
        console.log(age1, age2);
        
        */
// Arrow function
// const calcAge3 = (birthYear) => 2024 - birthYear;
// const age3 = calcAge3(1990);
// console.log(age3);

//       const yearsUntilRetirement = (birthYear, firstName) => {
//         const age = 2024 - birthYear;
//         const retirement = 65 - age;
//         // return retirement;
//         return `${firstName} retires in ${retirement}`;
//         };

//         console.log(yearsUntilRetirement(1990, "Conny"));
//         console.log(yearsUntilRetirement(2000, "Conny"));

//         function cutFruitPieces(fruit) {
//           return fruit * 4;
//           }

//           function fruitProcessor(apples, oranges) {
//             const applePieces = cutFruitPieces(apples);
// const orangesPieces = cutFruitPieces(oranges);
// const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;
// return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement}`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }

//   return retirement;
//   return `${firstName} retires in ${retirement}`;
// };
// console.log(yearsUntilRetirement(1990, "Conny"));
// console.log(yearsUntilRetirement(1950, "Mark"));

///////////////// ARRAYS ////////////
///////////////// ARRAYS ////////////
///////////////// ARRAYS ////////////
///////////////// ARRAYS ////////////

/////////////////////////////////////
///////INTRODUCTION TO OBJECTS
// const connyArrays = [
//   "Conny",
//   "Aakerholm",
//   2024 - 1990,
//   "masturbator",
//   ["Michael", "Peter", "Steven"],
// ];

// const friends = ["Michael", "Steven", "Peter"];

// const y = new Array(1990, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";

// const conny = ["Conny", "Aakerholm", 2024 - 1990, "masturbator", friends];

// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// const friends = ["Michael", "Steven", "Peter"];
// // Add name in the end
// friends.push("Jay");
// console.log(friends);

// // Add name at the beginning
// friends.unshift("John");

// // Remove elements
// friends.pop(); // remove last
// const popped = friends.pop();
// console.log(friends);

// friends.shift(); // remove first

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob")); // -1

// console.log(friends.includes("Steven")); // true
// console.log(friends.includes("Bob")); // false

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }
///////////////////////////////////////////////
/////////DOT vs BRACKET NOTATION
// const conny = {
//   firstName: "Conny",
//   lastName: "Aakerholm",
//   birthYear: 1990,
//   job: "Masturbater",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicenese: true,

//   calcAge: function (birthYear) {
//     return 2024 - birthYear;
//   },
// };
// console.log(conny);

// console.log(conny.lastName);
// console.log(conny["lastName"]);

// const nameKey = "Name";
// console.log(conny["first" + nameKey]);
// console.log(conny["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Conny? Choose between firstName, lastName, age, job and friends"
// );

// if (conny[interestedIn]) {
//   console.log(conny[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job and friends"
//   );
// }

// conny.location = "Sweden";
// conny["twitter"] = "@connyaakerholm";

// console.log(
//   `${conny.firstName} has ${conny.friends.length} friends, and his best friend is called ${conny.friends[0]}`
// // );

// const conny = {
//   firstName: "Conny",
//   lastName: "Aakerholm",
//   birthYear: 1990,
//   job: "masturbator",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicenese: true,

// calcAge: function (birthYear) {
//   return 2024 - birthYear;
// },
// calcAge: function () {
//   return 2024 - this.birthYear;
// },
//   calcAge: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       conny.job
//     }, and he has ${this.hasDriversLicenese ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(conny.calcAge());
// console.log(conny.age); // 34
// console.log(conny.age); // 34
// console.log(conny.age); // 34

// console.log(conny.getSummary());
// console.log(conny["calcAge"](1990)); // 34
// Conny is a 34-year old masturbator, and he has a/no driver's licenese"

// if (conny.hasDriversLicenese === true) {
//   console.log(
//     `${conny.firstName} is a ${conny.age}-year old ${conny.job}, and he has a driver's license`
//   );
// } else {
//   console.log(
//     `${conny.firstName} is a ${conny.age}-year old ${conny.job}, and he doesn't have a driver's license`
//   );
// }

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };
// console.log(mark.calcBMI());

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };
// console.log(john.calcBMI());

// if (john.calcBMI() > mark.calcBMI()) {
//   console.log(
//     `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
//       mark.fullName
//     }'s (${mark.calcBMI()})`
//   );
// } else {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
//       john.fullName
//     }'s (${john.calcBMI()})`
//   );
// }

/////// ITERATION: THE FOR LOOP ///////////////
/////// ITERATION: THE FOR LOOP ///////////////
/////// ITERATION: THE FOR LOOP ///////////////
/////// ITERATION: THE FOR LOOP ///////////////
/////// ITERATION: THE FOR LOOP ///////////////

///// loop statment has 3 parts
///// 1st part: the initial value of a counter
///// 2nd part: is a logical condition that is evaluated before each iteration of the loop
//// so before each time that the code and the loop is executed
//// 3rd part: updating the counter after each iteration

///// for loop keeps running while conditions is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// const conny = [
//   "Conny",
//   "Aakerholm",
//   2024 - 1990,
//   "masturbator",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// const types = [];

// for (let i = 0; i < conny.length; i++) {
//   // Reading from conny array
//   console.log(conny[i], typeof conny[i]);

//   // Filling types array
//   // types[i] = typeof conny[i];
//   types.push(typeof conny[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2024 - years[i]);
// }
// console.log(ages);

// /////////////////////////////////////////
// ////// Continue and break
// // Only strings
// for (let i = 0; i < conny.length; i++) {
//   if (typeof conny[i] !== "string") continue;
//   console.log(conny[i], typeof conny[i]);
// }
// ///// Break with number
// for (let i = 0; i < conny.length; i++) {
//   if (typeof conny[i] === "number") break;
//   console.log(conny[i], typeof conny[i]);
// }

// const conny = [
//   "Conny",
//   "Aakerholm",
//   2024 - 1990,
//   "masturbator",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// for (let i = conny.length - 1; i >= 0; i--) {
//   console.log(i, conny[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------------ Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`Loop is about to end...`);
// }
