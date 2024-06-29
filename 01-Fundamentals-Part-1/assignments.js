const country = "Sweden";
const continent = "Europe";
const population = 10;
const language = "Swedish";
const finland = 60;
const average = 33;
const isIsland = false;

console.log(
  `${country}´s population is ${
    population > average ? "above avarage" : "below average"
  }`
);

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(tipLessThan300 * bill);
// console.log(
//   `The bill was ${bill} and the tip was ${
//     tipLessThan300 * bill
//   }, and the total value ${tipLessThan300 * bill + bill}`
// );
console.log(
  `The bill was ${bill} and the tip was ${tip}, and the total value ${
    bill + tip
  }`
);

// if (language === "english" && population < 50 && !isIsland) {
//   console.log("Sarah should move to " + country);
// } else {
//   console.log("Sarah should not move to " + country);
// }

// const language = "english";

// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too :D");
//     break;
// }

// isIsland = true;

// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);
// console.log(typeof isIsland);
// console.log(typeof language);

// // population = 10490000 / 2;
// population++;
// console.log(population);

// console.log(population > finland);
// console.log(population > average);

// console.log(
//   country +
//     " is in " +
//     continent +
//     ", " +
//     "and its " +
//     population +
//     " million people speaks " +
//     language
// );

// const description = `${country} is in ${continent} and it's ${population} million people speaks ${language}`;

// console.log(description);

// if (population < average) {
//   console.log(
//     country +
//       "´s" +
//       " population is " +
//       (average - population) +
//       " million below average"
//   );
// } else {
//   console.log(
//     country +
//       "´s " +
//       "population is " +
//       (population - average) +
//       " million above than average"
//   );
// }

// const dolphinsGameOne = 96;
// const dolphinsGameTwo = 108;
// const dolphinsGameThree = 89;

// const koalasGameOne = 88;
// const koalasGameTwo = 91;
// const koalasGameThree = 110;

// const scoreDolphins = dolphinsGameOne + dolphinsGameTwo + dolphinsGameThree;
// console.log(scoreDolphins);
/*
console.log("9" - "5"); // -> ?
console.log("19" - "13" + "17"); // -> ?
console.log("19" - "13" + 17); // -> ?
console.log("123" < 57); // -> ?
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> ?

const numNeighbours = Number(
  prompt("How many neighbour countries does your contry have?")
  );
  console.log(numNeighbours);
  
  if (numNeighbours === 1) {
    console.log("Only 1 boarder!");
    } else if (numNeighbours > 1) {
      console.log("More than 1 boarder");
      } else {
  console.log("No boarders");
}

*/
