"use strict";

// const printForecast = function () {
//   const arr = [17, 21, 23];
//   for (let i = 0; i < arr.length; i++) {}

//   console.log(
//     `... ${arr[0]}° in 1 days ... ${arr[1]}° in 2 days ... ${arr[2]}° in 3 days ...`
//   );
// };

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log("... " + str);
};
printForecast(data1);
