/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Conny");
console.log("23");

let firstName = "Conny";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);



let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Conny");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1990;
console.log(typeof year);

let age = 30;
age = 31;

const birthYear = 1990;

var job = "programmer";
job = "teacher";
console.log(job);

// Math operators
const now = 2024;
const ageConny = now - 1990;
const ageSara = now - 2000;
console.log(ageConny, ageSara);

console.log(ageConny * 2, ageConny / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Conny";
const lastName = "Aakerholm";
console.log(firstName + " " + lastName);

// Assignment Operatiors
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--;
console.log(x);

// Comparison operators
console.log(ageConny > ageSara); // >, <, >=, <=
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;

console.log(now - 1990 > now - 2000);


const now = 2024;
const ageConny = now - 1990;
const ageSara = now - 2000;

console.log(now - 1990 > now - 2000);

const firstName = "Conny";
const job = "Developer";
const birthYear = 1990;
const year = 2024;

const conny =
"I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(conny);

const connyNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(connyNew);

console.log(
  "string with \n\
  multipe \n\
  lines"
  );
  
  console.log(`String
  with
  multiple
  lines`);

  const age = 15;

  if (age >= 18) {
    console.log(`Sarah can start driving license 🚗`);
    } else {
      const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
    }
    
    const birthYear = 1990;
    
    let century;
if (birthYear <= 2000) {
  century = 20;
  } else {
    century = 21;
}
console.log(century);

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
  } else {
    console.log("You should get a job!");
}

let height;
if (height) {
  conso;
  }
  const age = 18;
  if (age === 18) console.log("You just became an adult");
  */

//  PROMPT

// const favourite = Number(prompt("What's your favourite number?)"));
// console.log(favourite);

// if (favourite === 13) {
//   console.log("Awsome");
// } else if (favourite === 7) {
//   console.log("Cool");
// } else {
//   console.log("Not cool or awsome");
// }

// if (favourite !== 13) console.log("Why not 13?");

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log(`Someone else should drive...`);
// }
/*
const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log(`Someone else should drive...`);
}

const day = "wednesday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}
*/
/*
const monday = false;
const tuesday = false;
const wednesday = false;
const thursday = true;
const friday = false;
const saturday = false;
const sunday = false;

if (monday) {
  console.log(`Plan course structure
Go to coding meetup`);
} else if (tuesday) {
  console.log(`Prepare theory video`);
} else if (wednesday || thursday) {
  console.log(`Write code examples`);
} else if (friday) {
  console.log(`Record videos`);
} else if (saturday || sunday) {
  console.log(`Enjoy the weekend :D`);
} else {
  console.log(`Not a valid day`);
}


const day = "wednesday";

if (day === "monday") {
  console.log(`
  Plan course structure
  Go to coding meetup`);
  } else if (day === "tuesday") {
    console.log(`Prepare theory video`);
    } else if (day === "wednesday" || day === "thursday") {
      console.log(`Write code examples`);
      } else if (day === "friday") {
        console.log(`Record videos`);
        } else if (day === "saturday" || day === "sunday") {
          console.log(`Enjoy the weekend :D`);
          } else {
            console.log(`Not a valid day`);
}

*/

const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? `wine 🍷` : `water 💧`;
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = `wine`;
} else {
  drink2 = `water`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
