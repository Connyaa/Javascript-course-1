"use strict";

// const scoreDolphins = (44 + 23 + 71) / 3;
// const scoreKoalas = (65 + 54 + 49) / 3;

// console.log(scoreDolphins);
// console.log(scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win");
// }

// const describeCountry = function (country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
// };

// const country1 = describeCountry("Sweden", 10, "Stockholm");
// const country2 = describeCountry("Finland", 60, "Helsinki");
// const country3 = describeCountry("Spain", 80, "Madrid");
// console.log(country1, country2, country3);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const populations = [1441, 332, 80, 60];

// console.log(populations.length === 4); // true

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// console.log(percentages);

// const populationChina = percentageOfWorld1(1441);
// const populationSweden = percentageOfWorld1(10);
// const populationFinland = percentageOfWorld1(60);
// console.log(populationChina, populationSweden, populationFinland);

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };
// const populationChina2 = percentageOfWorld2(1441);
// const populationSweden2 = percentageOfWorld2(10);
// const populationFinland2 = percentageOfWorld2(60);
// console.log(populationChina2, populationSweden2, populationFinland2);

// const percentageOfWorld3 = (population) => (population / 7900) * 100;
// const percChina3 = percentageOfWorld3(1441);
// console.log(percChina3);

// const describePopulation = function (country, population) {
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
//   console.log(description);
// };

// describePopulation("Portugal", 10);
// describePopulation("China", 1441);
// describePopulation("USA", 332);

// const calcAverage = (averageScore) => averageScore / 3;
// const calcDolphins = calcAverage(44 + 23 + 71);
// const calcKoala = calcAverage(65 + 54 + 49);
// console.log(calcDolphins, calcKoala);

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(44, 23, 71));
// console.log(calcAverage(65, 54, 49));

// // const scoreDolphins = calcAverage(44, 23, 71);
// // const scoreKoalas = calcAverage(65, 54, 49);
// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins...");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// const calcTip = function (bill) {
//   const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// };

// const tip1 = calcTip(100);
// console.log(tip1);

// const bills = [125, 555, 44];
// const tips = [calcTip(125), calcTip(555), calcTip(44)];
// const totals = [bills + tips];

// console.log(bills);
// console.log(tips);
// console.log(totals);

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills);
// console.log(tips);
// console.log(totals);

// const neighbours = ["Norway", "Finland", "Denmark"];
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central european country :D");
// }

// console.log(neighbours.indexOf("Finland"));
// neighbours[1] = "Republic of Finland";
// console.log(neighbours);

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry["population"] -= 2;
// console.log(myCountry.population);

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

// const myCountry = {
//   country: "Sweden",
//   capital: "Stockholm",
//   language: "swedish",
//   population: 10,
//   neighbours: ["Norway", "Finland", "Denmark"],

//   describe: function () {
//     return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
//   },
//   checkIsland: function () {
//     this.isIsland = this.neighbours.length === 0 ? true : false;
//     return this.isIsland;
//   },
// };
// console.log(myCountry.describe());
// console.log(myCountry.checkIsland());

// for (let vote = 1; vote <= 50; vote++) {
//   console.log(`Voter number ${vote} is currently voting.`);
// }

/////////////////////////////////////////////////
///////////////////////// SAME AS BELLOW
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const populations = [1441, 332, 80, 60];

// console.log(populations.length === 4); // true

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// console.log(percentages);

///////////////////////////////////////////////////////
/////////////////////////////////// THIS (BEST SOLUTION)
// const populations = [1441, 332, 80, 60];
// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//   percentages2.push((populations[i] / 7900) * 100);
// }
// console.log(percentages2);

//////////---------------AND THIS (BUT WHY)----------------------------------

// const populations = [1441, 332, 80, 60];
// const percentages3 = [];
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// let i = 0;
// while (i < populations.length) {
//   const perc = percentageOfWorld1(populations[i]);
//   percentages3.push(perc);
//   i++;
// }

// console.log(percentages3);

//////////////////////________________________________________
// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];
// console.log(listOfNeighbours);
// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let y = 0; y < listOfNeighbours[i].length; y++)
//     console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   total.push(tip + bills[i]);
// }
// console.log(bills, tips, total);

///////////////////////////////////////////////////////////////
///////////////HuR DU FELSÖKER

// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     // console.log(bill);
//     bill = bill * 0.15;
//     console.log("15%");
//     // console.log(bill);
//   } else {
//     bill = bill * 0.2;
//     console.log("20%");
//   }
//   return bill;
// };
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i]
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));


// const populations = [1441, 332, 80, 60];
// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//   percentages2.push((populations[i] / 7900) * 100);
// }
// console.log(percentages2);
